import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";
import { authContext } from '../AuthProvider/AuthProvider';

const AddVisa = () => {
  const { user } = useContext(authContext);

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const country_image = form.country_image.value;
    const country_name = form.country_name.value;
    const visa_type = form.visa_type.value;
    const processing_time = form.processing_time.value;
    const description = form.description.value;
    const age_restriction = form.age_restriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const application_method = form.application_method.value;
    const email = user.email;

    const newVisa = { country_image, country_name, visa_type, processing_time, description, age_restriction, fee, validity, application_method, email };

    // Send data to the server
    fetch('https://visa-navigator-crud.vercel.app/visa', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newVisa),
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Visa added successfully!',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
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
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="Valid Passport"
                  className="checkbox checkbox-accent"
                />
                <span className="text-gray-700">Valid Passport</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="Visa Application Form"
                  className="checkbox checkbox-accent"
                />
                <span className="text-gray-700">Visa Application Form</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="Recent Passport-Sized Photograph"
                  className="checkbox checkbox-accent"
                />
                <span className="text-gray-700">Recent Passport-Sized Photograph</span>
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full bg-white text-gray-700 placeholder-gray-500"
              placeholder="Enter a detailed description"
              required
            ></textarea>
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
          <button type="submit" className="btn bg-yellow-500 hover:bg-accent hover:text-black text-white w-full py-2 rounded-lg transition duration-300">
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
