import React from "react";
import { useCart } from "./CustomProvider";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonAddCart = ({ item, count = 1 }) => {
  const { addTotalProducts, changeCart } = useCart();

  const onAdd = () => {
    addTotalProducts(count);
    changeCart(item, count);
    const verb = count > 1 ? "agregaron" : "agregó";
    toast(`Se ${verb} ${count} ${item.nombre} al carrito`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      closeOnClick: true,
      icon: "🎮",
      hideProgressBar: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      transition: Slide,
      role: "status",
      theme: "dark",
    });
  };
  return <button onClick={onAdd}>Agregar al carrito</button>;
};

export default ButtonAddCart;
