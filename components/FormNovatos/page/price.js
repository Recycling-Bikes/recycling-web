import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Price() {
    const router = useRouter();
    const setQuest = formNovatosState((state) => state.setQuest);
    const nameForm = "price";

    const onSubmit = (event) => {
        console.log(router.basePath);
        setQuest(event);
        console.log(event);
        router.push("/parking");
  };
  
    // En value, nunca uses booleanos. Apenas números o palabras para representarlo.
    const questions = [
        {
            value: 2,
            title: "$0 - $500",
        },
        {
            value: 3,
            title: "$500 - $1000",
        },
        {
            value: 4,
            title: "$1000 - $1500",
        },
        {
            value: 5,
            title: "$1500 - $2000",
        },
        {
            value: 6,
            title: "$2000 - $2500",
        },
        {
            value: 7,
            title: "$3000 o más",
        },
    ];

    return (
        <FormNovatos
            title={""}
            description={"¿Cuál es tu presupuesto?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            back={"./"}
            progress={90}
        />
    );
}
