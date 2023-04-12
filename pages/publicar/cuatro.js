/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
import Mountain from "../../public/Mountain.png";
import Image from "next/image";
import { BsHandbag, BsPencilSquare, BsTag } from "react-icons/bs";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { useRouter } from "next/router";
import PopLogin from "./modal";
import { userState } from "context/User/UserState";
import { FPState } from "context/FormPublications/FPstate";
import { shallow } from "zustand/shallow";
import { valorarBicicleta } from "components/Avaluador/avaluador";

export default function Avaluador() {
  const [ModalShow, setModalShow] = useState(false);
  const router = useRouter();

  const [publication, form] = FPState(
    (state) => [state.publication, state.form],
    shallow
  );
  const [condition, setCondition] = useState("");

  const [setPublication, setForm] = FPState(
    (state) => [state.setPublication, state.setForm],
    shallow
  );
  useEffect(() => {
    //Contidion name
    form.conditions?.find((condition) => {
      if (condition.id === parseInt(publication.conditions)) {
        setCondition(condition.name);
        return true;
      }
    });
  }, [form.conditions, publication.conditions]);

  const confirmUser = userState((state) => state.confirmUser);

  const userStatus = async () => {
    const { user } = await confirmUser();

    user ? router.push("./send") : setModalShow(true);
  };

  useEffect(() => {
    const updateFormState = (property) => {
      if (
        !form[property] ||
        form[property]?.length === 0 ||
        form[property] === null
      ) {
        setForm(property);
      }
      console.log(form[property]);
    };
    updateFormState("conditions");
  }, []);

  const [values, setValues] = useState({
    min: "",
    max: "",
    directa: {
      min: "",
      max: "",
    },
  });

  useEffect(() => {
    const condition = form.conditions?.find((condition) => {
      
      return condition.id === parseInt(publication.conditions);
    });
    console.log("🚀 ~ file: cuatro.js:84 ~ condition ~ condition:", condition)
    const material = form.materials?.find((material) => {
      return material.id == parseInt(publication.material);
    });

    const transmission = form.transmissions?.find((transmission) => {
      return transmission.id === parseInt(publication.transmission);
    });

    const marca = form.brands?.find((brand) => {
      return brand.id === parseInt(publication.brand);
    });
    const year = form.years?.find((year) => {
      return year.id === parseInt(publication.year);
    });

    const typePrice = publication?.freno ?? publication.suspension ?? 1;

    const values = valorarBicicleta(
      transmission,
      year.name,
      material.id ?? "1",
      marca?.status ?? "c",
      condition?.status ?? "c",
      typePrice
    );
    setValues(values);
  }, [
    form.brands,
    form.conditions,
    form.material,
    form.transmission,
    form.years,
    publication.brand,
    publication.conditions,
    publication.material,
    publication.transmission,
    publication.year,
  ]);

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
            <Col md="auto" className="d-flex d-md-block justify-content-center">
              <div>
                <Row sm="auto" className=" mb-2">
                  <Col className="d-flex col-auto pe-0 align-items-center">
                    <HiArrowsRightLeft color="#0FA899" size={32} />
                  </Col>
                  <Col className="d-flex flex-column">
                    <p className="my-0">Te la compramos ya por</p>
                    <h5>
                      ${values?.min} - ${values.max}
                    </h5>
                  </Col>
                </Row>
                <Row sm="auto" className=" mb-2">
                  <Col className="d-flex col-auto pe-0 align-items-center">
                    <BsHandbag size={32} color="#6F42C1" />
                  </Col>
                  <Col className="d-flex flex-column">
                    <p className="my-0">En nuestro Marketplace por</p>
                    <h5>
                      ${values.directa.min} - ${values?.directa?.max}
                    </h5>
                  </Col>
                </Row>
                <Row sm="auto" className="mb-2 d-flex ">
                  <Col className="d-flex  col-auto pe-0 align-items-center">
                    <BsTag size={32} color="#0FA899" />
                  </Col>
                  <Col className="d-flex flex-column">
                    <p className="my-0">Si estuviera nueva</p>
                    <h5>${values?.original}</h5>
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
                  <Col className="d-flex ps-1 flex-column">
                    Condición {condition}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <div className="justify-content-around mt-2 py-3 align-items-center d-none d-md-flex">
            <Link href="./tres" className="mx-3">
              Atrás
            </Link>

            <div>
              <Link href={"./enviar"}>
                <Button className="mx-2" variant="primary" type="submit">
                  <HiArrowsRightLeft size={16} /> Véndela ya
                </Button>
              </Link>

              <Button
                onClick={userStatus}
                variant="primary"
                style={{
                  backgroundColor: "rgba(111, 66, 193, 1)",
                  border: "rgba(111, 66, 193, 1)",
                }}
                type="submit"
              >
                <BsHandbag size={16} /> Publícala en Marketplace
              </Button>
            </div>
          </div>

          <div className="mt-2 py-3 d-grid gap-2 d-md-none ">
            <Button
              onClick={() => router.push("./enviar")}
              className=""
              variant="primary"
              type="submit"
            >
              <HiArrowsRightLeft size={16} /> Véndela ya
            </Button>

            <Button
              onClick={userStatus}
              variant="primary"
              style={{
                backgroundColor: "rgba(111, 66, 193, 1)",
                border: "rgba(111, 66, 193, 1)",
              }}
              type="submit"
            >
              <BsHandbag size={16} /> Publícala en Marketplace
            </Button>

            <Button
              variant="ligth"
              style={{ color: "#0fa899" }}
              onClick={() => router.push("./tres")}
              className=""
            >
              {"<"} Atrás
            </Button>
          </div>
        </Container>

        <div className="d-none d-lg-block" style={{ height: "10rem" }} />
        <PopLogin
          ModalShow={ModalShow}
          setModalShow={setModalShow}
          router={"./send"}
        />
      </div>
    </Contenedor>
  );
}
