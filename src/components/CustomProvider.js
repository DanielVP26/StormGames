import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { toast, Slide } from "react-toastify";

export const contexto = createContext();
const Provider = contexto.Provider;

export const useCarrito = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

const CustomProvider = ({ children }) => {
  const [totalProductos, setTotalProductos] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [datosDelForm, setDatosDelForm] = useState({
    name: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    cardName: "",
    date: "",
    carrito: [],
  });

  let carritoString = localStorage.getItem("carrito");
  let carritoParseado = JSON.parse(carritoString);
  let totalProductosString = localStorage.getItem("totalProductos");
  let totalProductosParseado = JSON.parse(totalProductosString);

  useEffect(() => {
    if (carritoParseado) {
      setCarrito(carritoParseado);
    }
    if (totalProductosParseado) {
      setTotalProductos(totalProductosParseado);
    } else {
      setTotalProductos(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let carritoString = JSON.stringify(carrito);
    let totalProductosString = JSON.stringify(totalProductos);
    localStorage.setItem("totalProductos", totalProductosString);
    localStorage.setItem("carrito", carritoString);
  }, [carrito, totalProductos]);

  useEffect(() => {
    datosDelForm.carrito = carrito;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carrito]);

  const addTotalProductos = (cantidad) => {
    setTotalProductos(totalProductos + cantidad);
  };

  const changeValueDelForm = (name, value) => {
    setDatosDelForm({
      ...datosDelForm,
      [name]: value,
    });
  };

  const removeTotalProductos = (cantidad) => {
    setTotalProductos(totalProductos - cantidad);
  };
  const eliminarItem = (item) => {
    const newCarrito = carrito.filter((e) => e.nombre !== item.nombre);
    setCarrito(newCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotalProductos(0);
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

  const changeCarrito = (item, count) => {
    if (!carrito.some((e) => e.nombre === item.nombre)) {
      item.cantidad = count;
      setCarrito([...carrito, item]);
    } else {
      carrito.find((e) => e.nombre === item.nombre).cantidad += count;
    }
  };

  const valorDelContexto = {
    carrito,
    changeCarrito,
    totalProductos,
    addTotalProductos,
    eliminarItem,
    removeTotalProductos,
    vaciarCarrito,
    datosDelForm,
    changeValueDelForm,
    setDatosDelForm,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
