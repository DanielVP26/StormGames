import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
    <header className='header'>
      <div className='brandContainer'>
      <img src="/logo.png" alt="" className='headerLogo'/>
        <h1 className='neonText'>StormGames</h1>
      </div>
        <NavBar/>
    </header>
    </>
  )
}

export default Header