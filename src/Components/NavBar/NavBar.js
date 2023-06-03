import React from "react";
import './NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';
const NavBar = () => {
  return (
    <nav className="Barra" >
        <ul className="nav-menu">
            <li>
              <a href="https://www.google.com">Inicio</a>
              </li>
            <li><a href="https://www.google.com">Quiénes Somos</a>
              </li>
            <li><a href="https://www.google.com">Dónde Encontrarnos</a>
              </li>
              <li>
              <a href="https://www.google.com">Nuestra Historia</a>
              </li>
              <li>
              <a href="https://www.google.com">Nuestros Productos</a>
              </li>
              <li>
              <a href="https://www.google.com">Contactanos</a>
              </li>
            <li className="cart-icon">
          <a href="/cart">
            <FaShoppingCart/>
            <span className="cart-count">1</span>
          </a>
        </li>
        </ul>
    </nav>
  )
}

export default NavBar