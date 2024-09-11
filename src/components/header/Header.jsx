import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./navbar/Navbar"
import "./header.scss"

const Header = () => {
 

  return (
    <div className="">
      <header className="header">
        <div className="contenedor">
     <img src="/assets/file.jpg" alt="logo" className="logo" />
     </div>

        <div className="flex items-center justify-center lg:space-x-4">

          <div className="div-home">
            <Navbar  />
          </div>
        </div>
      </header>
      <div className="header-div">
        <div className="w-[95%] border-b-2 border-blue"></div>
      </div>
      <div className="fixed bottom-2 w-full h-14 flex justify-center items-center z-[9999] pointer-events-auto lg:hidden right-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
