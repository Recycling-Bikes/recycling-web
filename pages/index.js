import Contenedor from "components/Contenedor";
import { Container } from "react-bootstrap";
import Article from "./Home/Article";
import Carts from "./Home/Carts";
import Presentation from "./Home/Presentation";


export default function HomePage(props) {
    return (
        <Contenedor>

            <Presentation />

            <Article data={props.data} />

            <Carts/>

            
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
