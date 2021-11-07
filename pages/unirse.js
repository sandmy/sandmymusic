import { useForm } from '@formcarry/react';
import Icon from 'components/utils/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Head from 'next/head';

const Unirse = () => {

    const { state, submit } = useForm({
        id: 'SLFdDbRLha4'
    });

    // Success message
    if (state.submitted) {
        return (
            <div className='container has-top-margin'>
                <p className='box-container'>
                    <Icon icon='check_circle' /> Su solicitud ha sido enviada, intentaremos ponernos en contacto con usted lo antes posible.
                </p>
            </div>
        );
    }

    return (
        <div className='container has-top-margin'>
            <Head>
                <title>Unirse | Sandmy Music</title>
                <meta name="description" content="Comunidad de artistas para la Generación Z" />
            </Head>
            <form className='box-container' onSubmit={submit}>
                <div className='grid:2 gap'>
                    <div>
                        <label className='label'>
                            Nombre
                        </label>
                        <input className='input is-text' type='text' name='name' />
                    </div>
                    <div>
                        <label className='label'>
                            Correo electronico
                        </label>
                        <input className='input is-text' type='email' name='email' />
                    </div>
                </div>
                <div className='field padding-top'>
                    <label className='label'>
                        ¿Por que quieres formar parte de nuestra comunidad?
                    </label>
                    <TextareaAutosize className='input is-text' minRows={2} maxRows={10} name='about' />
                </div>
                <div className='field'>
                    <input type="submit" className='button is-primary is-fullwidth' />
                </div>
                <div className='text-opacity:1 article-content'>
                    También puedes enviar un <a href="https://mailxto.com/3gvqdm" target='_blank' rel='noreferrer'>correo electrónico</a> contándonos sobre ti y por qué quieres formar parte de nuestra comunidad.
                </div>
            </form>

        </div>
    );
}

export default Unirse;