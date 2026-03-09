import { NavLink } from 'react-router-dom';

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

interface VisaCardProps {
  visa: Visa;
}

const visaTypeColors: Record<string, string> = {
  'Tourist Visa': 'bg-emerald-100 text-emerald-600',
  'Student Visa': 'bg-blue-100 text-blue-600',
  'Official Visa': 'bg-purple-100 text-purple-600',
};

const VisaCard = ({ visa }: VisaCardProps) => {
  const {
    country_image,
    country_name,
    visa_type,
    processing_time,
    age_restriction,
    fee,
    _id,
  } = visa;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <img
          src={country_image}
          alt={country_name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${visaTypeColors[visa_type] ?? 'bg-gray-100 text-gray-600'}`}>
            {visa_type}
          </span>
        </div>
        <div className="absolute bottom-3 left-4">
          <h2 className="text-white font-extrabold text-xl drop-shadow-lg">{country_name}</h2>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Processing', value: processing_time, icon: '⏱️' },
            { label: 'Fee', value: `$${fee}`, icon: '💰' },
            { label: 'Age Limit', value: `${age_restriction}+`, icon: '👤' },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-xl p-3 text-center">
              <span className="text-base">{item.icon}</span>
              <p className="text-gray-800 font-bold text-xs mt-1 truncate">{item.value}</p>
              <p className="text-gray-400 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
        <NavLink to={`/visa-details/${_id}`}>
          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all duration-300 hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2">
            See Details
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default VisaCard;