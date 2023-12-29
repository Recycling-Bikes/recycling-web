import { Container} from "react-bootstrap";
import Promesas from "./promesas";
import Buttons from "./buttons";


export default function Descriptons() {

  return (
    <Container className="py-3 d-flex flex-column">
      <Buttons />
      <Promesas />
    </Container>
  );
}
