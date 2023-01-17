import React from "react";
import { Row, Container, Card, Button } from "react-bootstrap";
import { SlDiamond } from "react-icons/sl";
import {
  BsShieldCheck,
  BsCreditCard,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Promesas() {
  const cartas = [
    {
      message: "Tienes múltiples opciones a la hora de elegir",
      Icon: SlDiamond,
    },
    { message: "Tu dinero está siempre seguro", Icon: BsShieldCheck },
    { message: "Cuentas con facilidades de pago", Icon: BsCreditCard },
    {
      message: "Puedes recibir atención personalizada",
      Icon: BsFillPersonCheckFill,
    },
  ];
  return (
    <Container
      style={{ backgroundColor: "rgba(207, 238, 235, 0.4)" }}
      fluid
      className="mt-5 pb-5 px-auto d-flex flex-column 
      justify-content-center "
    >
      <Row className="pt-5 mx-sm-5 d-flex justify-content-center" fluid="true">
        <h1 className="d-flex justify-content-center tittle-custom">
          ¿Por qué comprar con nosotros?
        </h1>

        <Row className="d-flex justify-content-center py-3 w-100">
          {cartas.map((Carta, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: "17rem",
                  height: "10rem",
                  color: "primary",
                  backgroundColor: "none",
                }}
                className="m-3 py-2 px-3"
              >
                <Card.Body>
                  <Carta.Icon
                    size={29}
                    className="mb-3"
                    style={{ color: "#0FA899" }}
                  />

                  <Card.Text>{Carta.message}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Row>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", flexDirection: "column" }}
      >
        <Link href="/parking" className="d-none d-lg-block">
          <Button
            variant="primary"
            className="d-inline"
            style={{ width: "auto" }}

          >
            Comprar bicis
          </Button>
        </Link>

        <Link href="/parking" className="d-lg-none">
          <Button
            variant="primary"
            className="d-inline "
            style={{ width: "17rem" }}

          >
            Comprar bicis
          </Button>
        </Link>

        <br />  
        <div>
          <Link href="/intermedio" className="link-custom-text">
            vender mi bici <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
    </Container>
  );
}
