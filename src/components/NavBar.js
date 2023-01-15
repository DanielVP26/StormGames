import React from 'react'
import CartWidget from './CartWidget'
import ButtonNavBar from './ButtonNavBar'

const NavBar = () => {
  return (
    <div className='navBar'>
          <ul>
            <ButtonNavBar buttonTittle="Accion" btnPath="/categoria/Accion" />
            <ButtonNavBar buttonTittle="Aventura" btnPath="/categoria/Aventura" />
            <ButtonNavBar buttonTittle="FPS" btnPath="/categoria/FPS" />
            <ButtonNavBar buttonTittle="Shooter" btnPath="/categoria/Shooter" />
            <ButtonNavBar buttonTittle="Rol" btnPath="/categoria/Rol" />
            <ButtonNavBar buttonTittle="Tercera persona" btnPath="/categoria/TerceraPersona" />
            <ButtonNavBar buttonTittle="Mundo abierto" btnPath="/categoria/MundoAbierto" />
          </ul>
        <div className='iconCart'>
          <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar