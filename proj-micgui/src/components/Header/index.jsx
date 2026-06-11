import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo'
import './style.css'

export default function Header({ theme, toggleTheme, carrinho, limparCarrinho }){
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calcula a quantidade total de itens e o valor total em dinheiro
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    const valorTotal = carrinho.reduce((sum, item) => {
        // Converte 'R$ 49,90' para o número float 49.90
        const precoNumero = parseFloat(item.preco.replace('R$', '').replace(',', '.').trim());
        return sum + (precoNumero * item.quantidade);
    }, 0);

    return(
        <header className='header'>
            <div>
                <Link to="/" className="header-logo">
                    <Logo />
                </Link>
            </div>

            <nav className="nav-container">
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/sobre-nos">Sobre Nós</NavLink>
                    <NavLink to="/produtos">Produtos</NavLink>
                    <NavLink to="/servicos">Servicos</NavLink>
                </div>
                
                {/* Agrupamento das ações no Canto Superior Direito */}
                <div className="header-actions">
                    {/* Botão do Carrinho */}
                    <button 
                        className="cart-toggle-btn"
                        onClick={() => setIsModalOpen(true)}
                        aria-label="Abrir carrinho de compras"
                    >
                        🛒
                        {totalItens > 0 && <span className="cart-count">{totalItens}</span>}
                    </button>

                    {/* Botão de Alternância de Tema */}
                    <button 
                        className="theme-toggle-btn" 
                        onClick={toggleTheme}
                        aria-label="Alternar tema visual"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </nav>

            {/* MODAL LATERAL DO CARRINHO */}
            {isModalOpen && (
                <div className="cart-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                        <div className="cart-sidebar-header">
                            <h3>Seu Carrinho</h3>
                            <button className="close-cart-btn" onClick={() => setIsModalOpen(false)}>✕</button>
                        </div>

                        <div className="cart-sidebar-content">
                            {carrinho.length === 0 ? (
                                <p className="empty-cart-msg">Seu carrinho está vazio no momento.</p>
                            ) : (
                                <div className="cart-items-list">
                                    {carrinho.map((item) => (
                                        <div key={item.id} className="cart-item-row">
                                            <img src={item.imagem} alt={item.nome} className="cart-item-img" />
                                            <div className="cart-item-details">
                                                <h4>{item.nome}</h4>
                                                <p>{item.quantidade}x - <span className="cart-item-price">{item.preco}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {carrinho.length > 0 && (
                            <div className="cart-sidebar-footer">
                                <div className="cart-total-row">
                                    <span>Total:</span>
                                    <span className="cart-total-value">
                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}
                                    </span>
                                </div>
                                <button className="checkout-btn" onClick={() => { alert('Compra simulada com sucesso!'); limparCarrinho(); setIsModalOpen(false); }}>
                                    Finalizar Compra
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}