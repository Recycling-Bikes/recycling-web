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
      title: "Menos de 1.65m",
      router: "/price"
    },
    {
      value: 4,
      title: "Entre 1.65 y 1.70m",
      router: "/price"
    },
    {
      value: 5,
      title: "Entre 1.70m y 175m",
      router: "/price"
    },
    {
      value: 6,
      title: "Entre 1.75m y 1.80m",
      router: "/price"
    },
    {
      value: 7,
      title: "Entre 1.80m y 1.85m ",
      router: "/price"
    },
    {
      value: 8,
      title: "Más de 1.85m",
      router: "/price"
    }
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