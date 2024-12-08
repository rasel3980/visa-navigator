import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LatestVisas = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://visa-navigator-crud.vercel.app/latest-visa`)
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Latest Visas</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data?.map((dt) => 
          <div className="card bg-base-100 mx-auto shadow-xl p-6">
            <div>
            <figure>
              <img
                src={dt.country_image}
                alt={dt.country_name}
                className="rounded-xl w-full h-56 object-cover"
              />
            </figure>
            </div>
            <div className="card-body">
              <div className="flex justify-center mb-4">
                <h2 className="card-title text-2xl font-semibold">
                  {dt.country_name}
                </h2>
              </div>
              <p className="font-bold mb-2">Visa Type: {dt.visa_type}</p>
              <p className="font-bold mt-2">
                Description:{" "}
                <span className="text-gray-600 text-sm">{dt.description}</span>
              </p>

              <div className="mt-2">
                <span className="font-bold">Processing Time: </span>
                {dt.processing_time}
              </div>
              <div className="mt-2">
                <span className="font-bold">Age Restriction: </span>
                {dt.age_restriction} years
              </div>
              <div className="mt-2">
                <span className="font-bold">Fee: </span>
                {dt.fee} USD
              </div>
              <div className="mt-2">
                <span className="font-bold">Validity: </span>
                {dt.validity}
              </div>
              <div className="mt-2">
                <span className="font-bold">Application Method: </span>
                {dt.application_method}
              </div>

              <div className="card-actions justify-end mt-6">
                <NavLink to="">
                  <button className="btn btn-primary">See Details</button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center my-8">
        <NavLink to="/all visas">
          <button className="btn btn-secondary font-bold">See Details</button>
        </NavLink>
      </div>
    </>
  );
};

export default LatestVisas;
