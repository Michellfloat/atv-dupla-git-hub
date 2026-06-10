// Importa o arquivo de estilização específico de Serviços
import './style.css';

export default function Servicos() {
  // Lista focada apenas em Serviços da Silva Vendas
  const listaServicos = [
    { id: 1, nome: 'Consultoria Estratégica', preco: 'R$ 450,00', desc: 'Análise completa do seu modelo de negócios com foco em escala e automação de processos.' },
    { id: 2, nome: 'Desenvolvimento Web Customizado', preco: 'Sob Consulta', desc: 'Criação de landing pages, portfólios e sistemas web ultra rápidos e responsivos.' },
    { id: 3, nome: 'Mentoria Individual de Vendas', preco: 'R$ 299,00/mês', desc: 'Acompanhamento quinzenal focado em destravar seus canais de tração e conversão.' },
    { id: 4, nome: 'Otimização de SEO e Tráfego', preco: 'R$ 600,00', desc: 'Configuração completa para fazer sua empresa aparecer nas primeiras páginas do Google.' }
  ];

  return (
    <main className="servicos-container">
      <header className="servicos-header">
        <h2>Nossos Serviços</h2>
        <p>Escolha a solução ideal para o seu momento atual. Impulsione seu negócio.</p>
      </header>

      {/* Grid que renderiza a lista de serviços de forma correta */}
      <section className="vitrine-grid">
        {listaServicos.map((item) => (
          <div key={item.id} className="card-venda">
            {/* Como é tudo serviço, deixamos uma tag fixa bonita escrito "Serviço" */}
            <span className="tag servico">Serviço</span>
            
            <h3>{item.nome}</h3>
            <p className="descricao">{item.desc}</p>
            
            <div className="preco-container">
              <span className="preco-label">Investimento</span>
              <span className="preco-valor">{item.preco}</span>
            </div>
            
            {/* Botão de conversão de venda */}
            <button className="btn-comprar">Contratar Serviço</button>
          </div>
        ))}
      </section>
    </main>
  );
}