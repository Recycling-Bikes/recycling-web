import React, { useContext } from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import Link from "next/link";

import { useRouter } from "next/router";
import BicisContext from "context/BicisNot/BicisContext";
import Progres3 from "./progres3";
import { Formik } from "formik";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  bici_condition: yup.string().required(),
});

export default function Parttres() {
  const router = useRouter();

  const { createBici, publicacion, getCondicion } = useContext(BicisContext);

  const listCondiciones = useQuery({
    queryKey: ["bici_condition"],
    queryFn: getCondicion,
  });

  const SaveData = (items) => {
    createBici(items);
    router.push("./cuatro");
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
                bici_condition: publicacion.bici_condition
                  ? publicacion.bici_condition
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
                    <Progres3 />

                    <div className="mt-5">
                      <Container>
                        {listCondiciones.isLoading
                          ? ""
                          : listCondiciones.data.map((datum) => {
                              return (
                                <Form.Group key={datum.id} required>
                                  <div className="d-flex justify-content-sm-between flex-column flex-sm-row my-4 ">
                                    <Col className="mx=sm-4 my-2 my-sm-0">
                                      <Form.Check
                                        type="radio"
                                        id={`radio-${datum.id}`}
                                      >
                                        <Form.Check.Input
                                          required
                                          type="radio"
                                          name="bici_condition"
                                          value={datum.id}
                                          onChange={handleChange}
                                        />

                                        <Form.Check.Label>
                                          {datum.name}
                                          {}
                                        </Form.Check.Label>
                                      </Form.Check>
                                    </Col>

                                    <Col sm="5" className="">
                                      {datum.description}
                                    </Col>
                                  </div>
                                </Form.Group>
                              );
                            })}
                      </Container>
                    </div>

                    <div className="d-flex justify-content-end pt-3 align-items-center">
                      <Link href="./two" className="mx-3" type="submit">
                        Atras
                      </Link>

                      <Button variant="primary" type="submit">
                        Valor de tu bici
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block" style={{ height: "10rem" }}></div>
    </Contenedor>
  );
}
