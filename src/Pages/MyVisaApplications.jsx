import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyVisaApplications = () => {
  const { user } = useContext(authContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-navigator-crud.vercel.app/my-application/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
  }, [user]);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visa-delete/${id}`, {
          method: 'DELETE',
        }).then(() => {
          Swal.fire({
            title: 'Cancelled!',
            text: 'Your file has been Cancelled.',
            icon: 'success',
          });
          const remaining = data.filter((info) => info._id !== id);
          setData(remaining);
        });
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-green-100 min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">My Visa Applications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((dt) => (
            <div className="card bg-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg">
              <figure>
                <img
                  src={dt.country_image}
                  alt={dt.country_name}
                  className="rounded-t-lg w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <div className="flex justify-center mb-4">
                  <h2 className="card-title text-2xl font-semibold text-gray-800">{dt.country_name}</h2>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="font-bold">Visa Type: {dt.visa_type}</p>
                  <p><span className="font-bold">Processing Time:</span> {dt.processing_time}</p>
                  <p><span className="font-bold">Age Restriction:</span> {dt.age_restriction} years</p>
                  <p><span className="font-bold">Fee:</span> {dt.fee}</p>
                  <p><span className="font-bold">Validity:</span> {dt.validity}</p>
                  <p><span className="font-bold">Application Method:</span> {dt.application_method}</p>
                  <p><span className="font-bold">Applied Date:</span> {dt.appliedDate}</p>
                  <p><span className="font-bold">Name:</span> {dt.firstName} {dt.lastName}</p>
                  <p><span className="font-bold">Email:</span> {dt.email}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <NavLink to="">
                    <button
                      onClick={() => handleCancel(dt._id)}
                      className="btn bg-red-600 hover:bg-red-800 text-white w-full sm:w-auto mt-4"
                    >
                      Cancel Application
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyVisaApplications;
