import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function City() {
    const router = useRouter();

    const nameForm = "city";

    const setQuest = formNovatosState((state) => state.setQuest);

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
            value: "daily",
            title: "Ir al trabajo o a la escuela",
            router: "/motor",
        },
        {
            value: "exercise",
            title: "Montar para hacer un poco de ejercicio",
            router: "/size",
        },
        {
            value: "shop",
            title: "Ir de compras",
            router: "/size",
        },
        {
            value: "transport",
            title: "Transportar a los niños por la ciudad",
            router: "/size",
        },
    ];

    return (
        <FormNovatos
            description={"¿Para qué actividad vas a usarla principalmente?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={30}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
