import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

interface Visa {
  _id: string;
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
}

const visaTypeColors: Record<string, string> = {
  'Tourist Visa': 'bg-emerald-100 text-emerald-600',
  'Student Visa': 'bg-blue-100 text-blue-600',
  'Official Visa': 'bg-purple-100 text-purple-600',
};

const MyAddedVisas = () => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const [data, setData] = useState<Visa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-navigator-crud.vercel.app/my-visa/${user.email}`)
        .then((res) => res.json())
        .then((data: Visa[]) => {
          setData(data);
          setLoading(false);
        })
        .catch((error: Error) => {
          console.log("ERROR", error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id: string): void => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-crud.vercel.app/visa-delete/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Visa has been deleted.",
              icon: "success",
              confirmButtonColor: "#6366f1",
            });
            setData((prev) => prev.filter((info) => info._id !== id));
          })
          .catch((error: Error) => {
            console.log("ERROR", error);
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">My Added Visas</h1>
          <p className="text-gray-400 text-sm mt-1">
            {data.length} visa{data.length !== 1 ? 's' : ''} added by you
          </p>
        </div>
        {loading && (
          <div className="flex justify-center items-center py-24">
            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        )}
        {!loading && data.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-6xl mb-4">📋</span>
            <h3 className="text-lg font-bold text-gray-700 mb-2">No visas added yet</h3>
            <p className="text-gray-400 text-sm mb-6">Start by adding your first visa listing</p>
            <Link to="/add visa">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl text-sm shadow-md shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-300">
                Add a Visa →
              </button>
            </Link>
          </div>
        )}
        {!loading && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((dt: Visa) => (
              <div
                key={dt._id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dt.country_image}
                    alt={dt.country_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${visaTypeColors[dt.visa_type] ?? 'bg-gray-100 text-gray-600'}`}>
                      {dt.visa_type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h2 className="text-white font-extrabold text-xl drop-shadow-lg">{dt.country_name}</h2>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: '⏱️', label: 'Processing', value: dt.processing_time },
                      { icon: '💰', label: 'Fee', value: `$${dt.fee}` },
                      { icon: '👤', label: 'Age Limit', value: `${dt.age_restriction}+` },
                      { icon: '📅', label: 'Validity', value: dt.validity },
                    ].map((item) => (
                      <div key={item.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">{item.icon}</span>
                          <p className="text-gray-400 text-xs">{item.label}</p>
                        </div>
                        <p className="text-gray-800 font-bold text-sm mt-1 truncate">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-indigo-50 rounded-xl border border-indigo-100 mb-5">
                    <span className="text-sm">📋</span>
                    <div className="min-w-0">
                      <p className="text-xs text-indigo-400 font-semibold">Application Method</p>
                      <p className="text-indigo-700 text-xs font-bold truncate">{dt.application_method}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/update-visa/${dt._id}`} className="flex-1">
                      <button className="w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold rounded-xl text-sm transition-all duration-200 border border-indigo-100">
                        ✏️ Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(dt._id)}
                      className="flex-1 py-2.5 bg-red-50 hover:bg-red-100 text-red-500 font-semibold rounded-xl text-sm transition-all duration-200 border border-red-100"
                    >
                      🗑️ Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyAddedVisas;