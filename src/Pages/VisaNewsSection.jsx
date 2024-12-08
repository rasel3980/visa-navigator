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
        <section className="py-8 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Visa News & Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {newsUpdates.map((update, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg p-6 hover:bg-base-100 transition-all"
            >
              <h3 className="text-xl font-bold">{update.title}</h3>
              <p className="text-sm text-gray-600 my-2">{update.description}</p>
              <p className="text-xs text-gray-400 mt-2">Published on: {update.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    );
};

export default VisaNewsSection;