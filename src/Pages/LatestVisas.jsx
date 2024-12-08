import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestVisas = () => {
    const [data, setData] = useState();

   
    useEffect(() => {
      fetch(`http://localhost:5000/latest-visa`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }, []);
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default LatestVisas;