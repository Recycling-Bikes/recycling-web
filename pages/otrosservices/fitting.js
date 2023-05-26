import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import PopLogin from "./modal";
import { userState } from "context/User/UserState";
import { useState } from "react";

function Fitting() {
  const router = useRouter();

  return (
    <>
      <Container className="my-5">
        <Row className="">
          <Col className="mx-2 d-flex flex-column justify-content-center align-items-baseline">
            <h1 className="fs-2 tittle-custom mb-5">Bike Fitting</h1>
            <p className="pb-4 d-grid gap-3 " style={{}}>
              Las bicicletas tienen un tamaño (talla) adecuado para cada
              estatura. Es importante que la bicicleta que usamos este ajustada
              según nuestras medidas y flexibilidad. Un bike fitting va a
              ayudarnos a prevenir lesiones por mala postura y a aumentar el
              rendimiento sobre la bici.
            </p>
          </Col>

          <Col className=" d-none d-lg-block m-1"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Fitting;
