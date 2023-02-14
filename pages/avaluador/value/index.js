import React from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Mountain from "public/Mountain.png";
import Image from "next/image";
/* import { avaluadorState } from "context/Avaluador/avaluadorState"; */
import { BsHandbag, BsPencilSquare, BsTag } from "react-icons/bs";
import { HiArrowsRightLeft} from "react-icons/hi2"


export default function Value() {
  /* const cardSelected = avaluadorState((state) => state.cardSelected); */
  return (
    <Contenedor>
      <Container className="justify-content-center my-5">
        
        <Row className="justify-content-center">
          <Col sm={100} md={6} lg={5} className="justify-content-center">
            <Container>
              <Image src={Mountain} alt="" className="img-fluid" />
            </Container>
          </Col>
          <Col md="auto" className="d-flex d-md-block justify-content-center">
            <div>
            <Row sm="auto" className=" mb-2">
              <Col className="d-flex col-auto pe-0 align-items-center">
                <HiArrowsRightLeft color="#0FA899" size={32} />
              </Col>
              <Col className="d-flex flex-column">
                <p className="my-0">Te la compramos ya por</p>
                <h5>$1,467 - $1,512</h5>
              </Col>
            </Row>
            <Row sm="auto" className=" mb-2">
              <Col className="d-flex col-auto pe-0 align-items-center">
                <BsHandbag size={32} color="#6F42C1" />
              </Col>
              <Col className="d-flex flex-column">
                <p className="my-0">En nuestro Marketplace por</p>
                <h5>$2,258 - $2,327</h5>
              </Col>
            </Row>
            <Row sm="auto" className="mb-2 d-flex ">
              <Col className="d-flex  col-auto pe-0 align-items-center">
                <BsTag size={32} color="#0FA899" />
              </Col>
              <Col className="d-flex flex-column">
                <p className="my-0">Si estuviera nueva</p>
                <h5>$3,000</h5>
              </Col>
            </Row>
            <Row
              sm="auto"
              className=" mb-2 ps-2" 
              style={{ color: "rgba(15, 168, 153, 1)" }}
            >
              <Col className="d-flex col-auto pe-0 align-items-center">
                <BsPencilSquare size={14} />
              </Col>
              <Col className="d-flex ps-1 flex-column">Condición Aceptable</Col>
            </Row>
            </div>
          </Col>
        </Row>

        <div className="justify-content-around mt-2 py-3 align-items-center d-none d-md-flex">
          <Link href="./search" className="mx-3">
            Atrás
          </Link>
          <div>
            <Link href={"./enviar"}>
              <Button className="mx-2" variant="primary" type="submit">
              <HiArrowsRightLeft size={16}/> Véndela ya
              </Button>
            </Link>
            <Link href={"./send"}>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "rgba(111, 66, 193, 1)",
                  border: "rgba(111, 66, 193, 1)",
                }}
                type="submit"
              >
                <BsHandbag size={16} /> Publicarla en el Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      <div className="d-none d-lg-block" style={{ height: "10rem" }} />
    </Contenedor>
  );
}
