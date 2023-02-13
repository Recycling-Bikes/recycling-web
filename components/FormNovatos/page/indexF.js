import FormNovatos from "components/FormNovatos";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { useRouter } from "next/router";

export function IndexF() {
    const router = useRouter();
    const setQuest = formNovatosState((state) => state.setQuest);
    const nameForm = "index";

    // En value, nunca uses booleanos. Apenas números o palabras para representarlo.
    const questions = [
        {
            value: "true",
            title: "No sé mucho",
            description: "Te ayudaremos con el proceso",
            router: "/compra/class",
        },
        {
            value: "false",
            title: "Lo tengo claro",
            description: "Accederás al Marketplace directamente",
            router: "/parking",
        },
    ];

    const onSubmit = (event) => {
        setQuest(event);

        const salida = questions.find((datum) => {
            return datum.value == event[nameForm];
        });

        router.push(salida.router);
    };

    return (
        <FormNovatos
            title={
                "¿Buscas una bici? A veces, el proceso puede ser un poco intimidante. Estamos aquí para ayudar."
            }
            description={"¿Sabes lo que estás buscando?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            noMostrar={true} // <--- No volver a mostrar pregunta
            // back={"/"}
        />
    );
}
