import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "./List";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "productos");
    let filtro;
    if (categoryId) {
      filtro = query(
        productsCollection,
        where("categoria", "array-contains", categoryId),
        orderBy("nombre")
      );
    } else {
      filtro = query(productsCollection, orderBy("nombre"));
    }
    const getProducts = getDocs(filtro);
    getProducts
      .then((response) => {
        const products = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(products);
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
          Hola, un placer verte en <b>StorGames </b> <br /> ¿Qué te gustaría
          llevar hoy?{" "}
        </h1>
      </div>
      {data.length === 0 && <Loader />}
      <div className="cardContainer">
        <List productos={data} />
      </div>
    </motion.div>
  );
};

export default ItemListContainer;
