import { avaluadorState } from "context/Avaluador/avaluadorState";
import { Col, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Pop(props) {
    const conditions = avaluadorState((state) => state.conditions);
  
    const {
      handleSubmit,
      register,
      setError,
      control,
  
      formState: { isValid, errors },
    } = useForm();
  
    const onSubmit = (e) => {
      console.log(e);
    };
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <form className=" py-5" onSubmit={handleSubmit(onSubmit)}>
            {conditions?.map((datum) => {
              return (
                <Form.Group key={datum.id} required>
                  <div className="d-flex justify-content-sm-between flex-column flex-sm-row my-4 ">
                    <Col className="mx=sm-4 my-2 my-sm-0">
                      <Form.Check type="radio" id={`radio-${datum.id}`}>
                        <Form.Check.Input
                          required
                          type="radio"
                          value={datum.id}
                          {...register("conditions")}
                        />
  
                        <Form.Check.Label>{datum.name}</Form.Check.Label>
                      </Form.Check>
                    </Col>
  
                    <Col sm="5" className="">
                      {datum.description}
                    </Col>
                  </div>
                </Form.Group>
              );
            })}
          </form>
        </Modal.Body>
      </Modal>
    );
  }
  