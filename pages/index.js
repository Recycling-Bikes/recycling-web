import Main from "components/main";
import { Container } from "react-bootstrap";
import Article from "./Home/Article";
import Promesas from "./Home/Promesas";
import Presentation from "./Home/Presentation";
import Reviews from "./Home/Reviews";

export default function HomePage(props) {
  return (
    <Main>
      <Container fluid className="presentation">
        <Presentation />
      </Container>
      <Article Title="Explora bicis destacadas" data={props.data} />

      <Reviews />

      <Promesas />
    </Main>
  );
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
