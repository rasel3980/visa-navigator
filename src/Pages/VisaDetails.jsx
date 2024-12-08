import React from "react";
import { useLoaderData } from "react-router-dom";
import Allinfo from "./Allinfo";
const VisaDetails = () => {
  const details = useLoaderData();
//   console.log(details);
  return (
    <div>
      <Allinfo detail={details}></Allinfo>
    </div>
  );
};

export default VisaDetails;
