import React, { createContext, useState, useContext } from 'react'

export const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}

const CustomProvider = ({children}) => {
  const [totalProductos, setTotalProductos] = useState(0)
  const [carrito, setCarrito] = useState([])

  const addTotalProductos = (cantidad) => {
    setTotalProductos(totalProductos + cantidad)
  }

  const removeTotalProductos = (cantidad) => {
    setTotalProductos(totalProductos - cantidad)
  }
  const eliminarItem = (item) => {
    const newCarrito = carrito.filter( e=> e.nombre !== item.nombre )
    setCarrito(newCarrito)
  }

  const changeCarrito = (item, count) => {
    if( !carrito.some( e=> e.nombre === item.nombre ) ){
      setCarrito([...carrito, item])
    }else{
      carrito.find( e=> e.nombre === item.nombre ).cantidad += count
    }
  }

    const valorDelContexto = {
        carrito : carrito,
        changeCarrito : changeCarrito,
        totalProductos : totalProductos,
        addTotalProductos : addTotalProductos,
        eliminarItem : eliminarItem,
        removeTotalProductos : removeTotalProductos
    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider