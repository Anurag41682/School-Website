import React from "react";
import CurriculumCard from "@/components/CurriculumCard";
import data from "./data";
const Academics = () => {
  return (
    <section className="px-20 mt-8 mb-20">
      <h1 className="text-3xl text-center underline underline-offset-8">
        Curriculum
      </h1>
      {data.map((item, index) => {
        return <CurriculumCard key={index} item={item} />;
      })}
    </section>
  );
};

export default Academics;
