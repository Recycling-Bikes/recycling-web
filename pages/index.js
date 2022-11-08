import Contenedor from "components/Contenedor";
import { Container } from "react-bootstrap";
import Article from "./Home/Article";
import Promesas from "./Home/Promesas";
import Presentation from "./Home/Presentation";


export default function HomePage(props) {
    return (
        <Contenedor>
            <Container fluid className="presentation">
                <Presentation />
            </Container>
            <Article data={props.data} />

            <Promesas />


        </Contenedor>

    )
}




// export async function getStaticProps(ctx){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/photos")
//         const data = await res.json()

//         return {props: {data}}
//     }
//     catch (err) {

//     }
// }
