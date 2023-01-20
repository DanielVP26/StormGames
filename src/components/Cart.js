import React from 'react'
import {useCarrito} from './CustomProvider'

const Cart = () => {
  const {carrito, eliminarItem, removeTotalProductos} = useCarrito()

  const deleteItem = (item) => {
    eliminarItem(item)
    removeTotalProductos(item.cantidad)
  }
  return (
    <>
    <div className='cart'>
      <div className='cartProductos'>
        <h1 className='cartTittle'>Carrito:</h1>
        <ul>
          {carrito.map((item) => {
            return (
              <li key={item.id} className='cartItem'>
                 <img src={item.img} alt={item.nombre} />
                 <div className='cartItemInfo'>
                  <h3>Nombre: {item.nombre}</h3>
                  <h3>Cantidad: {item.cantidad}</h3>
                  <h3>Precio: ${item.precio}</h3>
                  <p>{item.descripcion}</p>
                  <h4 className='itemDetailInfo_Category'>Generos: {item.categoria.map((cat) => {
                    if(cat === 'MundoAbierto'){
                        return (
                            <span key={cat}>Mundo Abierto</span>
                        )
                      }else if(cat === 'TerceraPersona'){
                        return (
                            <span key={cat}>Tercera Persona</span>
                        )
                      }else{
                        return (
                            <span key={cat}>{cat} </span>
                        )
                      }
                    })
                  }
            </h4>
                 </div>
                 <div className='cartBtnDelete'>
                    <button onClick={()=> deleteItem(item)} className='material-icons'>delete</button>
                 </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Cart