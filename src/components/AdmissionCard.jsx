import { Card, CardContent } from "@/components/ui/card";
const AdmissionCard = ({ item }) => {
  return (
    <Card className="w-1/3 ">
      <CardContent>
        <h1 className="text-xl py-4 text-center underline">{item.standard}</h1>
        <p className="text-sm tracking-tighter leading-5">
          <strong>Eligibility:</strong> {item.eligibility}
        </p>
        <p className="text-sm tracking-tighter leading-5 mt-2">
          <strong>Documents:</strong> {item.documents}
        </p>
        <p className="text-sm tracking-tighter leading-5 my-2">
          <strong>Fee:</strong> {item.fee}
        </p>
        <img src={item.image} alt={item.fee} />
      </CardContent>
    </Card>
  );
};
export default AdmissionCard;
