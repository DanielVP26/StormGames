import React, { useState } from "react";
import CartWidget from "./CartWidget";
import ButtonNavBar from "./ButtonNavBar";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="navBar">
      <div className="navBarMobile ">
        <button className="material-icons btnOpenMenu" onClick={openMenu}>
          menu
        </button>
      </div>
      <ul className={`aside ${menu ? "asideActive" : ""}`}>
        <button className="material-icons btnCloseMenu" onClick={closeMenu}>
          close
        </button>
        <ButtonNavBar
          buttonTittle="Acción"
          btnPath="/categoria/Acción"
          closeMenu={closeMenu}
        />
        <ButtonNavBar
          buttonTittle="Aventura"
          btnPath="/categoria/Aventura"
          closeMenu={closeMenu}
        />
        <ButtonNavBar
          buttonTittle="FPS"
          btnPath="/categoria/FPS"
          closeMenu={closeMenu}
        />
        <ButtonNavBar
          buttonTittle="Shooter"
          btnPath="/categoria/Shooter"
          closeMenu={closeMenu}
        />
        <ButtonNavBar
          buttonTittle="Rol"
          btnPath="/categoria/Rol"
          closeMenu={closeMenu}
        />
        <ButtonNavBar
          buttonTittle="Tercera persona"
          btnPath="/categoria/TerceraPersona"
          closeMenu={closeMenu}
        />
        <ButtonNavBar
          buttonTittle="Mundo abierto"
          btnPath="/categoria/MundoAbierto"
          closeMenu={closeMenu}
        />
      </ul>
      <div className="iconCart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
