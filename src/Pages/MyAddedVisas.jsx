import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

const MyAddedVisas = () => {
  const { user } = useContext(authContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-navigator-crud.vercel.app/my-visa/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [user]);

  // handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-crud.vercel.app/visa-delete/${id}`, {
          method: "DELETE",
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const remaining = data.filter((info) => info._id !== id);
        setData(remaining);
      }
    });
  };

  return (
    <div className="px-12 py-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map((dt) => (
          <div key={dt._id} className="card bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-xl p-6 hover:shadow-red-700 transition-all duration-300 rounded-lg">
            <figure>
              <img
                src={dt.country_image}
                alt={dt.country_name}
                className="rounded-xl w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title text-2xl font-semibold text-gray-800">{dt.country_name}</h2>
              </div>
              <p className="font-bold text-gray-700">Visa Type: {dt.visa_type}</p>
              <div className="text-gray-600">
                <span className="font-bold">Processing Time: </span>{dt.processing_time}
              </div>
              <div className="text-gray-600">
                <span className="font-bold">Age Restriction: </span>{dt.age_restriction} years
              </div>
              <div className="text-gray-600">
                <span className="font-bold">Fee: </span>{dt.fee} USD
              </div>
              <div className="text-gray-600">
                <span className="font-bold">Validity: </span>{dt.validity}
              </div>
              <div className="text-gray-600">
                <span className="font-bold">Application Method: </span>{dt.application_method}
              </div>
              <div className="card-actions justify-between">
                <Link to={`/update-visa/${dt._id}`}>
                  <button className="btn btn-primary bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 ease-in-out">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(dt._id)}
                  className="btn bg-red-600 hover:bg-red-800 text-white transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
