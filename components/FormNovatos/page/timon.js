import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Timon() {
    const router = useRouter();

    const nameForm = "timon";

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
            value: "drop",
            title: "Dropbars (agresivo)",
            description: "Timón para bicis de ruta",
            router: "/size",
        },
        {
            value: "flat",
            title: "Flatbars (cómodo)",
            description: "Timón para bicis de MTB",
            router: "/charge",
        },
    ];

    return (
        <FormNovatos
            description={"¿Qué estilo de timón prefieres?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={45}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
