import Advisor from "components/Advisor";
import { advisorState } from "context/Advisor/AdvisorState";
import { useRouter } from "next/router";

export function Position() {
    const router = useRouter();

    const nameForm = "position";

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
            value: "aggressive",
            title: "Agresiva",
            description: "Prefieres la velocidad a la comodidad",
            router: "/size",
        },
        {
            value: "relaxed",
            title: "Menos agresiva",
            description: "Una posición cómoda para largas distancias",
            router: "/size",
        },
    ];

    return (
        <Advisor
            description={"¿Qué posición del cuerpo prefieres?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={45}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
