import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Mountain() {
  const router = useRouter();

  const nameForm = "e-bike";

  const setQuest = formNovatosState((state) => state.setQuest);

  const onSubmit = (event) => {
    setQuest(event);

    const salida = questions.find((datum) => {
      return datum.value == event[nameForm];
    });

    router.push(router.pathname + salida.router);
  };

  const questions = [
    {
      value: "false",
      title: "No",
      router: "/no-e-bike",
    },
    {
      value: "true",
      title: "Si",
      router: "/complex",
    },
  ];

  return (
    <FormNovatos
      description={"¿Estás buscando una e-bike (bicicleta asistida)?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
      progress={30}
    />
  );
}
