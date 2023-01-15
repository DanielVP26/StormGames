import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from './List'

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const {categoryId} = useParams()
  useEffect(() => {
    if(props.isAll){
      fetch("/products.json")
      .then(res => res.json())
      .then(data => setData(data.productos) )
    }else{
      fetch("/products.json")
      .then(res => res.json())
      .then(data => setData(data.productos.filter(producto => producto.categoria.includes(categoryId))) )
    }
  }, [props.isAll, categoryId])


  return (
    <div className='main'>
        <div className='mainBanner'>
        <h1>Hola {props.greeting}, un placer verte de vuelta en <b>StorGames </b> <br/> ¿Qué te gustaría llevar hoy? </h1>
        </div>
        <div className='cardContainer'>
            <List productos={data} />
        </div>
    </div>
  )
}

export default ItemListContainer