import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Suspension() {
  const router = useRouter();

  const nameForm = "suspension";

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
      value: 3,
      title: "Trasera y delantera",
      description: "Full Suspension",
      router: "/complex",
    },
    {
      value: 4,
      title: "Solo delantera",
      description: "Hardtail",
      router: "/size",
    },
    {
      value: 5,
      title: "Sin suspension",
      description: "Horquilla rígida",
      router: "/size",
    },
    {
      value: 6,
      title: "No sé",
      description: "Te ayudaremos a decidir",
      router: "/size",
    },
  ];

  return (
    <FormNovatos
      progress={60}
      description={"¿Qué tan complejos son los senderos que planeas recorrer?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
    />
  );
}
