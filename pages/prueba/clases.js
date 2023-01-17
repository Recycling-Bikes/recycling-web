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
      value: 3,
      title: "Ciclismo de Montaña",
      description: "Single track, senderos de montaña, parques de ciclismo.",
    },
    {
      value: 4,
      title: "Paseos por carretera",
      description:
        "Paseos de mayor distancia en caminos pavimentados o de grava",
    },
    {
      value: 5,
      title: "Ciclismo en la Ciudad",
      description: "Montar distancias cortas en un entorno urbano",
    },
    {
      value: 6,
      title: "Para Niños",
      description: "Las bicicletas que deseabas tener cuando eras niño",
    },
  ];

  return (
    <FormNovatos
      title={"¡Encontremos tu bici ideal!"}
      description={"¿Para qué usarás la bici?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={"clases"}
    />
  );
}
