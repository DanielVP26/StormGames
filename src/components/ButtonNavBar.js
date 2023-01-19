import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonNavBar = ({btnPath, buttonTittle, closeMenu}) => {
  return (
      <NavLink to={btnPath} onClick={closeMenu} >{buttonTittle}</NavLink>
  )
}

export default ButtonNavBar