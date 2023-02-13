import FormNovatosComponent, {
    Selects,
} from "components/FormNovatos/component";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { Button, ProgressBar } from "react-bootstrap";
import { useRouter } from "next/router";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function FormNovatos({
    questions,
    title,
    description,
    onSubmit,
    nameForm,
    back,
    progress,
}) {
    const router = useRouter();
    const quest = formNovatosState((state) => state.quest);

    const { handleSubmit, register, control } = useForm({
        defaultValues: quest,
    });

    const submit = useRef(null);

    const HandleClick = () => {
        submit.current.click();
    };

    return (
        <FormNovatosComponent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 d-none d-xl-block" />

                {progress ? (
                    <ProgressBar className="mt-5" now={progress} />
                ) : null}
                <div className="mb-4" />
                <h1 className="mb-5" style={{ color: "#212928" }}>
                    {title}
                </h1>
                <h3 className="mb-3" style={{ color: "#212928" }}>
                    {description}
                </h3>

                {questions.map((data, index) => (
                    <Selects
                        register={register}
                        data={data}
                        index={index}
                        name={nameForm}
                        key={index}
                        HandleClick={HandleClick}
                        className="mb-3"
                    />
                ))}
                <Button
                    variant=""
                    onClick={() => router.push(back)}
                    style={{ color: "#0FA899" }}
                >
                    {" "}
                    <MdKeyboardArrowLeft /> Atrás
                </Button>

                <div className="d-xl-none" style={{ height: "20vh" }} />

                <button ref={submit} type="submit" className="d-none" />
            </form>
        </FormNovatosComponent>
    );
}
