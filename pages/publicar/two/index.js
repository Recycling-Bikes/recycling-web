import React, { useEffect, useState } from "react";
import Main from "components/main";
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
import { useHydrate } from "hooks/hydrate/hydrate";

const schema = yup.object().shape({
  material: yup.string().required("El año es requerido"),
  size: yup.string().required("El modelo es requerido"),
  transmission: yup.string().required("La marca es requerida"),
  other: yup.string().min(1, "Debe tener uno caracteres"),
});

export default function ParteDos() {
  const hydrate = useHydrate();

  const router = useRouter();

  const [publication, form] = FPState(
    (state) => [state.publication, state.form],
    shallow
  );

  const [setPublication, setForm, clearTransmision] = FPState(
    (state) => [state.setPublication, state.setForm, state.clearTransmision],
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

  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    let count = 0;
    let category = parseInt(publication?.category);
    if (category == 3 || category == 6 || category == 4) {
      category = 1;
    }

    if (category == 8) {
      category = 2;
    }

    const updateFormState = async (
      property,
      parameter,
      equal = null,
      column = null
    ) => {
      try {
        if (
          !form[property] ||
          (form[property]?.length < 1 && count < 12) ||
          form[property] === null ||
          !Array.isArray(form[property]) ||
          forceUpdate
        ) {
          console.log(`Updating form state for ${property}`);
          await setForm(property, parameter, equal, column);
          count++;
        } else {
          if (equal === null && column === null && count < 12) {
            await setForm(property, parameter, equal, column);
            count++;
          }
        }
      } catch (error) {}
    };

    const updateForm = async () => {
      await Promise.all([
        updateFormState("subcategory"),
        updateFormState("sizes"),
        updateFormState("materials"),
        updateFormState("transmissions", "*", category, "category"),
        updateFormState("rines", "*"),
        updateFormState("frenos"),
        updateFormState("suspension"),
      ]);
      setForceUpdate(false);
    };
    console.log("publication?.category", publication?.category);

    updateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceUpdate, publication]);

  const onSubmit = (items) => {
    items["subcategory"] = null;

    const subcategories = [];

    if (publication?.model !== "1") {
      let model = form?.models?.find((model) => {
        return model?.id == items?.model;
      });

      console.log(model);

      items["other"] = model?.name ? model?.name : "error model";

      if (!!model?.subcategory1) {
        subcategories.push(model?.subcategory1);
      }

      if (!!model?.subcategory2) {
        subcategories.push(model?.subcategory2);
      }

      if (!!model?.subcategory3) {
        subcategories.push(model?.subcategory3);
      }
    }

    if (publication?.ebike === true) {
      subcategories.push(10);
    }

    if (publication?.kids === true) {
      subcategories.push(15);
    }

    console.log(subcategories);

    items["subcategories"] = subcategories;

    console.log(items["subcategories"]);

    setPublication(items);
    router.push("./tres");
  };

  const selectList = (list) => {
    return (
      Array.isArray(list) &&
      list?.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })
    );
  };

  return (
    hydrate && (
      <Main>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="8" xl="6">
              <Form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
                <Progres2 />

                <div className="my-5">
                  {publication.model == "1" && (
                    <Form.Group className="mb-3" controlId="model">
                      <Form.Label>
                        Name Model <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        isInvalid={!!errors?.other}
                        /* value={values.model} */
                        {...(hydrate && register("other"))}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.other?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                  {/* Talla */}
                  <Form.Group className="mb-3" controlId="size">
                    <Form.Label>
                      Talla <span className="text-danger">*</span>
                    </Form.Label>

                    <Form.Select
                      isInvalid={!!errors.size}
                      {...(hydrate && register("size"))}
                    >
                      <option value="">Selecciona una talla</option>
                      {hydrate && selectList(form?.sizes)}
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
                      {...(hydrate && register("material"))}
                    >
                      <option value="">Selecciona un material</option>

                      {hydrate && selectList(form?.materials)}
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
                      {...(hydrate && register("transmission"))}
                    >
                      <option value="">Selecciona una transmisión</option>
                      {hydrate && selectList(form?.transmissions)}
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      {errors?.transmission?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Rin */}
                  {(publication?.category === "1" ||
                    publication?.category === "3" ||
                    publication?.category === "6") && (
                    <Form.Group className="mb-3" controlId="rin">
                      <Form.Label>Rin</Form.Label>

                      <Form.Select
                        isInvalid={errors?.transmission}
                        {...(hydrate && register("rin"))}
                      >
                        <option value="">Selecciona un rin</option>
                        {hydrate &&
                          selectList(
                            form?.rines?.filter((item) => {
                              if (publication?.category == "1") {
                                return 6 <= item.id && item.id <= 8;
                              }
                              if (publication?.category == "3") {
                                return 6 <= item.id;
                              }

                              if (publication?.category == "6") {
                                return item.id <= 6;
                              }
                              return false;
                            })
                          )}
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        {errors?.rin?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}

                  {/* freno */}
                  {(publication?.category == "2" ||
                    publication?.category == "8") && (
                    <Form.Group className="mb-3" controlId="freno">
                      <Form.Label>freno</Form.Label>

                      <Form.Select
                        isInvalid={errors?.freno}
                        {...(hydrate && register("freno"))}
                      >
                        <option value="">Selecciona un freno</option>
                        {hydrate && selectList(form?.frenos)}
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        {errors?.freno?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}

                  {/* suspension */}
                  {(publication?.category === "1" ||
                    publication?.category === "3" ||
                    publication?.category === "6") && (
                    <Form.Group className="mb-3" controlId="suspension">
                      <Form.Label>Suspension</Form.Label>

                      <Form.Select
                        isInvalid={errors?.suspension}
                        {...(hydrate && register("suspension"))}
                      >
                        <option value="">Selecciona una Suspension</option>
                        {hydrate && selectList(form?.suspension)}
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        {errors?.suspension?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}

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
      </Main>
    )
  );
}
