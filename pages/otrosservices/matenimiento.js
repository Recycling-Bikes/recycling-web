import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import PopLogin from "./modal";
import { userState } from "context/User/UserState";
import { useState } from "react";

function Mantenimiento() {
  const router = useRouter();

  return (
    <>
      <Container className="mt-3 mb-5">
        <Row className="">
          <Col className="mx-2 d-flex flex-column justify-content-center align-items-baseline">
            <h1 className="fs-2 tittle-custom mb-5">Mantenimiento</h1>
            <p className="pb-4 d-grid gap-3 " style={{}}>
              <span>
                La mayoría de los componentes de las bicicletas tienen un
                desgaste asociado al uso y tiempo de fabricación. Es clave para
                alargar la vida útil de nuestra bicicleta que le demos el
                cuidado requerido.
              </span>
              <span>
                El mantenimiento consiste en la limpieza y engrase de las
                diferentes piezas de la bicicleta. Headset, bottombracket,
                ruedas y transmisión.
              </span>
              <span>
                Lavado de la bicicleta y ajuste de la transmisión y frenos.
              </span>
            </p>
            <div className="d-flex gap-2 ">
              <Button className="" variant="outline-primary" onClick={() => {}}>
                Agenda tu cita
              </Button>

            </div>
          </Col>

          <Col className=" d-none d-lg-block m-1">
            <div className=" text-center bg-image">
              <Card.Img
                variant="top"
                src="/assest/otrosservices/ima3.png"
                className="rounded-5"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Mantenimiento;
