import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Visa {
  _id: string;
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  description: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
}

const LatestVisas = () => {
  const [data, setData] = useState<Visa[]>([]);

  useEffect(() => {
    fetch(`https://visa-navigator-crud.vercel.app/latest-visa`)
      .then((res) => res.json())
      .then((data: Visa[]) => {
        setData(data);
      })
      .catch((error: Error) => {
        console.log("ERROR", error);
      });
  }, []);

  return (
    <>
      <div className="text-center pt-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Latest Visas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {data.map((dt: Visa) => (
          <div key={dt._id} className="card bg-gray-100 hover:shadow-2xl hover:shadow-red-700">
            <figure className="relative w-full h-56 overflow-hidden">
              <img
                src={dt.country_image}
                alt={dt.country_name}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="text-3xl font-semibold text-center">{dt.country_name}</h2>
              <p className="font-bold text-lg">Visa Type: {dt.visa_type}</p>
              <p className="text-sm">Description: {dt.description}</p>
              <div className="text-sm">
                <div>
                  <span className="font-bold">Processing Time: </span>{dt.processing_time}
                </div>
                <div>
                  <span className="font-bold">Age Restriction: </span>{dt.age_restriction} years
                </div>
                <div>
                  <span className="font-bold">Fee: </span>{dt.fee} USD
                </div>
                <div>
                  <span className="font-bold">Validity: </span>{dt.validity}
                </div>
                <div>
                  <span className="font-bold">Application Method: </span>{dt.application_method}
                </div>
              </div>
              <div className="card-actions justify-center mt-6">
                <NavLink to={`/visa-details/${dt._id}`}>
                  <button className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300">
                    See Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestVisas;