import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'

function App() {
   useState(0)

  return (
    <>
    <main> 
      <Router>
        <Header />
  
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nos' element={<SobreNos />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/produtos' element={<Produtos />}/>
        </Routes>

      </Router>
   </main> 

   <Footer />
    </>
  )
}

export default App
