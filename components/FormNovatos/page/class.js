import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Class() {

  const router = useRouter()

  const nameForm = "class"

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
      value: "mountain",
      title: "Ciclismo de Montaña",
      description: "Single track, senderos de montaña, parques de ciclismo.",
      router: "/mountain"
    },
    {
      value: "highway",
      title: "Paseos por carretera",
      description:
        "Paseos de mayor distancia en caminos pavimentados o de grava",
      router: "/highway"
    },
    {
      value: "city",
      title: "Ciclismo en la Ciudad",
      description: "Montar distancias cortas en un entorno urbano",
      router: "/city"
    },
    {
      value: "kits",
      title: "Para Niños",
      description: "Las bicicletas que deseabas tener cuando eras niño",
      router: "/kits"
    },
  ];

  return (
    <FormNovatos
      title={"¡Encontremos tu bici ideal!"}
      description={"¿Para qué usarás la bici?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={nameForm}
      back={"./"}
    />
  );
}
