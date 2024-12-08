import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const MyVisaApplications = () => {
    const {user} = useContext(authContext);
    const [data, setData] = useState();

   
  useEffect(() => {
    fetch(`https://visa-navigator-crud.vercel.app/my-application/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [user]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((dt) => (
          <div className="card bg-base-100 mx-auto shadow-xl p-6">
          <figure>
            <img
              src={dt.country_image}
              alt={dt.country_name}
              className="rounded-xl w-full h-56 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-center mb-4">
              <h2 className="card-title text-2xl font-semibold">{dt.country_name}</h2>
            </div>
            <p className="font-bold mb-2">Visa Type: {dt.visa_type}</p>
            
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
              {dt.fee}
            </div>
            <div className="mt-2">
              <span className="font-bold">Validity: </span>
              {dt.validity}
            </div>
            <div className="mt-2">
              <span className="font-bold">Application Method: </span>
              {dt.application_method}
            </div>
            <div className="mt-2">
              <span className="font-bold">Applied Date: </span>
              {dt.appliedDate}
            </div>
            <div className="mt-2">
              <span className="font-bold">Name: </span>
              {dt.firstName} {dt.lastName}
            </div>
            <div className="mt-2">
              <span className="font-bold">Email: </span>
              {dt.email}
            </div>
  
            <div className="card-actions justify-end mt-6">
              <NavLink to="">
              <button
                
                className="btn bg-red-600 hover:bg-red-800 text-white"
              >
                Cancel
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
};

export default MyVisaApplications;