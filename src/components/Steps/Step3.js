import React from "react";
import { motion } from "framer-motion";
import { Slide, toast } from "react-toastify";
import { useCarrito } from "../CustomProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const { changeValueDelForm, datosDelForm, vaciarCarrito } = useCarrito();

  const navigate = useNavigate();
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
        vaciarCarrito();
        toast.dismiss();
        navigate("/");
        toast.success(
          "Compra realizada con éxito, su ID de compra es: " + docRef.id,
          {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: false,
            closeOnClick: true,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            transition: Slide,
            role: "status",
            theme: "dark",
          }
        );
        vaciarCarrito();
      })
      .catch(() => {
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
