import React from "react";
import AdmissionCard from "@/components/AdmissionCard";
import data from "./data";
const Admissions = () => {
  return (
    <section className="flex flex-col  px-20 my-20 max-md:px-5 items-center ">
      <div className="flex gap-5 max-md:flex-col items-center">
        {data.map((item, index) => {
          return <AdmissionCard key={index} item={item} />;
        })}
      </div>
      <p className="mt-10 text-slate-100">
        <strong>Important Dates: </strong>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </p>
    </section>
  );
};

export default Admissions;
