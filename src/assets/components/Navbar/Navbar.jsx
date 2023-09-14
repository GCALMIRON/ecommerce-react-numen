import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
  <div>
    <div className='nav-1'>
        <ul className='list-items'>
          <li><a href="">REGISTRARSE</a></li>
          <li><a href="">INGRESAR</a></li>
          <li><a href="">ENVIOS</a></li>
          <li><a href="">MI CUENTA</a></li>
          <li><a href=""><img src='./src/assets/components/Navbar/cart.png' alt='carrito de compras' className='cart' /></a></li>
        </ul>
    </div>
    <div className='nav-2'>
    <div className='logo'>
      <h1>ELECTRONICS</h1>
      <h2 className='subtittle'>ONLINE STORE</h2>
    </div>
        <ul className='list-items2'>
          <li><a href="" className='links'>INICIO</a></li>
          <li><a href="" className='links'>COMPRAR</a></li>
          <li><a href="" className='links'>CONTACTO</a></li>
          <li><a href="" className='links'>NOSOTROS</a></li>
        </ul>
      <div className='search-nav'>
        <input type="text" placeholder='Buscar...'  />
        <button className='search' ></button>
      </div>
    </div>
  </div>
  )
}

export default Navbar
