import { supabase } from "supabase/client";
import React, { useContext, useEffect, useState } from "react";
import Contenedor from "components/home/Contenedor";
import { Row, Form, Col, Container, Button } from "react-bootstrap";

import Link from "next/link";
import BicisContext from "context/Bicis/BicisContext";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Progres from "./progres";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  year: yup.string().required("El año es requerido"),
  model: yup.string().required("El modelo es requerido"),
  brands: yup.string().required("La marca es requerida"),
});

export default function PartUno() {
  const router = useRouter();

  const { getMarcas, getModels,createBici, publicacion, localDataBici } = useContext(BicisContext);



  const marcas = useQuery({
    queryKey: ["marcas"],
    queryFn: getMarcas,
  });

  const modelos = useQuery({
    queryKey: ["modelos"],
    queryFn: getModels,
  });

  const datosda = useQuery({
    queryKey: ["localDataBici"],
    queryFn: localDataBici,
  });

  const SaveData = (items) => {

    createBici(items)
    
    router.push("./two") 
    return null
  }


  /* 

    // Test with hard coded data
      const { data, error } = await supabase
      .from('bicis')
      .insert([publict,]);
    console.log(error);
    console.log(data);
  ; } */

  return (
    <Contenedor>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8" xl="6">
            
            <Formik
              validationSchema={schema}
              onSubmit={(estado) => SaveData(estado)}
              initialValues={{
                year: publicacion.year ? publicacion.year : "",
                model: publicacion.model ? publicacion.model : "",
                brands: publicacion.brands ? publicacion.brands : "",
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
                  <Form className="py-5" noValidate onSubmit={handleSubmit}>
                    <Progres />

                    <div className="my-5">
                      <Form.Group className="mb-3" controlId="brands">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select
                          
                          aria-label="Default select example"
                          name="brands"
                          onChange={handleChange}
                          isInvalid={!!errors.brands}
                          value={values.brands}
                        >
                          <option value="">Seleciona una Marca</option>
                          {marcas.isLoading
                            ? <option value={values.Marca}/>
                            : marcas.data.map((marca) => (
                                <option key={marca.id} value={marca.id}>
                                  {marca.name}
                                </option>
                              ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.brands}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="model">
                        <Form.Label>modelo</Form.Label>
                        <Form.Select
                          
                          aria-label="Default select example"
                          onChange={handleChange}
                          name="model"
                          isInvalid={!!errors.model}
                          value={values.model}
                        >
                          <option value="">Selecciona un modelo</option>

                          {modelos.isLoading
                            ? <option value={values.model}/>

                            : modelos.data.map((data) => (
                                <option key={data.id} value={data.id}>
                                  {data.name}
                                </option>
                              ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.model}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="year">
                        <Form.Label>Año</Form.Label>
                        <Form.Select
                          
                          aria-label="Default select example"
                          onChange={handleChange}
                          name="year"
                          isInvalid={errors.year}
                          value={values.year}
                        >
                          <option value="">Selecciona un año</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.year}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      {" "}
                      <Button variant="primary" type="submit">
                        Guardar cambios
                      </Button>
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
