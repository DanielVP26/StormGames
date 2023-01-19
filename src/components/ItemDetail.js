import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

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
              <ItemCount item={item} stock={item.stock} />
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail