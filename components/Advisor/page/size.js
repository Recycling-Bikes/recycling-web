import Advisor from "components/Advisor";
import { advisorState } from "context/Advisor/AdvisorState";
import { useRouter } from "next/router";

export function Size() {
    const router = useRouter();

    const nameForm = "size";

    const setQuest = advisorState((state) => state.setQuest);

    const onSubmit = (event) => {
        setQuest(event);

        const salida = questions.find((datum) => {
            return datum.value == event[nameForm];
        });

        router.push(router.pathname + salida.router);
    };

    // En value, nunca uses booleanos. Apenas números o palabras para representarlo.
    const questions = [
        {
            value: 3,
            title: "Menos de 1.65m",
            router: "/price",
        },
        {
            value: 4,
            title: "Entre 1.65 y 1.70m",
            router: "/price",
        },
        {
            value: 5,
            title: "Entre 1.70m y 175m",
            router: "/price",
        },
        {
            value: 6,
            title: "Entre 1.75m y 1.80m",
            router: "/price",
        },
        {
            value: 7,
            title: "Entre 1.80m y 1.85m ",
            router: "/price",
        },
        {
            value: 8,
            title: "Más de 1.85m",
            router: "/price",
        },
    ];

    return (
        <Advisor
            progress={75}
            description={"¿Cuánto mides?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
