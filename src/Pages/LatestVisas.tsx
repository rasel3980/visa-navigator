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

const visaTypeColors: Record<string, string> = {
  'Tourist Visa': 'bg-emerald-100 text-emerald-600',
  'Student Visa': 'bg-blue-100 text-blue-600',
  'Official Visa': 'bg-purple-100 text-purple-600',
};

const LatestVisas = () => {
  const [data, setData] = useState<Visa[]>([]);

  useEffect(() => {
    fetch(`https://visa-navigator-crud.vercel.app/latest-visa`)
      .then((res) => res.json())
      .then((data: Visa[]) => setData(data))
      .catch((error: Error) => console.log("ERROR", error));
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Fresh Listings
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">Latest Visas</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
            Explore the most recently added visa options from around the world
          </p>
        </div>
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
                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {dt.description}
                </p>
                <div className="grid grid-cols-2 gap-2.5 mb-5">
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
                <NavLink to={`/visa-details/${dt._id}`}>
                  <button className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-indigo-100 text-sm flex items-center justify-center gap-2">
                    See Details
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </NavLink>

              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <NavLink to="/all visas">
            <button className="px-8 py-3 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-500 hover:text-indigo-600 font-semibold rounded-xl transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-sm">
              View All Visas →
            </button>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default LatestVisas;