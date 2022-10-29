import Contenedor from "./components/Contenedor";
import Article from "./Home/Article";
import MainPage from "./Home/main-home";


export default function HomePage(props) {
    return (
        <Contenedor>
            
            <MainPage/>
        
            <Article data={props.data} />
            
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
