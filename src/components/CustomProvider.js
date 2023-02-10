import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { toast, Slide } from "react-toastify";

export const context = createContext();
const Provider = context.Provider;

export const useCart = () => {
  const contextValue = useContext(context);
  return contextValue;
};

const CustomProvider = ({ children }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({});

  let cartString = localStorage.getItem("cart");
  let cartParseado = JSON.parse(cartString);
  let totalProductsString = localStorage.getItem("totalProducts");
  let totalProductsParse = JSON.parse(totalProductsString);

  useEffect(() => {
    if (cartParseado) {
      setCart(cartParseado);
    }
    if (totalProductsParse) {
      setTotalProducts(totalProductsParse);
    } else {
      setTotalProducts(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let cartString = JSON.stringify(cart);
    let totalProductsString = JSON.stringify(totalProducts);
    localStorage.setItem("totalProducts", totalProductsString);
    localStorage.setItem("cart", cartString);
  }, [cart, totalProducts]);

  useEffect(() => {
    formData.cart = cart;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const addTotalProducts = (cantidad) => {
    setTotalProducts(totalProducts + cantidad);
  };

  const changeValueOfForm = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const removeTotalProducts = (cantidad) => {
    setTotalProducts(totalProducts - cantidad);
  };
  const deleteItem = (item) => {
    const newCart = cart.filter((e) => e.nombre !== item.nombre);
    setCart(newCart);
  };

  const emptyCart = () => {
    setCart([]);
    setTotalProducts(0);
    toast("Se vació el carrito", {
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

  const changeCart = (item, count) => {
    if (!cart.some((e) => e.nombre === item.nombre)) {
      item.cantidad = count;
      setCart([...cart, item]);
    } else {
      cart.find((e) => e.nombre === item.nombre).cantidad += count;
    }
  };

  const contextValue = {
    cart,
    changeCart,
    totalProducts,
    addTotalProducts,
    deleteItem,
    removeTotalProducts,
    emptyCart,
    formData,
    changeValueOfForm,
    setFormData,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
