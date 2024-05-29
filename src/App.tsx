import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen'>
        <NavBar />
        <div className='grow'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
