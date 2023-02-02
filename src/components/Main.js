import React from "react";
import { ToastContainer } from "react-toastify";

import AnimatedRoutes from "./AnimatedRoutes";

const Main = () => {
  return (
    <main>
      <AnimatedRoutes />
      <ToastContainer />
    </main>
  );
};

export default Main;
