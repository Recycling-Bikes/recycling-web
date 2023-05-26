import Main from "components/main";
import { Container } from "react-bootstrap";
import Infos from "./Infos";
import Presentation from "./Presentation";
import Martket from "./marketplace";
import Mantenimiento from "./matenimiento";
import Fitting from "./fitting";

export default function HomePage(props) {
  return (
    <Main>
      <Container fluid>
        <Presentation />
        <Fitting />
        <Infos />
      </Container>
      <Martket />
      <Mantenimiento />
    </Main>
  );
}
