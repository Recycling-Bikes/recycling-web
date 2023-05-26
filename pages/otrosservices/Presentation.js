import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import PopLogin from "./modal";
import { userState } from "context/User/UserState";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

function Presentation() {
  const router = useRouter();

  return (
    <>
      <Container className="mt-3">
        <Col className=" m-2 pb-4  d-block d-lg-none m-1">
          <div md={100} className=" text-center bg-image">
            <Card.Img
              variant="top"
              src="/assest/otrosservices/unsplash1.png"
              className="rounded-5"
              // style={{ borderRadius: "30px" }}
            />
          </div>
        </Col>
        <Row className="">
          <Col className="mx-2 d-flex flex-column justify-content-center align-items-baseline">
            <h1 className="fs-2 tittle-custom">
              Ajusta tu bici a la medida y recibe mantenimiento de calidad
            </h1>
            <p className="pb-4 " style={{}}>
              Todo lo que necesitas para practicar el ciclismo de la mejor
              manera. Ajusta tu bici a tus medidas con nuestro servicio de Bike
              Fitting y dale cariño para que tu bici te acompañe por más tiempo
              con nuestro servicio de mantenimiento.
            </p>
            <div className="d-flex gap-2 ">
              <Button
                className=" d-flex justify-content-center align-items-center"
                variant="primary"
                onClick={() => {}}
              >
                <BsWhatsapp className="me-2" />
                Agenda tu cita
              </Button>
              {/*              <Button
                className="text-primary"
                variant="light"
                onClick={() => {}}
              >
                
                Conoce más
              </Button> */}
            </div>
          </Col>

          <Col className=" d-none d-lg-block m-1">
            <div className=" text-center bg-image">
              <Card.Img
                variant="top"
                src="/assest/otrosservices/unsplash1.png"
                className="rounded-5"
                // style={{ borderRadius: "30px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Presentation;
