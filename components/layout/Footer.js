import Icon from "components/utils/Icon";
import Linky from "components/utils/Linky";

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className="footer-links">
                <div className="footer-brand">
                    <div className="footer-brand-logo">
                        <img src='/sandmy.svg' alt='Sandmy Music Logo'/>
                        {/* <img src="/sandmy.svg"/> */}
                        <h2 className="xpend-font">Sandmy Music</h2>
                    </div>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/sandmymusic/" target="_blank" rel='noreferrer' className="social">
                            <i className="brand-instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCKi45WkUbb_lNPF6Smnl5lg" target="_blank" rel='noreferrer' className="social">
                            <i className="brand-youtube" />
                        </a>
                        <a href="https://t.me/sandmymusic" target="_blank" rel='noreferrer' className="social">
                            <i className="brand-telegram" />
                        </a>
                    </div>
                </div>
                <div className="footer-link">
                    <Linky to='/unirse'>
                        Unirse
                    </Linky>
                    <Linky to='/about'>
                        Sobre nosotros
                    </Linky>
                    <a href="https://go.sandmy.com/guGn" target="_blank" rel='noreferrer'>
                        Mas información
                    </a>
                </div>
                <div className="footer-link">
                    <h2>
                        Enlaces
                    </h2>
                    <Linky to='/demo'>
                        Enviar mi demo
                    </Linky>
                    <Linky to='/'>
                        Blog
                    </Linky>
                </div>
                <div className="footer-link">
                    <h2>
                        Recursos
                    </h2>
                    <a href="https://www.youtube.com/channel/UCKi45WkUbb_lNPF6Smnl5lg" target="_blank" rel='noreferrer'>
                        YouTube
                    </a>
                    <a href="https://imgur.com/user/sandmy" target="_blank" rel='noreferrer'>
                        Imgur
                    </a>
                    <a href="https://sandmy.com">
                        Sandmy
                    </a>
                </div>
            </div>
            <div>
                <div>De latinoamérica con <Icon icon='' /> para el mundo </div>
            </div>
        </footer>
    )
}

export default Footer;