/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Contenedor from "components/home/Contenedor";
import {
  Row,
  Form,
  Col,
  Container,
  Button,
  ProgressBar,
} from "react-bootstrap";
import Link from "next/link";
import { MdOutlinePedalBike } from "react-icons/md";
import { BsCardChecklist, BsThreeDots } from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";
import Mountain from "../../public/Mountain.png";
import Image from "next/image";

export default function uno() {
  return (
    <Contenedor>
      <div className="py-3 my-md-0">
        <Container className=" ">
          <Row className="justify-content-md-center ">
            <Col md="8" xl="6">
              <Form className=" py-5">
                <div className="py-2">
                  <Row className="my-1 d-flex ">
                    <div className="d-flex justify-content-between">
                      <>
                        <MdOutlinePedalBike
                          size="40"
                          className="p-2"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#CFEEEB",
                            color: "#0FA899",
                          }}
                        />
                      </>

                      <>
                        <BsCardChecklist
                          size="40"
                          className="p-2"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#CFEEEB",
                            color: "#0FA899",
                          }}
                        />
                      </>

                      <>
                        <BsThreeDots
                          size="40"
                          className="p-2"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#CFEEEB",
                            color: "#0FA899",
                          }}
                        />
                      </>
                    </div>
                  </Row>
                </div>
                <ProgressBar now={100} className="mb-4" />
              </Form>
            </Col>
          </Row>
        </Container>
        <Container className="justify-content-center">
          <Row className="justify-content-center">
            <Col sm={100} md={6} lg={5} className="justify-content-center">
              <Container>
                <Image src={Mountain} alt="" className="img-fluid" />
              </Container>
            </Col>
            <Col md="auto" className="justify-content-center">
              <Row sm="auto" className=" mb-2">
                <div className="d-flex flex-column">
                  <p className="my-0">Rango de Trade-in</p>
                  <h5>$1,467 - $1,512</h5>
                </div>
              </Row>
              <Row sm="auto" className=" mb-2">
                <Col className="d-flex flex-column">
                  <p className="my-0">Rango en Marketplace</p>
                  <h5>$2,258 - $2,327</h5>
                </Col>
              </Row>
              <Row sm="auto" className=" mb-2">
                <Col className="d-flex flex-column">
                  <p className="my-0">MSRP</p>
                  <h5>$3,000</h5>
                </Col>
              </Row>
              <Row
                sm="auto"
                className=" mb-2"
                style={{ color: "rgba(15, 168, 153, 1)" }}
              >
                <Col className="d-flex flex-column">Condición Aceptable</Col>
              </Row>
            </Col>
          </Row>

          <div className="justify-content-around mt-2 py-3 align-items-center d-none d-md-flex">
            <Link href="./tres" className="mx-3">
              Atrás
            </Link>
            <div>
              <Link href={"./enviar"}>
                <Button className="mx-2" variant="primary" type="submit">
                  Valor de tu bici
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
                  Publicar
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        <div className="d-none d-lg-block" style={{ height: "10rem" }}></div>
      </div>
    </Contenedor>
  );
}
