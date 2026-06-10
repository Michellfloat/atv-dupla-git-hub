// Importa o arquivo de estilização específico de Sobre Nós
import './style.css';

export default function SobreNos() {
  return (
    <main className="sobrenos-container">
      {/* Bloco de História institucional */}
      <section className="historia-section">
        <div className="historia-texto">
          <h2>Nossa História</h2>
          <p>
            Fundada com o propósito de descomplicar processos e entregar resultados reais, nossa empresa nasceu da paixão por tecnologia e inovação. Acreditamos que cada cliente possui uma necessidade única e, por isso, focamos em criar experiências personalizadas de alto impacto.
          </p>
          <p>
            Ao longo dos anos, expandimos nosso catálogo de soluções, construindo uma marca sólida baseada na transparência, ética e compromisso com o sucesso daqueles que confiam no nosso trabalho.
          </p>
        </div>
      </section>

      {/* Lista de Valores da Empresa */}
      <section className="valores-section">
        <h2>Nossos Pilares</h2>
        <ul className="lista-valores">
          <li>
            <strong>🚀 Inovação:</strong> Buscar constantemente novas maneiras de resolver velhos problemas.
          </li>
          <li>
            <strong>🤝 Transparência:</strong> Relações claras, honestas e baseadas na confiança mútua.
          </li>
          <li>
            <strong>🎯 Foco em Resultados:</strong> Não entregamos apenas códigos ou produtos, entregamos transformação comercial.
          </li>
        </ul>
      </section>
    </main>
  );
}