import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'

function App() {
  // Estado do Tema Visual
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('silva-vendas-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // --- MODIFICADO: Agora o carrinho guarda a LISTA de itens adicionados ---
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('silva-vendas-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // --- MODIFICADO: Função adiciona o objeto completo do produto ---
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((itensAtuais) => {
      // Verifica se o item já está no carrinho para aumentar a quantidade
      const itemExistente = itensAtuais.find(item => item.id === produto.id);
      if (itemExistente) {
        return itensAtuais.map(item => 
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      // Se for a primeira vez, adiciona com quantidade 1
      return [...itensAtuais, { ...produto, quantidade: 1 }];
    });
  };

  // --- NOVO: Função para limpar o carrinho (útil para o checkout) ---
  const limparCarrinho = () => setCarrinho([]);

  return (
    <>
      {/* Passamos a lista do carrinho e a função de limpar para o Header */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        carrinho={carrinho} 
        limparCarrinho={limparCarrinho}
      />
      
      <main style={{ minHeight: 'calc(100vh - 160px)' }}> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nos' element={<SobreNos />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/produtos' element={<Produtos adicionarAoCarrinho={adicionarAoCarrinho} />}/>
        </Routes>
      </main> 

      <Footer />
    </>
  )
}

export default App;