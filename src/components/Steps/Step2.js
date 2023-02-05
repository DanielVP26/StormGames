import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../CustomProvider";

const Step2 = ({ handleNext }) => {
  const { changeValueOfForm } = useCart();

  const addDirection = (event) => {
    event.preventDefault();
    handleNext();
  };

  const handleChange = (e) => {
    changeValueOfForm(e.target.name, e.target.value);
  };

  return (
    <motion.div
      className="checkoutStep2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <form onSubmit={addDirection}>
        <label>Nombre y Apellido:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        ></input>

        <label>Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
          required
        ></input>

        <label>País:</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleChange}
          required
        ></input>

        <label>Ciudad:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          required
        ></input>

        <label>Estado:</label>
        <input
          type="text"
          id="state"
          name="state"
          onChange={handleChange}
          required
        ></input>

        <label>Código postal:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          onChange={handleChange}
          required
        ></input>

        <label>Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          required
        ></input>

        <label>Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          required
        ></input>

        <button type="submit" className="btnSubmit">
          Siguiente
        </button>
      </form>
    </motion.div>
  );
};

export default Step2;
