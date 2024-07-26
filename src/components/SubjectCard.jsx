import { Card, CardContent } from "./ui/card";
const SubjectCard = ({ name, image }) => {
  return (
    <Card className="flex justify-center w-[70vw] h-[70vh]  max-sm:h-[50vh]">
      <CardContent className="p-3 w-full h-full">
        <img src={image} alt={name} className="w-full h-full object-fill"></img>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
