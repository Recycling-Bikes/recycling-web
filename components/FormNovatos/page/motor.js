import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Motor() {
  const router = useRouter();

  const nameForm = "motor";

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
      router: "/size",
    },
    {
      value: "true",
      title: "Si",
      router: "/size",
    },
  ];

  return (
    <FormNovatos
      description={"¿Quieres una bici con motor?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
      progress={30}
    />
  );
}