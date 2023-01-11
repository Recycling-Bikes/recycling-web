import FormNovatos, { Selects } from "components/FormNovatos";
import React from "react";
import { Button, Card, Form, ProgressBar } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";

const schema = yup.object({
  option: yup.bool().required(),
});

export default function Prueba() {
  const def = {};

  const {
    handleSubmit,
    register,
    control,

    formState: { isValid, errors },
  } = useForm({
    resolve: yupResolver(schema),
    defaultValues: def,
  });

  const questions = [
    {
      value: 3,
      title: "Caminos pavimentados",
      description:
        "Carreteras con superficies lisas (carreteras y carreteras de ciudades o condados mantenidas).",
    },
    {
      value: 4,
      title: "Caminos de grava o tierra",
      description:
        "Caminos con superficies rugosas (caminos de incendios, caminos de servicio forestal, caminos urbanos de tierra o grava).",
    },
    {
      value: 5,
      title: "Mezclado",
      description:
        "Principalmente pavimento con un sendero conector ocasional de grava o tierra.",
    },
  ];

  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <FormNovatos>
      <DevTool control={control}></DevTool>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 d-none d-xl-block" />
        <ProgressBar className="mb-3" now={25} />

        <h4 className="mb-3 pt-3">
          ¿En qué tipo de carreteras circularás principalmente?
        </h4>

        {questions.map((data, index) => (
          <Selects
            {...register("hola")}
            {...data}
            key={index}
            def={def.hola}
            className="mb-3"
          />
        ))}

        {/* <InputFile {...register("files")} /> */}
        <div className="d-xl-block " style={{ height: "20vh" }} />
      </form>
    </FormNovatos>
  );
}
