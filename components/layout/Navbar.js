import Linky from "components/utils/Linky";

const Navbar = () => {
    const openNavbar = () => {
        document.getElementById('navbar').classList.toggle('is-active');
    }

    return (
        <>
            <div className="navbar-menu">
                <div className="menu-item" onClick={openNavbar}>
                    <i className="menu-icon" data-icon="menu" />
                </div>
            </div>
            <div className="navbar-logo">
                <Linky to='/' >
                    <img src="/sandmy.svg" alt="Wings Records logo" />
                </Linky>
            </div>
            <header className="navbar" id="navbar">
                <div className="navbar-links">
                    <Linky to="/" className="nav-item" onClick={openNavbar}>
                        Inicio
                    </Linky>
                    <Linky to="/about" className="nav-item" onClick={openNavbar}>
                        Sobre nosotros
                    </Linky>
                    <a href="https://go.sandmy.com/musicdoc" className="nav-item" target="_blank" rel='noreferrer'>
                        ¿Como funciona?
                    </a>
                    <Linky to="/demo" className="nav-item" onClick={openNavbar}>
                        Envia tu demo
                    </Linky>
                    <Linky to="/unirse" className="nav-item button is-primary" onClick={openNavbar}>
                        Únete <i data-icon="arrow_forward" ></i>
                    </Linky>
                </div>
            </header>
        </>
    )
}

export default Navbar;