import Advisor from "components/Advisor";
import { advisorState } from "context/Advisor/AdvisorState";
import { useRouter } from "next/router";

export function Mountain() {
    const router = useRouter();

    const nameForm = "e-bike";

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
            value: "false",
            title: "No",
            router: "/no-e-bike",
        },
        {
            value: "true",
            title: "Sí",
            router: "/size",
        },
    ];

    return (
        <Advisor
            description={"¿Estás buscando una e-bike (bicicleta asistida)?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={30}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
