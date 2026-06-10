import { NavLink } from 'react-router-dom'
import './style.css'


export default function Header(){
    return(
        <header className='header'>
            <div>
                <h2>Silva Vendas</h2>
            </div>

            <nav>
                <NavLink to="/">
                Home
                </NavLink>

                <NavLink to="/sobre-nos">
                Sobre Nós
                </NavLink>

                <NavLink to="/produtos">
                Produtos
                </NavLink>

                <NavLink to="/servicos">
                Servicos
                </NavLink>
            </nav>
        </header>
    )
};