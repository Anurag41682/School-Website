import React from "react";
import Icon from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="text-slate-50 h-[75vh] bg-cyan-950/70 px-20 py-10">
      <div className="flex justify-around">
        <div className="text-center flex-1">
          <h1 className="text-md mb-4">Security and brand</h1>
          <div className="flex  flex-col gap-2">
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Report Security Issue
            </a>
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Trademark Notice
            </a>
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Report Copyright Infringement
            </a>
          </div>
        </div>
        <div className="text-center flex-1">
          <h1 className="text-md mb-4">Website</h1>
          <div className="flex  flex-col gap-2">
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Accessibility
            </a>
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Digital Accessibility
            </a>
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Privacy statement
            </a>
          </div>
        </div>
        <div className="text-center flex-1">
          <h1 className="text-md mb-4">Get in Touch</h1>
          <div className="flex  flex-col gap-2">
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Contact Harvard
            </a>
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Maps & Directions
            </a>
            <a className="text-sm text-slate-400 hover:text-slate-50" href="#">
              Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-0 flex justify-center items-center flex-col">
        <img className="w-40" src={Icon} alt="logo" />
        <p>No Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
