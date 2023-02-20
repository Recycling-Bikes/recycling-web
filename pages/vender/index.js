import Contenedor from "components/home/Contenedor";
import { Container } from "react-bootstrap";
import Promesas from "./Promesas";
import Presentation from "./Presentation";
import Martket from "./marketplace";



export default function HomePage(props) {
    return (
        <Contenedor>
            <Container fluid>
                <Presentation />
            </Container>
            <Martket/>

            <Promesas />


        </Contenedor>

    )
}