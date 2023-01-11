import Contenedor from "components/home/Contenedor";


import { Card, Col, Container, Form, Row } from "react-bootstrap";

import ImagePrueba from "./img";
import PropTypes from "prop-types";





export default function FormNovatos(props) {


  return (
    <Contenedor>
      <Container>
      <Row>
        <Col>

      {props.children}
      </Col>

      <Col className="d-none d-xl-block">
      <ImagePrueba/>
      </Col>
      </Row>
      </Container>
    </Contenedor>
  );
}





export const Selects = (props) =>{

  const id = props.id? props.id : props.value
  const value = props.value? props.value : props.name

  console.log(props)
  console.log(value)
  console.log(props.def === props.value)

return(
  <div className={props.className} style={props.style} >
<label className="w-100">
<Card className="me-xl-3 ">
  <Card.Body>
    <Form.Check>
      <Form.Check.Input
        id={id}
        name={props.name}
        type={props.type}
        value={props.value}
        defaultChecked={props.def == props.value}
        onChange={(e) => {

          const awa = {
            target: { name: props.name,
              value: props.value,
            
            },

          }

          props.onChange(awa)
          console.log(awa)
        }
        }
        onBlur={props.onBlur}


      />
      <Form.Check.Label htmlFor={id}  style={{ color: "black" }}>
        {props.title}
      </Form.Check.Label>
      <Card.Text style={{ color: "#6C757D" }}>
        {props.description}
      </Card.Text>
    </Form.Check>
  </Card.Body>
</Card>
</label>
</div>)
}

Selects.PropType = {
  id: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,

}

Selects.defaultProps = {

  type: "radio",
}