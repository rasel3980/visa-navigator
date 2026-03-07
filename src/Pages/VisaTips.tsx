import { useState } from 'react';

interface Tip {
  title: string;
  description: string;
  icon: string;
  accent: string;
  lightBg: string;
}

interface Faq {
  question: string;
  answer: string;
}

const tips: Tip[] = [
  {
    icon: "📋",
    accent: "text-indigo-600",
    lightBg: "bg-indigo-50 group-hover:bg-indigo-100",
    title: "Prepare Your Documents Early",
    description: "Ensure all required documents are ready before the deadline. Having everything in order helps avoid delays.",
  },
  {
    icon: "⏱️",
    accent: "text-pink-600",
    lightBg: "bg-pink-50 group-hover:bg-pink-100",
    title: "Check Visa Processing Times",
    description: "Processing times vary by country and visa type. Always check and apply well in advance to avoid issues.",
  },
  {
    icon: "📰",
    accent: "text-emerald-600",
    lightBg: "bg-emerald-50 group-hover:bg-emerald-100",
    title: "Stay Updated on Visa Rules",
    description: "Visa regulations change frequently. Stay up to date with the latest rules for your destination country.",
  },
];

const faqs: Faq[] = [
  {
    question: "How long does it take to process a visa?",
    answer: "The visa processing time varies depending on the country and visa type. It can take anywhere from a few days to several weeks.",
  },
  {
    question: "Can I apply for multiple visas at the same time?",
    answer: "Yes, you can apply for multiple visas, but you should check if there are any restrictions or guidelines for applying for visas from different countries simultaneously.",
  },
  {
    question: "What happens if my visa application is rejected?",
    answer: "If your visa application is rejected, you will receive an explanation for the decision. You can appeal the decision in some cases or reapply with updated documents.",
  },
];

const VisaTips = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-28">
          <div className="lg:w-72 flex-shrink-0">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
              Pro Tips
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Make your visa
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"> journey smooth</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Follow these expert tips to maximise your chances of a successful visa application.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-4">
            {tips.map((tip: Tip, index: number) => (
              <div
                key={index}
                className="group flex items-start gap-5 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg hover:shadow-gray-100/80 rounded-2xl p-6 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-colors duration-300 ${tip.lightBg}`}>
                  {tip.icon}
                </div>
                <div>
                  <h4 className={`text-base font-bold mb-1.5 transition-colors duration-300 ${tip.accent} group-hover:opacity-100 opacity-80`}>
                    {tip.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
                <span className={`ml-auto text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2 ${tip.accent}`}>
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-gray-300 text-sm font-medium px-4">FAQ</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-72 flex-shrink-0">
            <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Common
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> questions</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Everything you need to know about visa applications, processing and more.
            </p>
          </div>
          <div className="flex-1 space-y-3">
            {faqs.map((faq: Faq, index: number) => (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? 'border-indigo-100 shadow-md shadow-indigo-50'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-sm pr-6 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openFaq === index
                      ? 'bg-indigo-500 text-white rotate-45'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <span className="text-lg leading-none font-light">+</span>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-40' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-5 bg-white">
                    <div className="h-px bg-gray-50 mb-4" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
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