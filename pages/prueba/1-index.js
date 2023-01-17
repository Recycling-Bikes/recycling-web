import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";

export default function Clases() {
  const setQuest = formNovatosState((state) => state.setQuest);

  const questions = [
    {
      value: 1,
      title: "No sé mucho",
      description: "Te ayudaremos con el proceso.",
      router: "./2-clases",
    },
    {
      value: 2,
      title: "Soy un experto",
      description: "Accederás al Marketplace directamente.",
      router: "/parking",
    },
  ];

  const onSubmit = (event) => {
    setQuest(event);

    const salida = questions.find((datum) => {
      return datum.value == event.index;
    });

    router.push(salida.router);
  };

  return (
    <FormNovatos
      title={
        "¿Buscas una bici? A veces, el proceso puede ser un poco intimidante. Estamos aquí para ayudar."
      }
      description={"¿Qué tanto sabes de bicicletas?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={"clases"}
      back={"/"}
    />
  );
}
