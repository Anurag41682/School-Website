import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-4 bg-slate-500 justify-center fixed top-0 right-0 left-0">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/academics"}>Academics</Link>
      <Link to={"/admissions"}>Admissions</Link>
      <Link to={"/faculty"}>Faculty</Link>
      <Link to={"/gallery"}>Gallery</Link>
      <Link to={"/students"}>Students</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
  );
};

export default Navbar;
