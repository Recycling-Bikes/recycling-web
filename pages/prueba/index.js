import FormNovatos from "components/FormNovatos";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputFile from "./prueba2"

export default function Prueba() {

  const {
    handleSubmit,
    register,
    setError,
    watch,

    formState: { isValid, errors,  },
  } = useForm();


  const onSubmit = (event) => {
    console.log (event)
    
  }

  return (
    <FormNovatos>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 d-none d-xl-block" />
      <h1 className="py-5 mb-3" style={{ color: "#06433D" }}>
        ¿Buscas una bici? A veces, el proceso puede ser un poco intimidante.
        Estamos aquí para ayudar.
      </h1>
      <h4 className="mb-3">¿Qué tanto sabes de bicicletas?</h4>

      <Card htmlFor={1} className="me-xl-3 mb-3">
        <Card.Body className="">
          <Form.Check type={"radio"} id={1}>
            <Form.Check.Input name="data" id={1} type={"radio"} />
            <Form.Check.Label htmlFor={1} style={{ color: "black" }}>
              Soy un experto
            </Form.Check.Label>
            <Card.Text style={{ color: "#6C757D" }}>
              Accederás al Marketplace directamente.
            </Card.Text>
          </Form.Check>
        </Card.Body>
      </Card>

      <Card className="me-xl-3 ">
        <Card.Body className="">
          <Form.Check type={"radio"} id={2}>
            <Form.Check.Input name="data" type={"radio"} />
            <Form.Check.Label htmlFor={2} style={{ color: "black" }}>
              Soy un experto
            </Form.Check.Label>
            <Card.Text style={{ color: "#6C757D" }}>
              Accederás al Marketplace directamente.
            </Card.Text>
          </Form.Check>
        </Card.Body>
      </Card>
        
      <InputFile {...register("files")}/>
      <div className="d-xl-block " style={{ height: "20vh" }} />
      <Button
      type="submit">Siguiente</Button>
      </form>
      
    </FormNovatos>
  );
}