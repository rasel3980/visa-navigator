import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";
import { authContext } from '../AuthProvider/AuthProvider';

interface NewVisa {
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  description: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
  email: string;
}

const AddVisa = () => {
  const auth = useContext(authContext);
  const user = auth?.user;

  const handleAddVisa = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;

    const getValue = (name: string): string =>
      (form.elements.namedItem(name) as HTMLInputElement).value;

    const newVisa: NewVisa = {
      country_image: getValue('country_image'),
      country_name: getValue('country_name'),
      visa_type: getValue('visa_type'),
      processing_time: getValue('processing_time'),
      description: getValue('description'),
      age_restriction: getValue('age_restriction'),
      fee: getValue('fee'),
      validity: getValue('validity'),
      application_method: getValue('application_method'),
      email: user?.email ?? '',
    };

    fetch('https://visa-navigator-crud.vercel.app/visa', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data: { insertedId: string }) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Visa added successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      })
      .catch((error: Error) => {
        console.log('ERROR', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center py-8">
      <div className="container mx-auto p-6 max-w-3xl bg-gray-200 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          <Fade>Enter Your Visa Information</Fade>
        </h2>

        <form onSubmit={handleAddVisa} className="space-y-6">
          <div className="form-control">
            <label className="label text-gray-700">Country Image</label>
            <input
              type="url"
              name="country_image"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Paste image URL here"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Country Name</label>
            <input
              type="text"
              name="country_name"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter country name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Visa Type</label>
            <select
              name="visa_type"
              className="select select-bordered w-full bg-white text-gray-700"
            >
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Processing Time</label>
            <input
              type="text"
              name="processing_time"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter processing time"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Required Documents</label>
            <div className="flex flex-col space-y-2">
              {['Valid Passport', 'Visa Application Form', 'Recent Passport-Sized Photograph'].map(
                (doc: string) => (
                  <label key={doc} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={doc}
                      className="checkbox checkbox-accent"
                    />
                    <span className="text-gray-700">{doc}</span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter a detailed description"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Age Restriction</label>
            <input
              type="number"
              name="age_restriction"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter age restriction"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Visa Fee</label>
            <input
              type="number"
              name="fee"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter visa fee"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Validity</label>
            <input
              type="text"
              name="validity"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter validity"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Application Method</label>
            <input
              type="text"
              name="application_method"
              className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter application method"
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;