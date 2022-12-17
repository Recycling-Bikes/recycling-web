import { supabase } from 'supabase/client';
import React, { useContext, useEffect, useState } from "react";
import Contenedor from "components/home/Contenedor";
import {
  Row,
  Form,
  Col,
  Container,
  Button,
  ProgressBar,
} from "react-bootstrap";

import Link from "next/link";
import { MdOutlinePedalBike } from "react-icons/md";
import { BsCardChecklist, BsThreeDots } from "react-icons/bs";
import BicisContext from "context/Bicis/BicisContext";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

export default function PartUno() {

  

  const router = useRouter();

  const { createBici, publicacion, getMarcas, marcas } = useContext(BicisContext);

  const [validated, setValidated] = useState(false);



  const {isLoading, isErrorn, error, data} =useQuery({
    queryKey: ["productos"],
    queryFn: getMarcas
})

useEffect(()=>{
  console.log(marcas);
},[marcas])

  const HandleSubmit = async (event) => {

    const form = event.currentTarget;

    event.preventDefault();

    /*     router.push("./two") */

    setValidated(true);

    const publict = {
      year: 2022, //Agno.value,
      model: 1, //Modelo.value,
      bici_condition: 1,
      size: 1,
    };

    console.log(publict);

    // Test with hard coded data
    const { data, error } = await supabase
      .from('bicis')
      .insert([publict,]);
    console.log(error);
    console.log(data);
  };

  return (
    <Contenedor>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8" xl="6">
            <Form
              className=" py-5"
              noValidate
              validated={validated}
              onSubmit={HandleSubmit}
            >
              <div className="py-2">
                <Row className="my-1 d-flex ">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div sm="auto">
                        <MdOutlinePedalBike
                          size="40"
                          className="p-2"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "#CFEEEB",
                            color: "#0FA899",
                          }}
                        />
                      </div>
                      <div className="px-1">
                        <p className="m-0 p-0" style={{ color: "#0FA899" }}>
                          Paso 1/3
                        </p>
                        <p className="m-0 p-0">
                          <strong>Datos de tu bici</strong>
                        </p>
                      </div>
                    </div>

                    <>
                      <BsCardChecklist
                        size="40"
                        className="p-2"
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "#CFEEEB",
                          color: "#0FA899",
                        }}
                      />
                    </>

                    <>
                      <BsThreeDots
                        size="40"
                        className="p-2"
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "#CFEEEB",
                          color: "#0FA899",
                        }}
                      />
                    </>
                  </div>
                </Row>
              </div>
              <ProgressBar now={30} className="mb-4" />

              <div className="my-5">
                <Form.Group controlId="Marca">
                  <Form.Label>Marca</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                    required
                  >
                    <option>Seleciona una Marca</option>
                    <option value="1">MTM</option>
                    <option value="2">CTD</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="Modelo">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                    required
                  >
                    <option>Selecciona un modelo</option>
                    <option value="1">OneMotor</option>
                    <option value="2">TwoDora</option>
                    <option value="3">ThreeMotor</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="Agno">
                  <Form.Label>Año</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                    required
                  >
                    <option>Selecciona un año</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="d-flex justify-content-end pt-3">
                {" "}
                <Button variant="primary" type="submit">
                  Guardar cambios
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block" style={{ height: "20rem" }}></div>
    </Contenedor>
  );
}
