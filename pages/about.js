import Head from 'next/head';

const About = () => {
    return (
        <div className='container has-top-margin article-content text-opacity:1'>
            <Head>
                <title>Sobre nosotros | Sandmy Music</title>
                <meta name="description" content="Comunidad de artistas para la Generación Z" />
            </Head>
            Sandmy Music es una comunidad de artistas quienes intentar innovar la industria de la música. Fue fundado por <b>Frank Alvarez</b> y <strong>Nmigo Acapela</strong> durante este año.
        </div>
    )
}

export default About;