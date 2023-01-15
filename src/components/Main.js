import React from 'react'
import ItemListContainer from "./ItemListContainer";
import {Route, Routes} from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Daniel" isAll={true} />}/>
            <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Daniel" isAll={false} />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </main>
  )
}

export default Main