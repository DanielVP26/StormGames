import React from "react";
import ItemCount from "./ItemCount";
import { motion } from "framer-motion";

const ItemDetail = ({ item }) => {
  if (!item) {
    return <h1>Cargando...</h1>;
  }
  return (
    <motion.div
      className="itemDetail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <div className="itemDetailImg">
          <img src={item.img} alt={item.nombre} />
        </div>
        <div className="itemDetailInfo">
          <h1 className="itemDetailInfo_Name">{item.nombre}</h1>
          <p className="itemDetailInfo_Desc">{item.descripcion}</p>
          <h1 className="itemDetailInfo_Price">${item.precio}</h1>
          <h4 className="itemDetailInfo_Category">
            Géneros:{" "}
            {item.categoria.map((cat) => {
              if (cat === "MundoAbierto") {
                return <span key={cat}>Mundo Abierto</span>;
              } else if (cat === "TerceraPersona") {
                return <span key={cat}>Tercer Persona</span>;
              } else {
                return <span key={cat}>{cat} </span>;
              }
            })}
          </h4>
          <div className="itemDetailInfo_Button">
            <ItemCount item={item} stock={item.stock} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemDetail;
