import { Card, CardContent } from "./ui/card";

import React from "react";

const FacultyCard = ({ item }) => {
  return (
    <Card>
      <CardContent className="p-3 ">
        <div className="max-md:text-sm">
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
        <img src={item.Image} alt={item.Name} />
      </CardContent>
    </Card>
  );
};

export default FacultyCard;
