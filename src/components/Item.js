import React from 'react'
import {Link} from 'react-router-dom'

function Item(props) {

  return (
    <div className='card'>
      <div className='imageContainer' >
        <img src={props.img} alt={props.name} className='image' />
        <div className='textImgContainer'>
        <span className="material-icons textImgOverlay">favorite</span>
        </div>
      </div>
        <h3>{props.name}</h3>
        <h3 className='cardPrice'><b>${props.price}</b></h3>
        <div className='btnCard'>
          <button>Agregar al carrito</button>
          <Link to={`/item/${props.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item