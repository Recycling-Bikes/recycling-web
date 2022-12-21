import React, { useContext } from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Form, Col, Container, Button, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import BicisContext from "context/Bicis/BicisContext";
import Progres2 from "./progres2";
import * as yup from "yup";
import { Formik } from "formik";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  description: yup.string().required("El año es requerido"),
  title: yup.string().required("El modelo es requerido"),
  price: yup.string().required("La marca es requerida"),
});

export default function Partdos() {
  const router = useRouter();

  const { createBici, publicacion, localDataBici, saveBici } =
    useContext(BicisContext);

  const datosda = useQuery({
    queryKey: ["localDataBici"],
    queryFn: localDataBici,
  });

  const SaveData = (items) => {
    createBici(items);
    saveBici(publicacion);

    localStorage.removeItem('items');
    router.push("/parking");
    
    return null;
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
                title: publicacion.title ? publicacion.title : "",
                description: publicacion.description
                  ? publicacion.description
                  : "",
                price: publicacion.price ? publicacion.price : "",
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
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="title">
                          <Form.Label>Titulo</Form.Label>
                          <Form.Control
                            type="text"
                            name="title"
                            required
                            onChange={handleChange}
                            value={values.title}
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="validationCustomUsername"
                        >
                          <Form.Label>Precio</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                              type="number"
                              placeholder="500"
                              aria-describedby="inputGroupPrepend"
                              required
                              min="1"
                              pattern="^[0-9]+"
                              name="price"
                              value={values.price}
                              onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose a username.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                          type="text"
                          name="description"
                          onChange={handleChange}
                          value={values.description}
                          required
                        />
                      </Form.Group>

                      <div className="d-flex justify-content-end pt-3 align-items-center">
                        <Link href="./cuatro" className="mx-3">
                          Atras
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
