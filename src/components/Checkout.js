import React, { useState } from "react";
import { motion } from "framer-motion";
import Stepper from "react-stepper-horizontal";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

const steps = [
  { title: "Revisión" },
  { title: "Dirección" },
  { title: "Pago" },
];
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <motion.div
      className="checkoutContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="checkout">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          activeTitleColor="#fff"
          completeTitleColor="E0E0E0"
          completeColor="#3E065F"
          activeColor="#3E065F"
          defaultTitleColor="#fff"
          completeBarColor="#3E065F"
          defaultColor="#5e5d5d"
          circleFontColor="#fff"
        />
        {activeStep === 0 && <Step1 />}
        {activeStep === 1 && <Step2 handleNext={handleNext} />}
        {activeStep === 2 && <Step3 />}
        {activeStep === 0 ? (
          <div className="buttonCheckoutContainer">
            <button className="material-icons btnCheckout" onClick={handleNext}>
              navigate_next
            </button>
          </div>
        ) : (
          <div className="buttonCheckoutContainer">
            <button
              className="material-icons btnCheckout"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              chevron_left
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Checkout;
