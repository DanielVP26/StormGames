import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <Link className="brandContainer" to="/">
        <img src="/logo.png" alt="" className="headerLogo" />
        <h1 className="neonText">StormGames</h1>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
