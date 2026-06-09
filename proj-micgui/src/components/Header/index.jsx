import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo' // Importando a nova logo que acabamos de criar
import './style.css'

export default function Header(){
    return(
        <header className='header'>
            <div>
                {/* Deixando a Logo inteira clicável para retornar à Home */}
                <Link to="/" className="header-logo">
                    <Logo />
                </Link>
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sobre-nos">Sobre Nós</NavLink>
                <NavLink to="/produtos">Produtos</NavLink>
                <NavLink to="/servicos">Servicos</NavLink>
            </nav>
        </header>
    )
}