import FormNovatos, { Selects } from "components/FormNovatos/component";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
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
