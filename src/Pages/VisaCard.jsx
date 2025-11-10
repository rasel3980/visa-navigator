import React from 'react';
import { NavLink } from 'react-router-dom';

const VisaCard = ({ visa }) => {
  const { country_image, country_name, visa_type, processing_time, description, age_restriction, fee, validity, application_method, _id } = visa;

  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <div className="card bg-gray-600 text-gray-100 rounded-lg hover:shadow-2xl hover:shadow-red-500 overflow-hidden">
        <figure className="h-64 overflow-hidden">
          <img
            src={country_image}
            alt={country_name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-t-lg"
          />
        </figure>

        <div className="card-body">
          <h2 className="text-2xl text-center font-semibold ">{country_name}</h2>
          <p className="text-xl font-medium">{visa_type}</p>
          <p className="text-md">Processing Time: {processing_time}</p>
          <p className="text-md">Fee: {fee} USD</p>
          <p className="text-md">Age Restriction: {age_restriction} years</p>

          <div className="card-actions justify-center">
            <NavLink to={`/visa-details/${_id}`}>
              <button className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300">
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
