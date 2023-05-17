import Link from "next/link";
import { Badge, Card } from "react-bootstrap";
import { CDN } from "utils/constantes";
import propTypes from "prop-types";

ComponenteBike.propTypes = {
  id: propTypes.any.isRequired,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  off: propTypes.number,
  image: propTypes.string.isRequired,
  etiqueta: propTypes.string,
};

export function ComponenteBike({
  id,
  name,
  title,
  price,
  off,
  image,
  etiqueta = null,
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

  return (
    <Card className="p-0" {...props}>
      <Link href={`/parking/${id}`} passHref>
        <div className="m-3">
          <Badge className="mb-1" bg={etiqueta ? "primary" : ""}>
            {etiqueta}{" "}
          </Badge>
          <Card.Img
            variant="top"
            src={CDN + image + "?width=${500}&height={180}&quality=${60}&webp=true&format=webp&fit=cover&optimize=medium&"}
            style={{
              maxHeight: "180px",
              borderRadius: "5px",
            }}
          />
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
