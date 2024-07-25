import React from "react";
import AdmissionCard from "@/components/AdmissionCard";
import data from "./data";
const Admissions = () => {
  return (
    <section className="flex gap-7 px-20 my-20 max-md:px-5 max-md:flex-col items-center">
      {data.map((item, index) => {
        return <AdmissionCard key={index} item={item} />;
      })}
    </section>
  );
};

export default Admissions;
