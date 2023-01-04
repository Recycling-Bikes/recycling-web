import FormNovatos from "components/FormNovatos";
import React from "react";
import { Card, CardGroup, Form } from "react-bootstrap";
import InputFile from "./decs";

export default function Prueba() {
  return (
    <FormNovatos>
      <div className="mt-5 d-none d-xl-block" />
      <h1 className="py-5 mb-3" style={{ color: "#06433D" }}>
        ¿Buscas una bici? A veces, el proceso puede ser un poco intimidante.
        Estamos aquí para ayudar.
      </h1>
      <h4 className="mb-3">¿Qué tanto sabes de bicicletas?</h4>

      <Card className="me-xl-3 mb-3">
        <Card.Body className="">
        <Form.Check type={"radio"} id={`1`}>
            <Form.Check.Input type={"radio"}  />
            <Form.Check.Label style={{color: "black"}}>Soy un experto</Form.Check.Label>
            <Card.Text style={{color: "#6C757D"}}>Accederás al Marketplace directamente.</Card.Text>
          </Form.Check>
        </Card.Body>
      </Card>


      <Card className="me-xl-3 mb-3">
        <Card.Body className="">
        <Form.Check type={"radio"} id={`1`}>
            <Form.Check.Input type={"radio"}  />
            <Form.Check.Label style={{color: "black"}}>Soy un experto</Form.Check.Label>
            <Card.Text style={{color: "#6C757D"}}>Accederás al Marketplace directamente.</Card.Text>
          </Form.Check>
        </Card.Body>
      </Card>

        <InputFile/>
      <div className="d-xl-block mb-5"/>
      <div className="d-xl-block mb-5"/>
      <div className="d-xl-block mb-5"/>
    </FormNovatos>
  );
}
