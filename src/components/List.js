import React from "react";
import Item from "./Item";

const List = (props) => {
  return props.productos.map((producto) => {
    return (
      <Item
        producto={producto}
        img={producto.img}
        name={producto.nombre}
        price={producto.precio}
        id={producto.id}
        key={producto.id}
      />
    );
  });
};
export default List;
