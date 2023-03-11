import React, { useEffect, useState } from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Progres2 from "./progres2";

import * as yup from "yup";

import { shallow } from "zustand/shallow";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FPState } from "context/FormPublications/FPstate";

const schema = yup.object().shape({
  material: yup.string().required("El año es requerido"),
  size: yup.string().required("El modelo es requerido"),
  transmission: yup.string().required("La marca es requerida"),
});

export default function Partdos() {
  const [hydrated, setHydrated] = useState(true);

  useEffect(() => {
    setHydrated(false);
  }, []);

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
    console.log();
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

  return hydrated ? (
    ""
  ) : (
    <Contenedor>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8" xl="6">
            <Form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
              <Progres2 />
              <div className="my-5">
                {/* Talla */}
                <Form.Group className="mb-3" controlId="size">
                  <Form.Label>
                    Talla <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select isInvalid={!!errors.size} {...register("size")}>
                    <option value="">Selecciona una talla</option>
                    {selectList(form.sizes)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors?.size?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Material */}
                <Form.Group className="mb-3" controlId="materials">
                  <Form.Label>
                    Material <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={!!errors.material}
                    {...register("material")}
                  >
                    <option value="">Selecciona un material</option>

                    {selectList(form?.materials)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors?.material?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Transmisión */}
                <Form.Group className="mb-3" controlId="transmission">
                  <Form.Label>
                    Transmisión <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors?.transmission}
                    {...register("transmission")}
                  >
                    <option value="">Selecciona una transmisión</option>
                    {selectList(form?.transmissions)}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors?.transmission?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Botones */}
                <div className="d-flex justify-content-end pt-3 align-items-center">
                  <Link href="./uno" className="mx-3">
                    <BsChevronLeft
                      size={18}
                      className="me-2 align-items-center"
                    />
                    Atrás
                  </Link>

                  <Button variant="primary" type="submit">
                    Valor de tu bici
                    <BsChevronRight
                      size={18}
                      className="ms-2 align-items-center"
                    />
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block" style={{ height: "20rem" }} />
    </Contenedor>
  );
}
