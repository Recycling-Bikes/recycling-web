import Link from "next/link";
import { Badge, Card } from "react-bootstrap";
import { CDN } from "utils/constantes";
import propTypes from "prop-types";
import { BsShieldFillCheck } from "react-icons/bs";
import { useState } from "react";

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
        <Card.Title style={{ color: "black" }}>{title }</Card.Title>
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
          <main className=" text-center">
            <button onClick={mostrarTexto}>Publicar en Ig</button>
            {publisher && <div>{viewPublisher}</div>}
          </main>

          <main>
            <Link href={`/parking/${id}`} passHref>
              ver bichicleta UwU
            </Link>
          </main>
          
        </Card.Text>
      </Card.Body>
      {/* </Link> */}
    </Card>
  );
}
