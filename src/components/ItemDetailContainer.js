import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const productsCollection = collection(db, "productos");
    const reference = doc(productsCollection, itemId);
    const getProducts = getDoc(reference);
    getProducts
      .then((response) => {
        const productos = response.data();
        setItem(productos);
      })
      .catch(() => {
        toast.error("No se pudo cargar el producto");
      });
  }, [itemId]);
  if (!item) return <Loader />;
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
