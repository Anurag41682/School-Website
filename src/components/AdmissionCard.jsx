import { Card, CardContent } from "@/components/ui/card";
const AdmissionCard = ({ item }) => {
  return (
    <Card className="w-3/4 h-[75vh] overflow-hidden ">
      <CardContent className="flex flex-col justify-center w-full h-full">
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
        <img className="box-cover" src={item.image} alt={item.fee} />
      </CardContent>
    </Card>
  );
};
export default AdmissionCard;
