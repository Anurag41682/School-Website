import React from "react";
import Icon from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="text-slate-50 bg-cyan-950/70 px-20 py-10 max-md:px-5">
      <div className="flex justify-around max-md:flex-col max-md:gap-10">
        <div className="text-center flex-1">
          <h1 className="text-md mb-4 max-md:text-xs">Security and brand</h1>
          <div className="flex  flex-col gap-2">
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Report Security Issue
            </a>
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Trademark Notice
            </a>
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Report Copyright Infringement
            </a>
          </div>
        </div>
        <div className="text-center flex-1">
          <h1 className="text-md mb-4 max-md:text-xs">Website</h1>
          <div className="flex  flex-col gap-2">
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Accessibility
            </a>
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Digital Accessibility
            </a>
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Privacy statement
            </a>
          </div>
        </div>
        <div className="text-center flex-1">
          <h1 className="text-md max-md:text-xs mb-4">Get in Touch</h1>
          <div className="flex  flex-col gap-2">
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Contact Harvard
            </a>
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Maps & Directions
            </a>
            <a
              className="text-sm max-md:text-xs text-slate-400 hover:text-slate-50"
              href="#"
            >
              Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-0 flex justify-center items-center flex-col">
        <img className="w-40 " src={Icon} alt="logo" />
        <p className="max-md:text-xs">No Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
