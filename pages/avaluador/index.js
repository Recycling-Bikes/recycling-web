import React, { useState } from "react";
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import IndexAvaluador from "./AvalatorComponet";

export default function Index() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {

  
  };

  return (
    <IndexAvaluador>

      <h1 style={{color: "#06433D",
    fontStyle: "medium"}} >Conoce cuánto vale tu bici</h1>
      <p className="mb-5">Explora más de 29,380 modelos </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="d-flex flex-row">
        <InputGroup className="mb-3">
        <Form.Control
          type="search"
          className="me-2"
          style={{borderRadius: "0.375rem"}}
          {...register("search")}
        />
          <InputGroup.Text className="p-0 d-flex " style={{borderRadius: "0.375rem"}}>
            <Button variant="primary" className=" " type="submit">
              Search
            </Button>
          </InputGroup.Text>
          </InputGroup>
        </Row>
      </form>

    </IndexAvaluador>
  );
}
