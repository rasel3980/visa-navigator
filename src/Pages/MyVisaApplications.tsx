import { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Loading from './Loading';

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

const visaTypeColors: Record<string, string> = {
  'Tourist Visa': 'bg-emerald-100 text-emerald-600',
  'Student Visa': 'bg-blue-100 text-blue-600',
  'Official Visa': 'bg-purple-100 text-purple-600',
};

const MyVisaApplications = () => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const [data, setData] = useState<VisaApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-navigator-crud.vercel.app/my-application/${user.email}`)
        .then((res) => res.json())
        .then((data: VisaApplication[]) => {
          setData(data);
          setLoading(false);
        })
        .catch((error: Error) => {
          console.log('ERROR', error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleCancel = (id: string): void => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6366f1',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-crud.vercel.app/visa-delete/${id}`, {
          method: 'DELETE',
        })
          .then(() => {
            Swal.fire({
              title: 'Cancelled!',
              text: 'Your application has been cancelled.',
              icon: 'success',
              confirmButtonColor: '#6366f1',
            });
            setData((prev) => prev.filter((info) => info._id !== id));
          })
          .catch((error: Error) => {
            console.log('ERROR', error);
          });
      }
    });
  };

  const filtered = data.filter((dt) =>
    dt.country_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">My Applications</h1>
            <p className="text-gray-400 text-sm mt-1">
              {filtered.length} application{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm text-gray-700 placeholder-gray-300 bg-white transition-all w-full sm:w-56"
            />
          </div>
        </div>
        {loading && (
          <Loading></Loading>
        )}
        {!loading && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-6xl mb-4">📭</span>
            <h3 className="text-lg font-bold text-gray-700 mb-2">No applications found</h3>
            <p className="text-gray-400 text-sm">You havent applied for any visas yet</p>
          </div>
        )}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dt: VisaApplication) => (
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
                  <div className="flex items-center gap-3 px-4 py-3 bg-indigo-50 rounded-xl border border-indigo-100 mb-4">
                    <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {dt.firstName?.charAt(0)?.toUpperCase() ?? '?'}
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-800 font-bold text-sm truncate">
                        {dt.firstName ?? ''} {dt.lastName ?? ''}
                      </p>
                      <p className="text-indigo-400 text-xs truncate">{dt.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {[
                      { icon: '⏱️', label: 'Processing', value: dt.processing_time },
                      { icon: '💰', label: 'Fee', value: `$${dt.fee}` },
                      { icon: '👤', label: 'Age Limit', value: `${dt.age_restriction}+` },
                      { icon: '📅', label: 'Validity', value: dt.validity },
                    ].map((item) => (
                      <div key={item.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs">{item.icon}</span>
                          <p className="text-gray-400 text-xs">{item.label}</p>
                        </div>
                        <p className="text-gray-800 font-bold text-xs mt-1 truncate">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                    <div>
                      <p className="text-gray-400 text-xs">Applied Date</p>
                      <p className="text-gray-700 font-bold text-xs mt-0.5">{dt.appliedDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">Method</p>
                      <p className="text-gray-700 font-bold text-xs mt-0.5">{dt.application_method}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCancel(dt._id)}
                    className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-500 font-semibold rounded-xl text-sm transition-all duration-200 border border-red-100 hover:border-red-200"
                  >
                    🗑️ Cancel Application
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyVisaApplications;