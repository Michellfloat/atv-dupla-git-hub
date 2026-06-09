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
  // Inicialização inteligente do estado (Checa cache ou preferência do sistema)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('silva-vendas-theme');
    if (savedTheme) return savedTheme;
    
    // Se não tiver histórico, respeita a config do sistema do usuário (Windows/Mac/Android)
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Sincroniza o estado do React com o DOM real e o LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('silva-vendas-theme', theme);
  }, [theme]);

  // Função disparada pelo clique do botão
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* Injeta a função de alternância e o estado atual via Props para o Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ minHeight: 'calc(100vh - 160px)' }}> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nos' element={<SobreNos />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/produtos' element={<Produtos />}/>
        </Routes>
      </main> 

      <Footer />
    </>
  )
}

export default App;