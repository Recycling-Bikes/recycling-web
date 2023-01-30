import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Position() {
  const router = useRouter();

  const nameForm = "position";

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
      value: "aggressive",
      title: "Agresiva",
      description: "Prefieres la velocidad a la comodidad",
      router: "/size",
    },
    {
      value: "relaxed",
      title: "Menos agresiva",
      description:
        "Una posición cómoda para largas distancias",
      router: "/size",
    },
  ];

  return (
    <FormNovatos
      description={"¿Qué posición del cuerpo prefieres?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
      progress={30}
    />
  );
}
