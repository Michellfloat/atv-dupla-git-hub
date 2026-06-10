import './style.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} - Copyright - Todos os Direitos Reservados a <br />Michell Silva Santos, Guilherme Silva de Souza
            </p>
        </footer>
    )
};