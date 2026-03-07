import { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

interface VisaApplication {
  _id: string;
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
  appliedDate: string;
  firstName: string;
  lastName: string;
  email: string;
}

const MyVisaApplications = () => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const [data, setData] = useState<VisaApplication[]>([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-navigator-crud.vercel.app/my-application/${user.email}`)
        .then((res) => res.json())
        .then((data: VisaApplication[]) => {
          setData(data);
        })
        .catch((error: Error) => {
          console.log('ERROR', error);
        });
    }
  }, [user]);

  const handleCancel = (id: string): void => {
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
        fetch(`https://visa-navigator-crud.vercel.app/visa-delete/${id}`, {
          method: 'DELETE',
        })
          .then(() => {
            Swal.fire({
              title: 'Cancelled!',
              text: 'Your application has been Cancelled.',
              icon: 'success',
            });
            const remaining = data.filter((info: VisaApplication) => info._id !== id);
            setData(remaining);
          })
          .catch((error: Error) => {
            console.log('ERROR', error);
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-green-100 min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">My Visa Applications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((dt: VisaApplication) => (
            <div
              key={dt._id}
              className="card bg-indigo-50 shadow-xl hover:shadow-2xl hover:shadow-red-700 transition-all duration-300 rounded-lg"
            >
              <figure>
                <img
                  src={dt.country_image}
                  alt={dt.country_name}
                  className="rounded-t-lg w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <div className="flex justify-center mb-4">
                  <h2 className="card-title text-2xl font-semibold text-gray-800">
                    {dt.country_name}
                  </h2>
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
                  <button
                    onClick={() => handleCancel(dt._id)}
                    className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300"
                  >
                    Cancel Application
                  </button>
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