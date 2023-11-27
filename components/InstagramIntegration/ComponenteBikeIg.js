import Link from "next/link";
import { Badge, Card } from "react-bootstrap";
import { CDN } from "utils/constantes";
import propTypes from "prop-types";
import { BsShieldFillCheck } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

ComponenteBikeIg.propTypes = {
  id: propTypes.any.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  off: propTypes.number,
  image: propTypes.string.isRequired,
  etiqueta: propTypes.string,
  verified: propTypes.bool,
};

export function ComponenteBikeIg({
  id,
  name,
  title,
  price,
  off,
  image,
  etiqueta = null,
  verified = false,
  sold = false,
  ...props
}) {
  function Descuento(original, off) {
    const descuento = original - off;
    const porcentaje = ((descuento / original) * 100).toFixed(0);

    if (porcentaje == 100) {
      return 99;
    }

    return porcentaje;
  }

  if (sold) {
    console.log(sold);
  }

  const [publisher, setPublisher] = useState(false);
  const viewPublisher = "Se ha publicado correctamente";
  const [seEjecuto, setSeEjecuto] = useState(false);

  const mostrarTexto = () => {
    if (!seEjecuto) {
      setSeEjecuto(true);
      setPublisher(true);
      console.log(JSON.stringify(title));
      console.log(
        JSON.stringify(
          `${CDN}${image}?width=500&height=180&quality=60&webp=true&format=webp&fit=cover&optimize=medium`
        )
      );
    }
  };

  // publicar en instagram
  async function uploadImage(
    image_url,
    access_token,
    ig_user_id,
    caption = ""
  ) {
    const post_url = `https://graph.facebook.com/v18.0/${ig_user_id}/media`;
    const payload = {
      image_url: image_url,
      caption: caption,
      access_token: access_token,
    };

    const response = await axios.post(post_url, payload);
    return response.data;
  }

  async function publishImage(result, access_token, ig_user_id) {
    if ("id" in result) {
      const creation_id = result.id;
      const second_url = `https://graph.facebook.com/v18.0/${ig_user_id}/media_publish`;
      const second_payload = {
        creation_id: creation_id,
        access_token: access_token,
      };

      // Activar el toast antes de realizar la solicitud
      toast.promise(
        axios.post(second_url, second_payload),
        {
          loading: "Publicando en Instagram...",
          success: "Imagen publicada en Instagram",
          error: "Error al publicar la imagen en Instagram",
        },
        {
          style: {
            // minWidth: '250px',
            // boxShadow: "none",
            border: "1px solid #0fa899",
            // border: "1px solid #0fa899",
          },
        }
      );
    } else {
      toast.error("No se pudo publicar la imagen");
      console.log("No se pudo publicar la imagen");
    }
  }

  const ig_user_id = process.env.NEXT_PUBLIC_INSTAGRAM_IG_USER_ID;
  const access_token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const image_url = `${CDN}${image}`;
  const caption = `${title} ${name} ${price} #bici #bicicleta #bike #bicycle #ciclismo #ciclista #cycling #mtb #bicicletas #bikes #ciclistas #bikelife #ciclismodecarretera #ciclismomtb #ciclis `;

  async function publicar() {
    const result = await uploadImage(
      image_url,
      access_token,
      ig_user_id,
      caption
    );
    await publishImage(result, access_token, ig_user_id);
  }

  return (
    <Card className="p-0" {...props}>
      {/* <Link href={`/parking/${id}`} passHref> */}
      <div className="m-3 position-relative">
        <Badge className="mb-1" bg={etiqueta ? "primary" : ""}>
          {etiqueta}
        </Badge>

        <Card.Img
          variant="top"
          src={`${CDN}${image}?width=500&height=180&quality=60&webp=true&format=webp&fit=cover&optimize=medium`}
          style={{
            maxHeight: "180px",
            minHeight: "180px",
            borderRadius: "5px",
            objectFit: "cover",
            width: "100%",
          }}
        />
        {/*  sello de verificado */}
        {verified && !sold && (
          <div
            className="px-2"
            style={{
              position: "absolute",
              bottom: -4,
              left: 10,
              backgroundColor: "#0fa899",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BsShieldFillCheck />
            <span className="ms-2">Verificado</span>
          </div>
        )}
        {sold && (
          <div
            className="px-2"
            style={{
              position: "absolute",
              bottom: -4,
              left: 10,
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="ms-2">Vendido</span>
          </div>
        )}
      </div>
      <Card.Body className="pt-0">
        <Card.Text
          style={{
            color: "rgba(108, 117, 125, 1)",
          }}
        >
          {name}
        </Card.Text>
        <Card.Title style={{ color: "black" }}>{title}</Card.Title>
        <Card.Text
          style={{
            color: "rgba(108, 117, 125, 1)",
          }}
        >
          ${off ?? price}
          {off ? (
            <span className=" mx-1">
              <span
                className="me-2"
                style={{
                  textDecoration: "line-through",
                }}
              >
                {price?.toLocaleString("en")}
              </span>
              <span
                style={{
                  color: "#0fa899",
                }}
              >
                {Descuento(price, off)}% off
              </span>
              <span>{}</span>
            </span>
          ) : (
            ""
          )}
          {/* Ig Button */}
          <span className="text-start d-block ">
            <button
              className=" btn btn-primary my-2 d-block "
              onClick={publicar}
            >
              Publicar en Ig
            </button>
            {publisher && (
              <span className=" my-2 d-block">{viewPublisher}</span>
            )}
          </span>
          <span className=" h5 text-start ">
            <Link href={`/parking/${id}`} passHref>
              ver bici
            </Link>
          </span>
        </Card.Text>
      </Card.Body>
      {/* </Link> */}
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </Card>
  );
}
