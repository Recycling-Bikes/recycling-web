import NavB from './NavB'
import Footer from './Footer'
import Head from 'next/head'



const Contenedor = props => {
    return (
        <>
            <Head>
                <title>Recycling</title>
            </Head>

            <NavB />

            {props.children}
            <Footer />

        </>
    )
}


export default Contenedor