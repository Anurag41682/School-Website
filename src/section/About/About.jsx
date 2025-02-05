import React from "react";
import data from "./data";
import AboutCard from "@/components/AboutCard";
const About = () => {
  return (
    <section className="px-20 my-20 text-slate-100 max-md:px-5">
      {data.map((item, index) => {
        return (
          <AboutCard
            key={item.title}
            title={item.title}
            content={item.content}
            image={item.image}
            index={index}
          />
        );
      })}
    </section>
  );
};

export default About;
