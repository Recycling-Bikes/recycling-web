import Main from "components/main";
import { Container } from "react-bootstrap";
import Infos from "./Infos";
import Presentation from "./Presentation";
import Martket from "./marketplace";

export default function HomePage(props) {
  return (
    <Main>
      <Container fluid>
        <Presentation />
        <Infos />
      </Container>
      <Martket />
    </Main>
  );
}
