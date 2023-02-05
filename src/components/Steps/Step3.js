import React from "react";
import { motion } from "framer-motion";
import { Slide, toast } from "react-toastify";
import { useCart } from "../CustomProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";

const Step3 = () => {
  const { changeValueOfForm, formData, emptyCart } = useCart();

  const navigate = useNavigate();
  const addDateToForm = () => {
    const fecha = serverTimestamp();
    formData.date = fecha;
  };

  const handleChange = (e) => {
    changeValueOfForm(e.target.name, e.target.value);
  };
  Confirm.init({
    backgroundColor: "#1c1b1c",
    titleColor: "#fff",
    messageColor: "#fff",
    okButtonBackground: "#5e0e8d",
    okButtonColor: "#fff",
    cancelButtonBackground: "#fff",
    cancelButtonColor: "#000",
    titleMaxLength: 100,
  });
  const confirmPurchase = (event) => {
    event.preventDefault();
    Confirm.show(
      "¿Está seguro que desea realizar la compra?",
      "Si confirma, no podrá deshacer la acción",
      "Confirmar",
      "Cancelar",
      () => {
        addDateToForm();
        const purchaseCollection = collection(db, "purchases");
        const purchase = formData;
        addDoc(purchaseCollection, purchase)
          .then((docRef) => {
            emptyCart();
            toast.dismiss();
            navigate("/");
            toast.success(
              "Compra realizada con éxito, su ID de compra es: " + docRef.id,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: false,
                closeOnClick: false,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                transition: Slide,
                role: "status",
                theme: "dark",
              }
            );
            emptyCart();
          })
          .catch(() => {
            toast.error("Error al realizar la compra");
          });
      },
      () => {}
    );
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
