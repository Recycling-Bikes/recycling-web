import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Complex() {

  const router = useRouter()

  const nameForm = "complex"

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
      title: "Fáciles",
      description: "Superficie de sendero ancha y firme; pequeños obstáculos; suaves colinas",
      router: "/size"
    },
    {
      value: 4,
      title: "Difíciles",
      description: "Senderos empinados con superficies variables o impredecibles; grandes obstáculos; caídas y saltos más grandes" , 
      router: "/size"
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