import Image1 from "../../assets/preK.jpeg";
import Image2 from "../../assets/kindergarten.jpg";
import Image3 from "../../assets/1andAbove.jpg";

const data = [
  {
    standard: "Pre-K",
    eligibility: "Child must be 3 years old by September 1.",
    documents:
      "Birth certificate,Passport-sized photographs (4 copies), Previous academic records, Transfer certificate (if applicable), Proof of residence, Immunization records",
    fee: " ₹200",
    image: Image1,
  },
  {
    standard: "Kindergarten",
    eligibility: "Child must be 5 years old by September 1.",
    documents:
      "Birth certificate,Passport-sized photographs (4 copies), Previous academic records, Transfer certificate (if applicable), Proof of residence, Immunization records",
    fee: " ₹500",
    image: Image2,
  },
  {
    standard: "1 and above",
    eligibility: "previous school records and report cards are required.",
    documents:
      "Birth certificate,Passport-sized photographs (4 copies), Previous academic records, Transfer certificate (if applicable), Proof of residence, Immunization records",
    fee: " ₹1000",
    image: Image3,
  },
];

export default data;
