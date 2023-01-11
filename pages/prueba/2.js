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
      title: "Ciclismo de Montaña",
      description: "Singletrack, senderos de montaña, parques de ciclismo.",
    },
    {
      value: 4,
      title: "Paseos por carretera",
      description:
        "Paseos de mayor distancia en caminos pavimentados o de grava",
    },
    {
      value: 5,
      title: "Ciclismo en la Ciudad",
      description:
        "Montar distancias cortas en un entorno urbano",
    },
    {
      value: 6,
      title: "Para Niños",
      description:
        "Las bicicletas que deseabas tener cuando eras niño",
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
        <ProgressBar className="mb-3" now={15} />
        <h2 className=" mb-5" style={{ color: "#06433D" }}>
          ¡Encontremos tu bici ideal!
        </h2>
        <h4 className="mb-3">¿Para qué usarás la bici?</h4>

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
