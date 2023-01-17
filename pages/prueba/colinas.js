
import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";

export default function Clases() {
  const setQuest = formNovatosState((state) => state.setQuest);

  const onSubmit = (event) => {
    setQuest(event);
    console.log(event);
  };

  const questions = [
    {
      value: true,
      title: "Subiendo y bajando colinas",
    },
    {
      value: false,
      title: "Estrictamente cuesta abajo",
    },
  ];

  return (
    <FormNovatos
      title={""}
      description={"¿Qué tipo de conducción planeas hacer?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={"colinas"}
      back={"hola"}
    />
  );
}
