import React from 'react'
import { Link } from 'react-router-dom'
import {useCarrito} from './CustomProvider'

const CartWidget = () => {
  const {totalProductos} = useCarrito()

  return (
    <>
    <span className='iconCartNumber'>{totalProductos}</span>
    <Link className="material-icons iconCart-Cart" to={'/cart'} >shopping_cart</Link>
    </>
  )
}

export default CartWidget