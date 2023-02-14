import FormNovatosComponent, {
    Selects,
} from "components/FormNovatos/component";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { formNovatosState } from "context/FormNovatos/FormNovatosState";
import { Button, ProgressBar } from "react-bootstrap";
import { useRouter } from "next/router";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Form from "react-bootstrap/Form";

export default function FormNovatos({
    questions,
    title,
    description,
    onSubmit,
    nameForm,
    back,
    backButtonVision, // <--- Hace visible on invisible el boton de Atrás
    checkbox, // <--- Agrega la propiedad "checkbox"
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
                {/* Button Back con condicionales de visibilidad*/}
                {backButtonVision ? (
                    <Button
                        variant="link"
                        onClick={() => back && router.push(back)}
                        style={{ color: "#0FA899" }}
                    >
                        <MdKeyboardArrowLeft /> Atrás
                    </Button>
                ) : null}
                {/*Agrega el checkbox con condicionales de visibilidad */}
                {checkbox ? (
                    <Form.Check
                        type="checkbox"
                        id="checkbox"
                        label="No volver a mostrar pregunta"
                    />
                ) : null}
                {/* End checkbox */}
                {/* Button Back End*/}
                <button ref={submit} type="submit" className="d-none" />
            </form>
        </FormNovatosComponent>
    );
}
