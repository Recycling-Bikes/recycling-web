import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function NoEBike() {

  const router = useRouter()

  const nameForm = "hill"

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
      value: "true",
      title: "Subiendo y bajando colinas",
      router: "/suspension"
      
    },
    {
      value: "false",
      title: "Estrictamente cuesta abajo",
      router: "/size"
    },
  ];

  return (
    <FormNovatos
      progress={60}
      description={"¿Qué tipo de conducción planeas hacer?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
    />
  );
}