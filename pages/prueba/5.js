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
      title: "Subiendo y bajando colinas",
      
    },
    {
      value: 4,
      title: "Estrictamente cuesta abajo",
    },
    {
      value: 5,
      title: "Recoger un paquete de 6 en la tienda",
    },
    {
      value: 6,
      title: "Recoger varias bolsas de comestibles",
    },
    {
      value: 7,
      title: "Transporta a los niños por la ciudad",
    },
    {
      value: 8,
      title: "Polo de bicicleta",
    }

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

        <h4 className="mb-3 pt-3">¿Para qué actividad vas a usarla principalmente?</h4>

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
