import Contenedor from "components/home/Contenedor";
import React, { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  ButtonToolbar,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useForm } from "react-hook-form";


export default function IndexAvaluador(props) {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const image = "/imagec.png"
  const title = "Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm"

  const data = [{image, title},{image, title},{image, title},{image, title},{image, title},{image, title},{image, title}
  
  ]

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
                style={{ borderRadius: "0.375rem" }}
              >
                <Button variant="primary" className=" " type="submit">
                  Search
                </Button>
              </InputGroup.Text>
            </InputGroup>
          </Row>
        </form>

        <h1 style={{ color: "#06433D", fontStyle: "Bold" }}>
          {watch("search")}
        </h1>
        <p>2,312 Resultados</p>

        {/* Este toolbar cumple la función de crear los botones de los años en el Avaluador */}

        <ButtonToolbar
          className="mb-3"
          style={{
            overflowX: "auto",
            display: "flex",
            gap: "8px",
            flexFlow: "row",
          }}
        >
          
          {["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"].map(
            (year) => (
              <ToggleButtonGroup
                className="mb-2"
                type="checkbox"
                style={{height: "36px" }}
                key={year}
                {...register("years")}
                // Este onChange lo dejo porque si lo quita el programa da error
                onChange={(e)=>null}

                
              >
                
                <ToggleButton
                  style={{
                    width: "60px",
                  }}
                  type="submit"
                  id={year}
                  variant="outline-primary"
                  value={year}
                >
                  {year}
                </ToggleButton>
              </ToggleButtonGroup>
            )
          )}
        </ButtonToolbar>
                
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "16px",
          }}
        >{data .map(({image, title})=>(
          <Card style={{ width: "auto", maxWidth: "514px" }}>
            <div className="m-3">
              <Card.Img variant="top" src={image} />
            </div>
            <Card.Body>
              <Card.Title>
                {title}
              </Card.Title>
            </Card.Body>
          </Card>))}
        </div>
      </Container>
      <div className="mb-5 " />
    </Contenedor>
  );
}
