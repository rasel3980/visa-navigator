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

interface ApplyData extends Omit<VisaDetail, '_id'> {
  firstName: string;
  lastName: string;
  appliedDate: string;
  email: string;
}

const visaTypeColors: Record<string, string> = {
  'Tourist Visa': 'bg-emerald-100 text-emerald-600',
  'Student Visa': 'bg-blue-100 text-blue-600',
  'Official Visa': 'bg-purple-100 text-purple-600',
};

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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
          <div className="relative h-72 overflow-hidden">
            <img
              src={country_image}
              alt={country_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${visaTypeColors[visa_type] ?? 'bg-gray-100 text-gray-600'}`}>
                {visa_type}
              </span>
            </div>
            <div className="absolute bottom-6 left-6">
              <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">{country_name}</h1>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '⏱️', label: 'Processing', value: processing_time },
                { icon: '💰', label: 'Fee', value: `$${fee} USD` },
                { icon: '👤', label: 'Age Limit', value: `${age_restriction}+ yrs` },
                { icon: '📅', label: 'Validity', value: validity },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-900 font-bold text-sm mt-1">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="h-px bg-gray-100 mb-6" />
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-indigo-50 rounded-2xl border border-indigo-100 mb-8">
              <span className="text-2xl">📋</span>
              <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-wide">Application Method</p>
                <p className="text-indigo-700 font-semibold text-sm">{application_method}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpenModal(true)}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Apply Now →
            </button>

          </div>
        </div>
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpenModal(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">Apply for Visa</h3>
                <p className="text-gray-400 text-sm mt-0.5">{country_name} — {visa_type}</p>
              </div>
              <button
                onClick={() => setIsOpenModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user?.email ?? ""}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 text-sm outline-none cursor-not-allowed"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="first name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="last name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Visa Fee</label>
                  <input
                    type="text"
                    id="fee"
                    name="fee"
                    defaultValue={`${fee} USD`}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 text-sm outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Applied Date</label>
                  <input
                    type="text"
                    id="appliedDate"
                    name="appliedDate"
                    value={currentDate}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 text-sm outline-none cursor-not-allowed"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 text-sm mt-2"
              >
                Submit Application →
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allinfo;