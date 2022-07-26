import React from "react";
import abacus from "../img/abacus.svg";

function Header() {
  return (
    <header className="flex items-center justify-center space-x-4 pt-7 pb-7 pl-5 pr-5">
      <img src={abacus} alt="Abacus" className="inline" />
      <h1 className="text-purple font-light text-2xl">
        Super dynamic-rebellious abacus
      </h1>
    </header>
  );
}

export default Header;
