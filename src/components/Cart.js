import { React, useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useCarrito } from "./CustomProvider";
import { motion } from "framer-motion";
import { toast, Slide } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, eliminarItem, removeTotalProductos, vaciarCarrito } =
    useCarrito();
  const [cartBtnDelete, setCartBtnDelete] = useState(false);

  useEffect(() => {
    if (carrito.length === 0) {
      setCartBtnDelete(false);
    } else {
      setCartBtnDelete(true);
    }
  }, [carrito]);

  const deleteItem = (item) => {
    eliminarItem(item);
    removeTotalProductos(item.cantidad);
    toast.dismiss();
    toast(`Se elimnaron ${item.cantidad} ${item.nombre} del carrito`, {
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

  if (carrito.length === 0) {
    return (
      <div className="cart">
        <h1 className="cartTittle">No hay productos en el carrito</h1>
      </div>
    );
  }

  return (
    <>
      <div className="cart">
        <motion.div
          className="cartProductos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ul>
            {carrito.map((item) => {
              return (
                <SwitchTransition key={item.id}>
                  <CSSTransition
                    key={item.id}
                    classNames="deleteItemCart"
                    addEndListener={(node, done) =>
                      node.addEventListener("transitionend", done, false)
                    }
                  >
                    <motion.li
                      key={item.id}
                      className="cartItem"
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 30,
                      }}
                    >
                      <img src={item.img} alt={item.nombre} />
                      <div className="cartItemInfo">
                        <h3>Nombre: {item.nombre}</h3>
                        <h3>Cantidad: {item.cantidad}</h3>
                        <h3>Precio: ${item.precio * item.cantidad}</h3>
                        <p>{item.descripcion}</p>
                        <h4 className="itemDetailInfo_Category">
                          Generos:{" "}
                          {item.categoria.map((cat) => {
                            if (cat === "MundoAbierto") {
                              return <span key={cat}>Mundo Abierto </span>;
                            } else if (cat === "TerceraPersona") {
                              return <span key={cat}>Tercera Persona </span>;
                            } else {
                              return <span key={cat}>{cat} </span>;
                            }
                          })}
                        </h4>
                      </div>
                      <div className="cartBtnDelete">
                        <button
                          onClick={() => deleteItem(item)}
                          className="material-icons"
                        >
                          delete
                        </button>
                      </div>
                    </motion.li>
                  </CSSTransition>
                </SwitchTransition>
              );
            })}
          </ul>
          {cartBtnDelete ? (
            <>
              <button className="cartBtnDeleteAll" onClick={vaciarCarrito}>
                {" "}
                Vaciar Carrito
              </button>
              <h1 className="cartTotalText">
                Total:{" "}
                {carrito
                  .map((item) => item.cantidad * item.precio)
                  .reduce((a, b) => a + b, 0)}
              </h1>
              <Link to={"/checkout"} className="cartBtnComprar">
                Comprar
              </Link>
            </>
          ) : null}
        </motion.div>
      </div>
    </>
  );
};

export default Cart;
