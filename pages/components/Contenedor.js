import NavB from './NavB'
import Footer from './Footer'
import Head from 'next/head'
import { SSRProvider } from "react-bootstrap"



const Contenedor = props => {
    return (
        <>
            <Head>
                <title>Recycling</title>
            </Head>

            <SSRProvider>

            <NavB />

                {props.children}
                
            <Footer />
            </SSRProvider>

        </>
    )
}


export default Contenedor