import Link from "next/link";
import { Badge, Card } from "react-bootstrap";
import { CDN } from "utils/constantes";
import propTypes from "prop-types";
import { BsShieldFillCheck } from "react-icons/bs";
import useCustomHook from "hooks/instaPublish/TemplateInstaPublish";
import { useState } from "react";

ComponenteBike.propTypes = {
  id: propTypes.any.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  off: propTypes.number,
  image: propTypes.string.isRequired,
  etiqueta: propTypes.string,
  verified: propTypes.bool,
};

export function ComponenteBike({
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const {
    tags,
    setTags,
    pass,
    setPass,
    legal,
    setLegal,
    selectTitle,
    setSelectTitle,
    publishing,
    setPublishing,
    selectOne,
    setSelectOne,
    handleSelectOption,
    handleContentPass,
    handleContentTags,
    handleLegal,
    handleTitle,
  } = useCustomHook();


  const ig_user_id = process.env.NEXT_PUBLIC_INSTAGRAM_IG_USER_ID;
  const access_token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const image_url = `${CDN}${image}`;
  const caption = `${selectTitle}

   ${title}


   ${price} 

   ${pass} 

   ${legal} 

   ${tags}  `;

  // funcionalidad para publicar en Instagram
  async function publicar() {
    const result = await uploadImage(
      image_url,
      access_token,
      ig_user_id,
      caption,
    );
    await publishPostInstagram(result, access_token, ig_user_id);
  }

  const handlePublish = async () => {
    setPublishing(true);
    try {
      await publicar();
      handleClose(); // cerrar el modal despues de publicar
    } catch (error) {
      toast.error("Error al publicar", error);
      console.log(error)
    } finally {
      setPublishing(false);
    }
  };

  return (
    <Card className="p-0" {...props}>
      <Link href={`/parking/${id}`} passHref>
        <div className="m-3 position-relative">
          {" "}
          <Badge className="mb-1" bg={etiqueta ? "primary" : ""}>
            {etiqueta}{" "}
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
              </span>
            ) : (
              ""
            )}
          </Card.Text>
          

        </Card.Body>
      </Link>
    </Card>
  );
}
