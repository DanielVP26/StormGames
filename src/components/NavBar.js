import React from 'react'
import CartWidget from './CartWidget'
import ButtonNavBar from './ButtonNavBar'

const NavBar = () => {
  return (
    <div className='navBar'>
          <ul>
            <ButtonNavBar buttonTittle="Inicio" />
            <ButtonNavBar buttonTittle="Nosotros" />
            <ButtonNavBar buttonTittle="Contacto" />
          </ul>
        <div className='iconCart'>
          <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar