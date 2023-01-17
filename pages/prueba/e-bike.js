import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export default function Clases() {
  const router = useRouter();
  const setQuest = formNovatosState((state) => state.setQuest);

  const onSubmit = (event) => {
    setQuest(event);
    console.log(event);
  };

  const questions = [
    {
      value: false,
      title: "No",
    },
    {
      value: true,
      title: "Si",
    },
  ];

  return (
    <FormNovatos
      description={"¿Estás buscando una e-bike (bicicleta asistida)?"}
      questions={questions}
      onSubmit={onSubmit}
      nameForm={"E-Bike"}
      back={"/parking"}
      progress={30}
    />
  );
}
