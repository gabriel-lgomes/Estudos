import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

// 2 - links com router dom

function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">Sobre</Link>
    // </nav>

    // 6 - Navlink 
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>

  )
}

export default Navbar