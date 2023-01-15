import React, { useState } from 'react'

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(1)

  function addCount(){
    setCount(count + 1)
  }
  function removeCount(){
    if(count > 1){
      setCount(count - 1)
    }
  }

  if(!item){
    return <h1>Cargando...</h1>
  }
  return (
    <>
    <div className='itemDetail'>
      <div>
          <div className='itemDetailImg'>
              <img src={item.img} alt={item.nombre} />
          </div>
          <div className='itemDetailInfo'>
            <h1 className='itemDetailInfo_Name'>
                {item.nombre}
            </h1>
            <p className='itemDetailInfo_Desc'>
                {item.descripcion}
            </p>
            <h1 className='itemDetailInfo_Price'>
              ${item.precio}
            </h1>
            <h4 className='itemDetailInfo_Category'>
                Generos: {item.categoria.map((cat) => {
                    return (
                        <span key={cat}>{cat} </span>
                    )
                })
                }
            </h4>
            <div className='itemDetailInfo_Button'>
              <div>
                <span className="material-icons buyControl" onClick={removeCount}>remove</span>
                <span className='buyCount'>{count}</span>
                <span className="material-icons buyControl" onClick={addCount}>add</span>
              </div>
                <button>Agregar al carrito</button>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail