import React from "react";
import { useCart } from "../CustomProvider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Step1 = () => {
  const { cart } = useCart();

  return (
    <motion.div
      className="checkoutStep1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {cart.map((item) => {
        return (
          <div className="checkoutItemContainer" key={item.nombre}>
            <div className="checkoutItem" key={item.nombre}>
              <div className="checkoutItem__img">
                <img src={item.img} alt={item.nombre} />
              </div>
              <div className="checkoutItem__info">
                <h2>{item.nombre}</h2>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: {item.precio}</p>
              </div>
            </div>
            <div className="editInTheCart">
              <Link to="/cart">Editar en carrito</Link>
            </div>
          </div>
        );
      })}
      <h1 className="cartTotalText">
        Total: $
        {cart
          .map((item) => item.cantidad * item.precio)
          .reduce((a, b) => a + b, 0)}
      </h1>
    </motion.div>
  );
};

export default Step1;
