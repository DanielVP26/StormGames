import React from "react";
import { Link } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useCart } from "./CustomProvider";

const CartWidget = () => {
  const { totalProducts } = useCart();

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          classNames="countChange"
          key={totalProducts}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <span className="iconCartNumber">{totalProducts}</span>
        </CSSTransition>
      </SwitchTransition>
      <Link className="material-icons iconCart-Cart" to={"/cart"}>
        shopping_cart
      </Link>
    </>
  );
};

export default CartWidget;
