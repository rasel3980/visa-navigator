import React from 'react';

const VisaTips = () => {
  const tips = [
    {
      title: "Prepare Your Documents Early",
      description:
        "Ensure that all your required documents are ready well before the application deadline. Having everything in order will help avoid delays.",
    },
    {
      title: "Check Visa Processing Times",
      description:
        "Processing times can vary depending on the country and type of visa. Be sure to check the visa processing times and apply well in advance.",
    },
    {
      title: "Stay Updated on Visa Rules",
      description:
        "Visa regulations may change, so it's important to stay up to date with any changes in visa rules for the country you plan to visit.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to process a visa?",
      answer:
        "The visa processing time varies depending on the country and visa type. It can take anywhere from a few days to several weeks.",
    },
    {
      question: "Can I apply for multiple visas at the same time?",
      answer:
        "Yes, you can apply for multiple visas, but you should check if there are any restrictions or guidelines for applying for visas from different countries simultaneously.",
    },
    {
      question: "What happens if my visa application is rejected?",
      answer:
        "If your visa application is rejected, you will receive an explanation for the decision. You can appeal the decision in some cases or reapply with updated documents.",
    },
  ];

  return (
    <section className="py-16 mb-10 rounded-xl ">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-10">Visa Application Tips & FAQs</h2>
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-center mb-6">Visa Application Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="card bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-3">{tip.title}</h4>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus border-b-2 border-gray-300"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-lg font-medium text-white peer-checked:text-indigo-800">
                  {faq.question}
                </div>
                <div className="collapse-content text-white">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaTips;
