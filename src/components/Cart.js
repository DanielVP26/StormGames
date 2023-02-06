import { React, useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useCart } from "./CustomProvider";
import { motion } from "framer-motion";
import { toast, Slide } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteItem, removeTotalProducts, emptyCart } = useCart();
  const [cartBtnDelete, setCartBtnDelete] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setCartBtnDelete(false);
    } else {
      setCartBtnDelete(true);
    }
  }, [cart]);

  const deleteItemFromCart = (item) => {
    deleteItem(item);
    removeTotalProducts(item.cantidad);
    toast.dismiss();
    toast(`Se eliminaron ${item.cantidad} ${item.nombre} del carrito`, {
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

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1 className="cartTittle">No hay productos en el carrito</h1>
      </div>
    );
  }

  return (
    <div className="cart">
      <motion.div
        className="cartProductos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ul>
          {cart.map((item) => {
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
                    className="cartItem"
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 30,
                    }}
                  >
                    <div className="cartItemDesc">
                      <img src={item.img} alt={item.nombre} />
                      <div className="cartItemInfo">
                        <h3>{item.nombre}</h3>
                        <h3>Cantidad: {item.cantidad}</h3>
                        <h3>Precio: ${item.precio * item.cantidad}</h3>
                        <p>{item.descripcion}</p>
                        <h4 className="itemDetailInfo_Category">
                          Géneros:{" "}
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
                    </div>
                    <div className="cartBtnDelete">
                      <button
                        onClick={() => deleteItemFromCart(item)}
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
            <button className="cartBtnDeleteAll" onClick={emptyCart}>
              {" "}
              Vaciar Carrito
            </button>
            <h1 className="cartTotalText">
              Total: $
              {cart
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
  );
};

export default Cart;
