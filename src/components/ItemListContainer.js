import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className='main'>
        <div className='mainContainer'>
        <h1>Hola {props.greeting}, un placer verte de vuelta en <b>StorGames </b> <br/> ¿Qué te gustaría llevar hoy? </h1>
        </div>
    </div>
  )
}

export default ItemListContainer