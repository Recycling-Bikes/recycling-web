import Contenedor from "components/home/Contenedor";
import { Container } from "react-bootstrap";
import Article from "./Home/Article";
import Promesas from "./Home/Promesas";
import Presentation from "./Home/Presentation";
import Reviews from "./Home/Reviews";
import { useEffect } from "react";


export default function HomePage(props) {

    return (
        <Contenedor>
            <Container fluid className="presentation ">
                <Presentation />
            </Container>
            <Article Title="Explora bicis destacadas" data={props.data} />

            <Reviews />

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
