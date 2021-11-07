import Linky from "components/utils/Linky";
import Head from 'next/head';

const Demo = () => {

    return (
        <div className='container has-top-margin article-content'>
            <Head>
                <title>Envia tu demo | Sandmy Music</title>
                <meta name="description" content="Comunidad de artistas para la Generación Z" />
            </Head>
            Sandmy Music busca estar más cerca de los artistas, por eso es necesario que formes parte de la comunidad para que puedas enviar tu demo.
            <br/>
            <br/>   
            Puedes unirte a nuestra comunidad a través de este <Linky to='unirse'>formulario</Linky> , o también puedes enviar un <a href="https://mailxto.com/3gvqdm" target='_blank' rel='noreferrer'>correo electrónico</a> contándonos sobre ti y por qué quieres formar parte de esto.
        </div>
    )

}

export default Demo;