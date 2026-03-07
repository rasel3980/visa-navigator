
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

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

const AllVisas = () => {
  const visas = useLoaderData() as Visa[];

  return (
    <div className='px-12 bg-gray-200 py-12'>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4'>
        {visas.map((visa: Visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;