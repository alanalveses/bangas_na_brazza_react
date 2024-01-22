import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="nav">
                    <a href="#" className="logo">
                        <span>Bangas</span>Na <span>Brazza</span>
                    </a>
                    <div className="navbar">
                        <li><a href="#" className="nav-link">Heróis</a></li>
                        <li><a href="#" className="nav-link">Guia</a></li>
                        <li><a href="#" className="nav-link">Loja</a></li>
                        <li><a href="#" className="nav-link">Atualização</a></li>
                        <li><a href="#" className="nav-link">Eventos</a></li>
                        
                        <div className="login-btn">
                            <span>Login</span>
                            <i className='bx bx-chevron-down'></i>
                        
                            <div className="drop-login">
                                <div className="drop-item">
                                    <a href="#">Area Do Cliente</a>
                                    <span>Perfil & Chat </span>
                                </div>
                                <div className="drop-item">
                                    <a href="#">Reportar Problema</a>
                                    <span>Suporte & Dúvidas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="menu-icon">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </header>
        </>
    )

    }
    
export default Header