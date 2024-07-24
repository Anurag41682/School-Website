import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "../assets/menuIcon.png";
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
        <Link className="text-slate-100 hover:text-blue-300" to="/">
          Home
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/about"}>
          About
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/academics"}>
          Academics
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/admissions"}>
          Admissions
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/faculty"}>
          Faculty
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/gallery"}>
          Gallery
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/students"}>
          Students
        </Link>
        <Link className="text-slate-100 hover:text-blue-300" to={"/contact"}>
          Contact
        </Link>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-cyan-950/90 p-4">
          <Link
            className="block text-slate-100 hover:text-blue-300 "
            to="/"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/about"}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/academics"}
            onClick={toggleMenu}
          >
            Academics
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/admissions"}
            onClick={toggleMenu}
          >
            Admissions
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/faculty"}
            onClick={toggleMenu}
          >
            Faculty
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/gallery"}
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/students"}
            onClick={toggleMenu}
          >
            Students
          </Link>
          <Link
            className="block text-slate-100 hover:text-blue-300"
            to={"/contact"}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
