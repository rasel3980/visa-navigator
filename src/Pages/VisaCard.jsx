import React from 'react';
import { NavLink } from 'react-router-dom';

const VisaCard = ({ visa }) => {
  const { country_image, country_name, visa_type, processing_time, description, age_restriction, fee, validity, application_method, _id } = visa;

  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <div className="card bg-teal-600 shadow-xl rounded-lg overflow-hidden">
        <figure className="relative h-64 overflow-hidden">
          <img
            src={country_image}
            alt={country_name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-t-lg"
          />
          <div className="absolute top-0 left-0 bg-black opacity-40 w-full h-full"></div>
        </figure>

        <div className="card-body text-center relative text-white">
          <h2 className="text-2xl font-semibold mb-2">{country_name}</h2>
          <p className="text-xl font-medium mb-2">{visa_type}</p>
          <p className="text-md mb-2">Processing Time: {processing_time}</p>
          <p className="text-md mb-2">Fee: {fee} USD</p>
          <p className="text-md mb-4">Age Restriction: {age_restriction} years</p>

          <div className="card-actions justify-center">
            <NavLink to={`/visa-details/${_id}`}>
              <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-lg transition duration-300">
                See Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
