import Advisor from "components/Advisor";
import { advisorState } from "context/Advisor/AdvisorState";
import { useRouter } from "next/router";

export function Highway() {
    const router = useRouter();

    const nameForm = "type";

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
            value: "pavement",
            title: "Caminos pavimentados",
            description: "Calles y carreteras bien asfaltadas",
            router: "/position",
        },
        {
            value: "mix",
            title: "Mezclado",
            description:
                "Principalmente pavimento con un sendero conector ocasional de gravilla o tierra",
            router: "/timon",
        },
    ];

    return (
        <Advisor
            description={
                "¿En qué tipo de carreteras circularás principalmente?"
            }
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={30}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
