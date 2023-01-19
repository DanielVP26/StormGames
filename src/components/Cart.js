import React from 'react'
import {useContext} from 'react'
import {contexto} from './CustomProvider'

const Cart = () => {
  const {carrito} = useContext(contexto)
  console.log(carrito)
  return (
    <div>
      <h1 className='cartTittle'>Carrito</h1>
      <ul>
        {carrito.map((item) => {
          return (
            <li key={item.id} className='cartTittle'>
              <h3>Nombre: {item.nombre}</h3>
              <h3>Cantidad: {item.cantidad}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cart