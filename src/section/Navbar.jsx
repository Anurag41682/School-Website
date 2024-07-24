import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex z-10 gap-4 p-4 bg-cyan-950/70 backdrop-blur justify-center fixed top-0 right-0 left-0 border-b border-slate-400 shadow-2xl ">
      <Link className="text-slate-100 hover:text-blue-300" to={"/"}>
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
    </nav>
  );
};

export default Navbar;
