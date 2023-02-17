import React, { useEffect } from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import Progres2 from "./progres2";


import * as yup from "yup";

import shallow from "zustand/shallow";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FPState } from "context/FormPublications/FPstate";
import { DevTool } from "@hookform/devtools";

const schema = yup.object().shape({
  material: yup.string().required("El año es requerido"),
  size: yup.string().required("El modelo es requerido"),
  transmission: yup.string().required("La marca es requerida"),
});

export default function Partdos() {
  const router = useRouter();

  const [publication, form] = FPState(
    (state) => [state.publication, state.form],
    shallow
  );

  const [setPublication, setForm] = FPState(
    (state) => [state.setPublication, state.setForm],
    shallow
  );

  const {
    handleSubmit,
    register,
    setError,
    control,

    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...publication },
  });

  useEffect(() => {
    if (!(form.brands || form.models)) {
      setForm();
    }

  });

  const onSubmit = (items) => {
    console.log()
    setPublication(items);
    router.push("./tres");
  };

  const selectList = (list) => {
    return list?.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <Contenedor>
      <DevTool control={control} />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8" xl="6">

                  <Form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
                    <Progres2 />
                    <div className="my-5">
                      <Form.Group className="mb-3" controlId="size">
                        <Form.Label>size</Form.Label>
                        <Form.Select
                          isInvalid={!!errors.size}
                          {...register("size")}
                        >
                          <option value="">Selecciona una talla</option>
                          {selectList(form.sizes)}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors?.size?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="materials">
                        <Form.Label>materials</Form.Label>
                        <Form.Select
                          isInvalid={!!errors.material}
                          {...register("material")}

                        >
                          <option value="">Selecciona un materials</option>

                          {selectList(form?.materials)}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors?.material?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="transmission">
                        <Form.Label>Transmisión</Form.Label>
                        <Form.Select

                          isInvalid={errors?.transmission}
                          {...register("transmission")}
                        >
                          <option value="">Selecciona una Transmisión</option>
                          {selectList(form?.transmissions)}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors?.transmission?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="d-flex justify-content-end pt-3 align-items-center">
                        <Link href="./uno" className="mx-3">
                          Atrás
                        </Link>

                        <Button variant="primary" type="submit">
                        Valor de tu bici
                        </Button>
                      </div>
                    </div>
                  </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block" style={{ height: "20rem" }}/>
    </Contenedor>
  );
}
