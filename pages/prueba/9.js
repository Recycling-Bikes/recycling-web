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
      title: "$500 - $1000",
      
    },
    {
      value: 4,
      title: "$1001 - $1500",
    },
    {
      value: 5,
      title: "$1501 - $2000",
    },
    {
      value: 6,
      title: "$2001 - $2500",
    },
    {
      value: 7,
      title: "$3000 o más",
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

        <h4 className="mb-3 pt-3">¿Cuál es tu presupuesto?</h4>

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
