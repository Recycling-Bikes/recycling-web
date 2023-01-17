import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Size() {

  const router = useRouter()

  const nameForm = "size"

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
      title: "Menos de 1.68m",
      router: "/price"
    },
    {
      value: 4,
      title: "Entre 1.68m y 1.82m",
      router: "/price"
    },
    {
      value: 5,
      title: "Más de 1.82m",
      router: "/price"
    },
  ];

  return (
    <FormNovatos
      progress={60}
      description={"¿Cuánto mides?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
    />
  );
}