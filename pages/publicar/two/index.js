import React, { useContext } from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import BicisContext from "context/BicisNot/BicisContext";
import Progres2 from "./progres2";
import * as yup from "yup";
import { Formik } from "formik";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  materials: yup.string().required("El año es requerido"),
  size: yup.string().required("El modelo es requerido"),
  transmission: yup.string().required("La marca es requerida"),
});

export default function Partdos() {
  const router = useRouter();

  const {
    getMarcas,
    getModels,
    createBici,
    publicacion,
    localDataBici,
    getMaterials,
    getTallas,
    getTransmision,
  } = useContext(BicisContext);

  const listTallas = useQuery({
    queryKey: ["Tallas"],
    queryFn: getTallas,
  });

  const listMaterial = useQuery({
    queryKey: ["Materiales"],
    queryFn: getMaterials,
  });
  const listTransmision = useQuery({
    queryKey: ["transmission"],
    queryFn: getTransmision,
  });

  const datosda = useQuery({
    queryKey: ["localDataBici"],
    queryFn: localDataBici,
  });

  const SaveData = (items) => {
    createBici(items);
    router.push("./tres");
    return true;
  };

  const selectList = (list, value) => {
    return list.isLoading ? (
      <option value={value} />
    ) : (
      list.data.map((data) => (
        <option key={data.id} value={data.id}>
          {data.name}
        </option>
      ))
    );
  };

  return (
    <Contenedor>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8" xl="6">
            <Formik
              validationSchema={schema}
              onSubmit={(estado) => SaveData(estado)}
              initialValues={{
                size: publicacion.size ? publicacion.size : "",
                materials: publicacion.materials ? publicacion.materials : "",
                transmission: publicacion.transmission
                  ? publicacion.transmission
                  : "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => {
                return (
                  <Form className=" py-5" onSubmit={handleSubmit}>
                    <Progres2 />
                    <div className="my-5">
                      <Form.Group className="mb-3" controlId="size">
                        <Form.Label>size</Form.Label>
                        <Form.Select
                          name="size"
                          onChange={handleChange}
                          isInvalid={!!errors.size}
                          value={values.size}
                        >
                          <option value="">Selecciona una talla</option>
                          {selectList(listTallas, values.size)}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.size}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="materials">
                        <Form.Label>materials</Form.Label>
                        <Form.Select
                          onChange={handleChange}
                          name="materials"
                          isInvalid={!!errors.materials}
                          value={values.materials}
                        >
                          <option value="">Selecciona un materials</option>

                          {selectList(listMaterial, values.materials)}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.materials}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="transmission">
                        <Form.Label>Transmisión</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          onChange={handleChange}
                          name="transmission"
                          isInvalid={errors.transmission}
                          value={values.transmission}
                        >
                          <option value="">Selecciona una Transmision</option>

                          {selectList(listTransmision, values.transmission)}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.transmission}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="d-flex justify-content-end pt-3 align-items-center">
                        <Link href="./uno" className="mx-3">
                          Atrás
                        </Link>

                        <Button variant="primary" type="submit">
                          Guardar
                        </Button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block" style={{ height: "20rem" }}></div>
    </Contenedor>
  );
}
