import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
    <span className='iconCartNumber'>1</span>
    <Link className="material-icons iconCart-Cart" to={'/cart'} >shopping_cart</Link>
    </>
  )
}

export default CartWidget