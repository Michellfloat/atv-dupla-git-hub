import React from 'react';

export default function Logo() {
  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Ícone SVG Vetorial: Seta de Crescimento + Monograma 'S' */}
      <svg 
        width="36" 
        height="36" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-45deg)' }} /* Inclinação dinâmica para dar ideia de velocidade */
      >
        <defs>
          {/* Gradiente do Indigo ao Verde Esmeralda (Sucesso/Vendas) */}
          <linearGradient id="silva-gradiente" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        
        {/* Traçado do corpo do 'S' em formato de fita tecnológica */}
        <path 
          d="M10 30C10 30 14 34 20 34C28 34 30 29 30 25C30 18 22 17 18 16C13 15 10 13 10 9C10 4 15 2 20 2C25 2 30 6 30 6" 
          stroke="url(#silva-gradiente)" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Ponteira da seta apontando para o topo (sucesso/conversão) */}
        <path 
          d="M23 2L32 2L32 11" 
          stroke="#10b981" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      {/* Tipografia da Marca com pesos diferentes para hierarquia visual */}
      <span className="logo-texto" style={{ fontFamily: 'var(--sans, sans-serif)', display: 'flex', gap: '4px' }}>
        <strong style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a' }}>Silva</strong>
        <span style={{ fontSize: '1.4rem', fontWeight: '400', color: '#4f46e5' }}>Vendas</span>
      </span>
    </div>
  );
}