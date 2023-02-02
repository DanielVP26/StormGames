import React from "react";
import { Link } from "react-router-dom";
import ButtonAddCart from "./ButtonAddCart";

function Item({ producto, img, name, price, id }) {
  const count = 1;
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={img} alt={name} className="image" />
      </div>
      <h3>{name}</h3>
      <h3 className="cardPrice">
        <b>${price}</b>
      </h3>
      <div className="btnCard">
        <ButtonAddCart item={producto} count={count} />
        <Link to={`/item/${id}`}>Ver más</Link>
      </div>
    </div>
  );
}

export default Item;
