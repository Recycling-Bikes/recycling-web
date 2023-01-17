import FormNovatos, { Selects } from "components/FormNovatos/component";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { formNovatosState } from "context/FormNovatos/FormNovatosstate";
import { useRouter } from "next/router";
import { ProgressBar } from "react-bootstrap";

const schema = yup.object({
  hola: yup.string().required(),
});

export default function Prueba() {
  const router = useRouter();

  const quest = formNovatosState((state) => state.quest);
  const setQuest = formNovatosState((state) => state.setQuest);

  const { handleSubmit, register, control } = useForm({
    resolve: yupResolver(schema),
    defaultValues: quest,
  });

  const submit = useRef(null);

  const HandleClick = () => {
    submit.current.click();
  };

  const onSubmit = (event) => {
    setQuest(event);
    console.log(event);
  };

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
    },
  ];

  return (
    <FormNovatos>
      <DevTool control={control}></DevTool>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 d-none d-xl-block" />
        <ProgressBar className="mb-3" now={25} />

        <h4 className="mb-3 pt-3">
          ¿Para qué actividad vas a usarla principalmente?
        </h4>

        {questions.map((data, index) => (
          <Selects
            register={register}
            data={data}
            index={index}
            name="hola"
            key={index}
            HandleClick={HandleClick}
            className="mb-3"
          />
        ))}

        <div className="d-xl-none" style={{ height: "20vh" }} />
        <button ref={submit} type="submit" className="d-none" />
      </form>
    </FormNovatos>
  );
}
