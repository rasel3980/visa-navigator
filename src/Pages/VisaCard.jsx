import React from 'react';
import { NavLink } from 'react-router-dom';

const VisaCard = ({visa}) => {
    const  {country_image,country_name,visa_type,processing_time,description,age_restriction,fee,validity,application_method, _id} = visa;
    return (
        <div>
            <div className="card bg-base-100 h-[400px] shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={country_image}
      alt={country_name}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{country_name}</h2>
    <p>{visa_type}</p>
    <p>Fee: {fee} USD</p>
    <div className="card-actions">
      <NavLink to={`/visa-details/${_id}`}><button className="btn btn-primary">See Details</button></NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default VisaCard;