// Importa o arquivo de estilização específico da Home
import './style.css';

export default function Home() {
  return (
    <main className="home-container">
      {/* SEÇÃO HERO: O primeiro impacto do cliente ao entrar no site */}
      <section className="hero-section">
        <div className="hero-conteudo">
          <h1>Soluções Inovadoras para o seu Negócio</h1>
          <p>Oferecemos os melhores produtos e serviços do mercado para impulsionar seus resultados de forma rápida e segura.</p>
          {/* Botão de chamada para ação (CTA) que leva para a página de serviços */}
          <a href="#servicos" className="btn-principal">Conheça Nossos Serviços</a>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES: Por que escolher a nossa empresa? */}
      <section className="destaques-section">
        <h2>Por que nos escolher?</h2>
        <div className="grid-destaques">
          <div className="card-destaque">
            <span className="icone">⭐</span>
            <h3>Alta Qualidade</h3>
            <p>Produtos rigorosamente testados e serviços executados por especialistas certificados.</p>
          </div>
          <div className="card-destaque">
            <span className="icone">⚡</span>
            <h3>Suporte Ágil</h3>
            <p>Nossa equipe está pronta para te atender e resolver suas dúvidas a qualquer momento.</p>
          </div>
          <div className="card-destaque">
            <span className="icone">🔒</span>
            <h3>Compra Segura</h3>
            <p>Garantia de satisfação e transações 100% criptografadas para sua segurança.</p>
          </div>
        </div>
      </section>
    </main>
  );
}