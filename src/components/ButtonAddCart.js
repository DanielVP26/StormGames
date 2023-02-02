import React from "react";
import { useCarrito } from "./CustomProvider";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonAddCart = ({ item, count = 1 }) => {
  const { addTotalProductos, changeCarrito } = useCarrito();

  const onAdd = () => {
    addTotalProductos(count);
    changeCarrito(item, count);
    toast(`Se agregaron ${count} ${item.nombre} al carrito`, {
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
  return (
    <>
      <button onClick={onAdd}>Agregar al carrito</button>
    </>
  );
};

export default ButtonAddCart;
