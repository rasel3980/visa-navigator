import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

interface VisaDetail {
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

interface AllinfoProps {
  detail: VisaDetail;
}

interface ApplyData extends Omit <VisaDetail, '_id'> {
  firstName: string;
  lastName: string;
  appliedDate: string;
  email: string;
}

const Allinfo = ({ detail }: AllinfoProps) => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    country_image,
    country_name,
    visa_type,
    processing_time,
    description,
    age_restriction,
    fee,
    validity,
    application_method,
  } = detail;

  const currentDate = new Date().toLocaleDateString();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;

    const getValue = (name: string): string =>
      (form.elements.namedItem(name) as HTMLInputElement).value;

    const applyData: ApplyData = {
      country_image,
      country_name,
      visa_type,
      processing_time,
      description,
      age_restriction,
      fee,
      validity,
      application_method,
      firstName: getValue('firstName'),
      lastName: getValue('lastName'),
      appliedDate: getValue('appliedDate'),
      email: getValue('email'),
    };

    fetch("https://visa-navigator-crud.vercel.app/myappliedvsia", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data: { insertedId: string }) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Applied successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      })
      .catch((error: Error) => {
        console.log("ERROR", error);
      });

    setIsOpenModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-accent w-full md:w-[600px] hover:shadow-2xl hover:shadow-red-500 rounded mx-auto p-6">
        <figure>
          <img src={country_image} alt={country_name} className="rounded-xl w-full h-56 object-cover" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <h2 className="card-title text-2xl font-semibold">{country_name}</h2>
          </div>
          <p className="font-bold mb-2">Visa Type: {visa_type}</p>
          <p className="font-bold mt-2">
            Description: <span className="text-gray-600 text-sm">{description}</span>
          </p>
          <div className="mt-2"><span className="font-bold">Processing Time: </span>{processing_time}</div>
          <div className="mt-2"><span className="font-bold">Age Restriction: </span>{age_restriction} years</div>
          <div className="mt-2"><span className="font-bold">Fee: </span>{fee} USD</div>
          <div className="mt-2"><span className="font-bold">Validity: </span>{validity}</div>
          <div className="mt-2"><span className="font-bold">Application Method: </span>{application_method}</div>
          <div className="card-actions justify-end mt-6">
            <button
              onClick={() => setIsOpenModal(true)}
              className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {isOpenModal && (
        <dialog id="my_modal_5" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Apply for Visa</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input type="email" id="email" name="email" value={user?.email ?? ""} readOnly className="input input-bordered w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-semibold">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter Your First Name" className="input input-bordered w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-semibold">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter Your Last Name" className="input input-bordered w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="fee" className="block text-sm font-semibold">Visa Fee</label>
                <input type="text" id="fee" name="fee" defaultValue={`${fee} USD`} readOnly className="input input-bordered w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="appliedDate" className="block text-sm font-semibold">Applied Date</label>
                <input type="text" id="appliedDate" name="appliedDate" value={currentDate} readOnly className="input input-bordered w-full" />
              </div>
              <div className="modal-action">
                <button type="button" className="btn" onClick={() => setIsOpenModal(false)}>Close</button>
                <button type="submit" className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300">Apply</button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Allinfo;