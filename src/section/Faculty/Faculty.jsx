import React from "react";
import data from "./data";
import FacultyCard from "@/components/FacultyCard";
const Faculty = () => {
  return (
    <section className="flex flex-col gap-7 px-20 my-20 text-white justify-center items-center">
      {data.map((item, index) => (
        <FacultyCard key={index} item={item} />
      ))}
    </section>
  );
};

export default Faculty;
