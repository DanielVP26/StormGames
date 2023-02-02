import React, { useState } from "react";
import ButtonAddCart from "./ButtonAddCart";

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1);

  function addCount() {
    setCount(count + 1);
  }

  function removeCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className="controlsCount">
        <span className="material-icons buyControl" onClick={removeCount}>
          remove
        </span>
        <span className="buyCount">{count}</span>
        <span className="material-icons buyControl" onClick={addCount}>
          add
        </span>
      </div>
      <ButtonAddCart item={item} count={count} />
    </>
  );
};

export default ItemCount;
