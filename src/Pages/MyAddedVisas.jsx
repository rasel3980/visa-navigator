import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { key } from "localforage";

const MyAddedVisas = () => {
  const { user } = useContext(authContext);

  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/my-visa/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <div className="grid grid-cols-4 gap-4">
        {data?.map((da) => (
          <div>
            <div>
              <div className="card bg-base-100 h-full shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={da?.country_image}
                    // alt={country_name}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{da?.country_name}</h2>
                  <p>{da?.visa_type}</p>
                  {/* <p>Fee: {fee} USD</p>
                  <div className="card-actions">
                    <NavLink to="/visa details">
                      <button className="btn btn-primary">See Details</button>
                    </NavLink>
                  </div> */}

                  <div className="card-actions">
                    <button
                      onClick={() => {
                        handleDelete(da._id);
                      }}
                      className="btn btn-primary"
                    >
                      delete
                    </button>
                    <Link to={`/update-visa/${da._id}`}>
                      <button className="btn btn-primary">update</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
