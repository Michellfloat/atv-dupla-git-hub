// Importa o estilo exclusivo da vitrine de produtos
import './style.css';

export default function Produtos() {
  // Lista focada apenas em produtos (físicos ou digitais) da Silva Vendas
  const listaProdutos = [
    { id: 1, nome: 'E-book: Guia de Vendas', preco: 'R$ 49,90', imagem: 'https://via.placeholder.com/150', desc: 'O passo a passo definitivo para triplicar suas vendas online.' },
    { id: 2, nome: 'Template Dashboard Premium', preco: 'R$ 120,00', imagem: 'https://via.placeholder.com/150', desc: 'Painel administrativo completo em React para acelerar seu projeto.' },
    { id: 3, nome: 'Caneca Exclusiva Silva Vendas', preco: 'R$ 35,00', imagem: 'https://via.placeholder.com/150', desc: 'Caneca de cerâmica personalizada para acompanhar seu café no trabalho.' },
    { id: 4, nome: 'Pack de Elementos UI/UX', preco: 'R$ 89,90', imagem: 'https://via.placeholder.com/150', desc: 'Mais de 500 componentes prontos para usar no Figma e agilizar seus designs.' }
  ];

  return (
    <main className="produtos-container">
      <header className="produtos-header">
        <h2>Nossa Vitrine de Produtos</h2>
        <p>Encontre os melhores materiais e produtos com entrega rápida e garantia de satisfação.</p>
      </header>

      {/* Grid de Produtos em formato de Loja Virtual */}
      <section className="produtos-grid">
        {listaProdutos.map((produto) => (
          <article key={produto.id} className="card-produto">
            <div className="produto-foto">
              <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="produto-info">
              <h3>{produto.nome}</h3>
              <p className="produto-desc">{produto.desc}</p>
              <div className="produto-preco-checkout">
                <span className="valor-produto">{produto.preco}</span>
                <button className="btn-carrinho">Adicionar ao Carrinho</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}