import React from "react";
import CurriculumCard from "@/components/CurriculumCard";
import SubjectCard from "@/components/SubjectCard";
import * as data from "./data";
const Academics = () => {
  return (
    <section className="px-20 my-20 text-slate-100 max-md:px-5">
      <h1 className="text-3xl max-md:text-2xl max-sm:text-xl text-center underline underline-offset-8">
        Curriculum
      </h1>
      {data.dataCurriculum.map((item, index) => {
        return <CurriculumCard key={index} item={item} />;
      })}
      <h1 className="text-3xl max-md:text-2xl max-sm:text-xl   text-center underline underline-offset-8 mt-20">
        Subjects Taught
      </h1>
      <div className="flex flex-wrap gap-14 justify-around my-10 ">
        {data.dataSubject.map((item, index) => {
          return (
            <SubjectCard key={index} name={item.name} image={item.image} />
          );
        })}
      </div>
      <h1 className="text-3xl max-md:text-2xl max-sm:text-xl   text-center underline underline-offset-8 mt-20">
        Teaching Methodologies
      </h1>
      <p className="mt-10">
        We use a blend of traditional and modern teaching techniques to cater to
        different learning styles.
      </p>
      <h1 className="text-3xl max-md:text-2xl max-sm:text-xl   text-center underline underline-offset-8 mt-20">
        Educational Resources
      </h1>
      <p className="mt-10">
        Digital classrooms, interactive learning modules, and access to online
        educational platforms.
      </p>
    </section>
  );
};

export default Academics;
