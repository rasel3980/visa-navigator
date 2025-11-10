import React from "react";
import { useLoaderData } from "react-router-dom";
import Allinfo from "./Allinfo";
const VisaDetails = () => {
  const details = useLoaderData();
//   console.log(details);
  return (
    <div className="bg-slate-300">
      <Allinfo detail={details}></Allinfo>
    </div>
  );
};

export default VisaDetails;
