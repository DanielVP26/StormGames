import React from "react";
import { Link } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
  const { totalProductos } = useCarrito();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          classNames="countChange"
          key={totalProductos}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <span className="iconCartNumber">{totalProductos}</span>
        </CSSTransition>
      </SwitchTransition>
      <Link className="material-icons iconCart-Cart" to={"/cart"}>
        shopping_cart
      </Link>
    </>
  );
};

export default CartWidget;
