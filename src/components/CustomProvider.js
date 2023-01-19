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

  const changeTotalProductos = (cantidad) => {
    setTotalProductos(totalProductos + cantidad)
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
        changeTotalProductos : changeTotalProductos
    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider