import { Card, CardContent } from "./ui/card";

import React from "react";

const FacultyCard = ({ item }) => {
  return (
    <Card className=" w-[70vw] h-[70vh] overflow-hidden max-sm:w-[50vw] max-sm:h-[50vh] ">
      <CardContent className="p-3 flex flex-col">
        <div className="max-md:text-sm mb-3">
          <p>
            <strong>Name: </strong>
            {item.Name}
          </p>
          <p>
            <strong>Position: </strong>
            {item.Position}
          </p>
          <p>
            <strong>Qualifications: </strong>
            {item.Qualifications}
          </p>
          <p>
            <strong>Experience: </strong>
            {item.Experience}
          </p>
        </div>
        <img src={item.Image} alt={item.Name} loading="lazy" />
      </CardContent>
    </Card>
  );
};

export default FacultyCard;
