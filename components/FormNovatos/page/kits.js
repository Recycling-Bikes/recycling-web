import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Kits() {
    const router = useRouter();

    const nameForm = "kits";

    const setQuest = formNovatosState((state) => state.setQuest);

    const onSubmit = (event) => {
        setQuest(event);

        const salida = questions.find((datum) => {
            // rome-ignore lint/suspicious/noDoubleEquals: <explanation>
            return datum.value == event[nameForm];
        });

        router.push(router.pathname + salida.router);
    };

    // En value, nunca uses booleanos. Apenas números o palabras para representarlo.
    const questions = [
        {
            value: 3,
            title: "1-3 años",
            description: "Bicicletas de balance o con llantas de apoyo",
            router: "/price",
        },
        {
            value: 4,
            title: "3-4 años",
            description: "Rin 12’’ y llantas de apoyo removibles",
            router: "/price",
        },
        {
            value: 5,
            title: "4-5 años",
            description: "Rin 16’’",
            router: "/price",
        },
        {
            value: 6,
            title: "5-7 años",
            description: "Rin 20’’",
            router: "/price",
        },
        {
            value: 7,
            title: "7 años o más",
            description: "Rin 24’’ y 26’’",
            router: "/price",
        },
    ];

    return (
        <FormNovatos
            description={"¿De qué edad?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={30}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}