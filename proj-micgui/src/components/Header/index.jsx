import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo'
import './style.css'

export default function Header({ theme, toggleTheme }){
    return(
        <header className='header'>
            <div>
                <Link to="/" className="header-logo">
                    <Logo />
                </Link>
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sobre-nos">Sobre Nós</NavLink>
                <NavLink to="/produtos">Produtos</NavLink>
                <NavLink to="/servicos">Servicos</NavLink>
                
                {/* Botão de Alternância Interativo */}
                <button 
                    className="theme-toggle-btn" 
                    onClick={toggleTheme}
                    aria-label="Alternar tema visual"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </nav>
        </header>
    )
}