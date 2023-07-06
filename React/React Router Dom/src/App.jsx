import './App.css'

// 1 - Configurando Router dom
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import SearchForm from './components/SearchForm'


function App() { 

  return (
    <>
      <h1>React Router DOM</h1>
      <BrowserRouter>
        {/* 2- links com router dom  */}
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          {/* 3 - Rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 4 - Nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 7 - Search params */}
          <Route path='/search' element={<Search/>} />
          {/* 8 - Redirect route */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 5 - No match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
