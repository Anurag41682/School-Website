import React from "react";
import AdmissionCard from "@/components/AdmissionCard";
import data from "./data";
const Admissions = () => {
  return (
    <section className="flex gap-7 px-20 my-20">
      {data.map((item, index) => {
        return <AdmissionCard key={index} item={item} />;
      })}
    </section>
  );
};

export default Admissions;
