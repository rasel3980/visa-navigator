import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
import { key } from "localforage";

const MyAddedVisas = () => {
  const { user } = useContext(authContext);

  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/my-visa/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, [user]);

  //  handleDelete
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
        fetch(`http://localhost:5000/visa-delete/${id}`, {
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
    <div>
      MyAddedVisas email : {user?.email} data : {data?.length}
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
            <div className="card-actions justify-between mt-6">
            <Link to={`/update-visa/${dt._id}`}>
                      <button className="btn btn-primary">update</button>
                    </Link>
              <NavLink to="">
              <button
                onClick={() => {
                  handleDelete(dt._id);
                }}
                className="btn bg-red-600 hover:btn-primary text-white"
              >
                Delete
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
