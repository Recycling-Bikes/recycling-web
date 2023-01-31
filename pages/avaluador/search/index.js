import Contenedor from "components/home/Contenedor";
import { avaluadorState } from "context/Avaluador/avaluadorState";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Relleno from "utils/relleno";
import { shallow } from "zustand/shallow";
import ButtonsYears from "./ButtonsYears";

function MyVerticallyCenteredModal(props) {
  const conditions = avaluadorState((state) => state.conditions);

  const {
    handleSubmit,
    register,
    setError,
    control,

    formState: { isValid, errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
          {conditions?.map((datum) => {
            return (
              <Form.Group key={datum.id} required>
                <div className="d-flex justify-content-sm-between flex-column flex-sm-row my-4 ">
                  <Col className="mx=sm-4 my-2 my-sm-0">
                    <Form.Check type="radio" id={`radio-${datum.id}`}>
                      <Form.Check.Input
                        required
                        type="radio"
                        value={datum.id}
                        {...register("conditions")}
                      />

                      <Form.Check.Label>{datum.name}</Form.Check.Label>
                    </Form.Check>
                  </Col>

                  <Col sm="5" className="">
                    {datum.description}
                  </Col>
                </div>
              </Form.Group>
            );
          })}

          <div className="d-flex justify-content-end pt-3 align-items-center">
            <Link href="" className="mx-3" type="submit">
              Atras
            </Link>

            <Button variant="primary" type="submit">
              Valor de tu bici
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default function IndexAvaluador(props) {
  const quest = avaluadorState((state) => state.quest, shallow);

  const brand = avaluadorState((state) => state.brand);

  const setBrand = avaluadorState((state) => state.setBrand);

  const conditions = avaluadorState((state) => state.conditions);

  const setConditions = avaluadorState((state) => state.setConditions);


  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    setBrand(e.search);
  };

  const image = "/imagec.png";
  const title = "Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm";
  const price = 500;

  let data = [
    { image, title, price, year: "2020" },
    { image, title, price, year: "2021" },
    { image, title, price, year: "2019" },
    { image, title, price, year: "2020" },
    { image, title, price, year: "2020" },
    { image, title, price, year: "2022" },
  ];

  useEffect(() => {
    conditions.length === 0 ? setConditions() : null;

  }, []);

  const models = listBicis(data, quest, brand);

  return (
    <Contenedor>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <InputGroup className="mb-3 mt-5" style={{ maxWidth: "456px" }}>
              <Form.Control
                type="search"
                className="me-2"
                style={{ borderRadius: "0.375rem" }}
                {...register("search")}
              />
              <InputGroup.Text
                className="p-0 d-flex "
                style={{ border: "none", background: "none" }}
              >
                <Button variant="primary" className=" " type="submit">
                  Search
                </Button>
              </InputGroup.Text>
            </InputGroup>
          </Row>
        </form>

        <h1 style={{ color: "#06433D", fontStyle: "Bold" }}>{brand}</h1>
        <p>{models.length} Resultados</p>

        <ButtonsYears />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "16px",
          }}
          className="mt-3"
        >
          {models}

          <Relleno />
        </div>
      </Container>
      <div className="mb-5 " />
    </Contenedor>
  );
}

function listBicis(data, quest, brand) {
  return data.flatMap(({ image, title, price, year }, index) => {
    const [modalShow, setModalShow] = useState(false);

    if (
      (quest.years.length === 0 || quest.years?.includes(year)) &&
      title.includes(brand)
    ) {
      return (
        <div key={index}>
          <Card
            style={{ width: "auto", maxWidth: "514px" }}
            onClick={() => setModalShow(true)}
          >
            <div className="m-3">
              <Card.Img variant="top" src={image} />
            </div>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      );
    }
    return [];
  });
}
