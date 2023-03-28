import Advisor from "components/Advisor";
import { advisorState } from "context/Advisor/AdvisorState";
import { filtersState } from "context/Filters/filtersState";
import { useRouter } from "next/router";

export function Charge() {
    const router = useRouter();

    const nameForm = "charge";
    const setFilter = filtersState(state => state.setFiltersB)

    const setQuest = advisorState((state) => state.setQuest);

    const onSubmit = (event) => {
        switch (event[nameForm]) {
            case "true":
                setFilter(() => ({ subcategory: [7, 8], category: [] }));
                break;
            case "false":
                setFilter(() => ({ subcategory: [7], category: [] }));
                break;
        }

        router.push(router.pathname + "/size");
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
        <Advisor
            description={"¿Quieres usar tu bici para cargar equipaje?"}
            questions={questions}
            onSubmit={onSubmit}
            nameForm={nameForm}
            progress={60}
            back={"./"}
            backButtonVision={true} // <--- Hace visible al botón de atrás
        />
    );
}
