import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function Charge() {
    const router = useRouter();

    const nameForm = "charge";

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
            value: "true",
            title: "Sí",
            description: "Frame bags y racks",
            router: "/size",
        },
        {
            value: "false",
            title: "No",
            description: "Sólo para rodar",
            router: "/size",
        },
    ];

    return (
        <FormNovatos
            description={"¿Quieres usar tu bici para cargar equipaje?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            back={"./"}
            progress={60}
        />
    );
}