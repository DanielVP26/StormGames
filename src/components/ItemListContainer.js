import React from 'react'

const ItemListContainer = (props) => {



  return (
    <div className='main'>
        <div className='mainBanner'>
        <h1>Hola {props.greeting}, un placer verte de vuelta en <b>StorGames </b> <br/> ¿Qué te gustaría llevar hoy? </h1>
        </div>
        <div className='cardContainer'>
          <div className='card'>
            <img src="https://i.pinimg.com/originals/d4/13/28/d4132829ec446b9b849d21c4f1a62f13.jpg" alt=""/>
            <h3>Assasin's Creed Unity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <h3 className='cardPrice'><b>$1000</b></h3>
            <button>Agregar al carrito</button>
          </div>
          <div className='card'>
            <img src="https://media.vandal.net/m/20029/cyberpunk-2077-201961217172698_1.jpg" alt=""/>
            <h3>Cyberpunk 2077</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <h3 className='cardPrice'><b>$1000</b></h3>
            <button>Agregar al carrito</button>
          </div>
          <div className='card'>
            <img src="https://www.zurpusiangames.com/img/red_dead_redemption_II.jpg" alt=""/>
            <h3>Red Dead Redemption</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <h3 className='cardPrice'><b>$1000</b></h3>
            <button>Agregar al carrito</button>
          </div>
          <div className='card'>
            <img src="https://cdn-prod.scalefast.com/public/assets/user/122595/image/fdadc3a24ebe6227423924e2c86ba174.jpg" alt=""/>
            <h3>Elden Ring</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <h3 className='cardPrice'><b>$1000</b></h3>
            <button>Agregar al carrito</button>
          </div>
          <div className='card'>
            <img src="https://as01.epimg.net/meristation/imagenes/2018/07/01/game_cover/1530466372_466372_023589_gameplatform.jpg" alt=""/>
            <h3>Escape from Tarkov</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <h3 className='cardPrice'><b>$1000</b></h3>
            <button>Agregar al carrito</button>
          </div>
        </div>
    </div>
  )
}

export default ItemListContainer