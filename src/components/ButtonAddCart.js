import React from 'react'
import {useCarrito} from './CustomProvider'


const ButtonAddCart = ({item, count=1}) => {
    const {addTotalProductos, changeCarrito} = useCarrito()

    item.cantidad = count
    const onAdd = ()=>{
        addTotalProductos(count)
        changeCarrito(item, count)
    }
  return (
    <button onClick={onAdd}  >Agregar al carrito</button>
  )
}

export default ButtonAddCart