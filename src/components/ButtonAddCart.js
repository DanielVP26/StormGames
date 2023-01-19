import React from 'react'
import {useCarrito} from './CustomProvider'


const ButtonAddCart = ({item, count=1}) => {
    const {changeTotalProductos, changeCarrito} = useCarrito()

    item.cantidad = count
    const onAdd = ()=>{
        changeTotalProductos(count)
        changeCarrito(item, count)
    }
  return (
    <button onClick={onAdd}  >Agregar al carrito</button>
  )
}

export default ButtonAddCart