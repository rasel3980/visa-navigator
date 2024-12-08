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
        <section className="py-8 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Visa Application Tips & FAQs</h2>

        {/* Tips Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Visa Application Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="card bg-white shadow-lg p-6 hover:bg-base-100 transition-all"
              >
                <h4 className="text-xl font-bold text-primary mb-2">{tip.title}</h4>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus border-b border-base-300"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-lg font-medium">{faq.question}</div>
                <div className="collapse-content">
                  <p className="text-gray-600">{faq.answer}</p>
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