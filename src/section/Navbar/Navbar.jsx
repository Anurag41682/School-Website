import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "../../assets/menuIcon.png";
import data from "./data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex z-10 p-4 bg-cyan-950/70 backdrop-blur fixed top-0 right-0 left-0 border-b border-slate-400 shadow-2xl">
      <button className="md:hidden text-slate-100" onClick={toggleMenu}>
        <img className="h-6" src={MenuIcon} alt="menu-icon"></img>
      </button>

      <div className="hidden md:flex gap-4 justify-center w-full">
        {data.map((item) => (
          <NavLink
            className="text-slate-100 hover:text-blue-300"
            to={item.route}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-cyan-950/95  p-4">
          {data.map((item) => (
            <NavLink
              className="block text-slate-100 hover:text-blue-300 "
              to={item.route}
              onClick={toggleMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
