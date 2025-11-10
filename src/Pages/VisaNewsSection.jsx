import React from 'react';

const VisaNewsSection = () => {
  const newsUpdates = [
    {
      title: "Latest Changes in Visa Policies",
      description:
        "The US has updated its student visa regulations to include new health insurance requirements.",
      date: "December 5, 2024",
    },
    {
      title: "New Travel Guidelines",
      description:
        "The UK has introduced faster visa processing for tourists from specific countries.",
      date: "December 3, 2024",
    },
    {
      title: "Visa Fee Increases",
      description:
        "Australia has announced a 10% increase in visa fees for work permits, effective from January 2025.",
      date: "December 1, 2024",
    },
    {
      title: "Special Visas",
      description:
        "India now offers special visas for official. Read how to apply.",
      date: "November 30, 2024",
    },
  ];

  return (
    <section className="py-16 my-10 rounded-lg">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-10">Visa News & Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {newsUpdates.map((update, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800">{update.title}</h3>
              <p className="text-md text-gray-700 my-2">{update.description}</p>
              <p className="text-sm text-gray-500 mt-2">Published on: {update.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaNewsSection;
