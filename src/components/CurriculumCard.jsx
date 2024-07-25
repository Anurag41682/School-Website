import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CurriculumCard = ({ item }) => {
  return (
    <>
      <Card className="mt-10 p-5">
        <CardContent>
          <h2 className="text-xl max-md:text-lg max-sm:text-base mb-3 ">
            {item.h2}
          </h2>
          <p className="mb-2 max-md:text-sm">
            <strong>{item.s1}</strong>
            {item.p1}
          </p>
          <p className="max-md:text-sm">
            <strong>{item.s2}</strong>
            {item.p2}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default CurriculumCard;
