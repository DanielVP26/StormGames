import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "./List";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    let filtro = query(productosCollection);
    if (categoryId) {
      filtro = query(
        productosCollection,
        where("categoria", "array-contains", categoryId)
      );
    }
    const getProducts = getDocs(filtro);
    getProducts
      .then((response) => {
        const productos = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        productos.sort((a, b) => {
          return a.nombre.localeCompare(b.nombre);
        });
        setData(productos);
      })
      .catch(() => {
        toast("No se pudieron cargar los productos");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="cartProductos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mainBanner">
        <h1>
          Hola {props.greeting}, un placer verte de vuelta en <b>StorGames </b>{" "}
          <br /> ¿Qué te gustaría llevar hoy?{" "}
        </h1>
      </div>
      <div className="cardContainer">
        <List productos={data} />
      </div>
    </motion.div>
  );
};

export default ItemListContainer;
