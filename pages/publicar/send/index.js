import React, { useContext, useState } from "react";
import Contenedor from "components/home/Contenedor";
import {
  Row,
  Form,
  Col,
  Container,
  Button,
  InputGroup,
  FormGroup,
  FloatingLabel,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import BicisContext from "context/BicisNot/BicisContext";
import Progres2 from "./progres2";
import * as yup from "yup";
import { Formik } from "formik";
import { useQuery } from "@tanstack/react-query";

import InputFile from "components/Custom/InputFile";
import { userState } from "context/User/UserState";

const schema = yup.object().shape({
  description: yup.string().required("El año es requerido"),
  title: yup.string().required("El modelo es requerido"),
  price: yup.string().required("La marca es requerida"),
  files: yup.array().required(),
});

export default function Partdos() {
  const router = useRouter();
  const user = userState(state => (state.user))

  const { createBici, publicacion, localDataBici, saveBici, UploadImagesBici } =
    useContext(BicisContext);

  const datosda = useQuery({
    queryKey: ["localDataBici"],
    queryFn: localDataBici,
  });

  const SaveData = async (items) => {
    const uploadPromise = UploadImagesBici(items.files, user.id);

    const pathImages = await uploadPromise;

    items = {
      ...items,
      filesUrl: pathImages,
    };

    console.log(JSON.stringify(items));

    createBici(items);
    saveBici(publicacion);

    localStorage.removeItem("items");

    router.push("/parking");
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
                files: publicacion.files ? publicacion.files : {},
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
                        <Form.Label>Descripción</Form.Label>
                        <FloatingLabel controlId="description">
                          <Form.Control
                            className="p-2"
                            as="textarea"
                            name="description"
                            onChange={handleChange}
                            value={values.description}
                            required
                            style={{ height: "100px" }}
                          />
                        </FloatingLabel>
                      </Form.Group>

                      <FormGroup className="mb-3">
                        <Form.Label className="d-flex">
                          Fotos del producto{" "}
                          <div className="mx-1" style={{ color: "red" }}>
                            *
                          </div>
                        </Form.Label>

                        <InputFile
                          className=""
                          type="file"
                          multiple={true}
                          name="files"
                          id="files"
                          accept="image/*,video/*,"
                          onChange={(e) => {
                            const pawa = {
                              target: {
                                value: Object.values(e.target.files),
                                id: e.target.id,
                              },
                            };
                            handleChange(pawa);
                          }}
                          required
                        />
                      </FormGroup>

                      <div className="d-flex justify-content-end pt-3 align-items-center">
                        <Link href="./cuatro" className="mx-3">
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

            {/* {imageBicis 
            ? <Image alt="" width={500} height={32} src={ `  ./{imageBicis}`} />
            :null} */}
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block" style={{ height: "20rem" }}></div>
    </Contenedor>
  );
}
