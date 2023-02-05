import React from "react";
import ItemListContainer from "./ItemListContainer";
import { Route, Routes, useLocation } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import { AnimatePresence } from "framer-motion";
import Checkout from "./Checkout";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
