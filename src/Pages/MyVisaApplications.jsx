import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const MyVisaApplications = () => {
    const {user} = useContext(authContext);
    const [data, setData] = useState();

   
  useEffect(() => {
    fetch(`http://localhost:5000/my-application/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [user]);

    return (
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
    );
};

export default MyVisaApplications;