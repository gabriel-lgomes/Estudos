import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/About"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"

function App() { 

  return (
    <div className='App'>  
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
