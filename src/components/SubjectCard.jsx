import { Card, CardContent } from "./ui/card";
const SubjectCard = ({ name, image }) => {
  return (
    <Card className="flex justify-center w-1/3">
      <CardContent className="p-3">
        <img src={image} alt={name}></img>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
