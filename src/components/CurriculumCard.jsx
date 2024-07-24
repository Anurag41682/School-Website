import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CurriculumCard = ({ item }) => {
  return (
    <>
      <Card className="mt-10 p-5">
        <CardContent>
          <h2 className="text-xl mb-3 ">{item.h2}</h2>
          <p className="mb-2">
            <strong>{item.s1}</strong>
            {item.p1}
          </p>
          <p>
            <strong>{item.s2}</strong>
            {item.p2}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default CurriculumCard;
