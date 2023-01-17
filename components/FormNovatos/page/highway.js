import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Highway() {
  const router = useRouter();

  const nameForm = "type";

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
      value: "pavement",
      title: "Caminos pavimentados",
      description: "Calles y carreteras bien asfaltadas.",
      router: "/position",
    },
    {
      value: "mix",
      title: "Mezclado",
      description: "Principalmente pavimento con un sendero conector ocasional de gravilla o tierra.",
      router: "/timon",
    },
  ];

  return (
    <FormNovatos
      description={"¿En qué tipo de carreteras circularás principalmente?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
      progress={30}
    />
  );
}