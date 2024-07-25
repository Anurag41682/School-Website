import { Card, CardContent } from "./ui/card";
const SubjectCard = ({ name, image }) => {
  return (
    <Card className="flex justify-center w-1/3 max-md:w-3/4 ">
      <CardContent className="p-3 w-full h-full">
        <img src={image} alt={name} className="w-full h-full object-fill"></img>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
