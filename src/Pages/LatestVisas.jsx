import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LatestVisas = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://visa-navigator-crud.vercel.app/latest-visa`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Latest Visas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {data?.map((dt) => (
          <div className="card bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <figure className="relative w-full h-56 overflow-hidden">
              <img
                src={dt.country_image}
                alt={dt.country_name}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-110 rounded-t-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-t-xl"></div>
            </figure>
            <div className="card-body text-white p-6 relative">
              <h2 className="card-title text-3xl font-semibold text-center mb-4">{dt.country_name}</h2>
              <p className="font-bold text-lg mb-2">Visa Type: {dt.visa_type}</p>
              <p className="text-sm text-gray-200 mb-2">Description: {dt.description}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-bold">Processing Time: </span>{dt.processing_time}
                </div>
                <div>
                  <span className="font-bold">Age Restriction: </span>{dt.age_restriction} years
                </div>
                <div>
                  <span className="font-bold">Fee: </span>{dt.fee} USD
                </div>
                <div>
                  <span className="font-bold">Validity: </span>{dt.validity}
                </div>
                <div>
                  <span className="font-bold">Application Method: </span>{dt.application_method}
                </div>
              </div>

              <div className="card-actions justify-center mt-6">
                <NavLink to={`/visa-details/${dt._id}`}>
                  <button className="btn btn-warning text-white hover:bg-yellow-600 w-full py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    See Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestVisas;
