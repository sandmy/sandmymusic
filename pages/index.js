import Artists from 'components/artists/artists';
import Linky from 'components/utils/Linky';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Sandmy Music - Inicio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="home-banner">
				<div>
					<h1>Aprende y haz crecer tu carrera con nosotros</h1>
					<p>
						Únase a nuestra comunidad de artistas para obtener ayuda o ayudar a otros artistas
					</p>
					<div>
						<Linky className="button is-primary" to='/unirse'>
							Únete ahora
						</Linky>
					</div>
				</div>
			</div>
			<div className='margin-top:lg container'>
				<h1 className='margin-bottom'>Artistas</h1>
				<Artists/>
			</div>
		</>
	)
}