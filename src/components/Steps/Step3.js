import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useCarrito } from "../CustomProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Step3 = () => {
  const { changeValueDelForm, datosDelForm } = useCarrito();

  const addDateToForm = () => {
    const fecha = serverTimestamp();
    datosDelForm.date = fecha;
  };

  const handleChange = (e) => {
    changeValueDelForm(e.target.name, e.target.value);
  };
  const confirmPurchase = (event) => {
    event.preventDefault();
    addDateToForm();
    const purchaseCollection = collection(db, "purchases");
    const purchase = datosDelForm;
    addDoc(purchaseCollection, purchase)
      .then((docRef) => {
        toast.success("Compra realizada con éxito " + docRef.id);
      })
      .catch((error) => {
        toast.error("Error al realizar la compra");
      });
  };

  return (
    <motion.div
      className="checkoutStep3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <form onSubmit={confirmPurchase}>
        <label>Nombre en la tarjeta:</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          onChange={handleChange}
          required
        ></input>

        <label>Número de tarjeta:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          onChange={handleChange}
          required
        ></input>

        <label>Fecha de vencimiento:</label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          placeholder="MM/YY"
          onChange={handleChange}
          required
        ></input>

        <label>CVC:</label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          onChange={handleChange}
          required
        ></input>

        <button type="submit" className="btnSubmit">
          Finalizar compra
        </button>
      </form>
    </motion.div>
  );
};

export default Step3;
