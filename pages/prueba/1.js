import FormNovatos, { Selects } from "components/FormNovatos";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";

const schema = yup.object({
  option: yup.bool().required(),
});

export default function Prueba() {
  const def = {
  };

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
      title: "No sé mucho",
      description: "Te ayudaremos con el proceso.",
    },
    {
      value: 4,
      title: "Soy un experto",
      description: "Accederás al Marketplace directamente.",
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
        <h1 className="py-5 mb-3" style={{ color: "#06433D" }}>
          ¿Buscas una bici? A veces, el proceso puede ser un poco intimidante.
          Estamos aquí para ayudar.
        </h1>
        <h4 className="mb-3">¿Qué tanto sabes de bicicletas?</h4>

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
        <Button type="submit">Siguiente</Button>
      </form>
    </FormNovatos>
  );
}
