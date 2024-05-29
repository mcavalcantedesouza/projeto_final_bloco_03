import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import ListarCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen'>
        <NavBar />
        <div className='grow'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<ListarCategorias />} />
            <Route path='/cadastrarcategoria' element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
