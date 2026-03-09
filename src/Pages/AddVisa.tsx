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
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data: { insertedId: string }) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Visa added successfully!',
            icon: 'success',
            confirmButtonColor: '#6366f1',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      })
      .catch((error: Error) => {
        console.log('ERROR', error);
      });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white";
  const labelClass = "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Fade>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900">Add a New Visa</h1>
            <p className="text-gray-400 text-sm mt-2">Fill in the details below to list a new visa</p>
          </div>
        </Fade>
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-1 w-full bg-indigo-500" />

          <div className="p-8">
            <form onSubmit={handleAddVisa} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Country Image URL</label>
                  <input type="url" name="country_image" placeholder="paste image url" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Country Name</label>
                  <input type="text" name="country_name" placeholder="" className={inputClass} required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Visa Type</label>
                  <select name="visa_type" className={inputClass}>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Official Visa">Official Visa</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Processing Time</label>
                  <input type="text" name="processing_time" placeholder="" className={inputClass} required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Fee (USD)</label>
                  <input type="number" name="fee" placeholder="" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Age Restriction</label>
                  <input type="number" name="age_restriction" placeholder="" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Validity</label>
                  <input type="text" name="validity" placeholder="" className={inputClass} required />
                </div>
              </div>
              <div>
                <label className={labelClass}>Application Method</label>
                <input type="text" name="application_method" placeholder="" className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Required Documents</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
                  {['Valid Passport', 'Visa Application Form', 'Recent Passport-Sized Photograph'].map((doc) => (
                    <label key={doc} className="flex items-center gap-2.5 px-4 py-3 bg-gray-50 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 rounded-xl cursor-pointer transition-all group">
                      <input type="checkbox" value={doc} className="w-4 h-4 accent-indigo-500 flex-shrink-0" />
                      <span className="text-gray-500 group-hover:text-indigo-600 text-xs font-medium transition-colors leading-tight">{doc}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter a detailed description..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-indigo-100 text-sm mt-2"
              >
                Add Visa →
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddVisa;