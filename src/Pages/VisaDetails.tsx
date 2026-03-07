
import { useLoaderData } from "react-router-dom";
import Allinfo from "./Allinfo";

interface VisaDetail {
  _id: string;
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  description: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
}

const VisaDetails = () => {
  const details = useLoaderData() as VisaDetail;

  return (
    <div className="bg-slate-300">
      <Allinfo detail={details} />
    </div>
  );
};

export default VisaDetails;