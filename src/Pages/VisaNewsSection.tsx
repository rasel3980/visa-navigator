
interface NewsUpdate {
  title: string;
  description: string;
  date: string;
  icon: string;
  tag: string;
}

const newsUpdates: NewsUpdate[] = [
  {
    icon: "🇺🇸",
    tag: "Policy Update",
    title: "Latest Changes in Visa Policies",
    description: "The US has updated its student visa regulations to include new health insurance requirements.",
    date: "December 5, 2024",
  },
  {
    icon: "🇬🇧",
    tag: "Travel Guidelines",
    title: "New Travel Guidelines",
    description: "The UK has introduced faster visa processing for tourists from specific countries.",
    date: "December 3, 2024",
  },
  {
    icon: "🇦🇺",
    tag: "Fee Update",
    title: "Visa Fee Increases",
    description: "Australia has announced a 10% increase in visa fees for work permits, effective from January 2025.",
    date: "December 1, 2024",
  },
  {
    icon: "🇮🇳",
    tag: "New Visa",
    title: "Special Visas",
    description: "India now offers special visas for officials. Read how to apply for the latest program.",
    date: "November 30, 2024",
  },
];

const tagColors: Record<string, string> = {
  "Policy Update": "bg-indigo-100 text-indigo-600",
  "Travel Guidelines": "bg-emerald-100 text-emerald-600",
  "Fee Update": "bg-rose-100 text-rose-600",
  "New Visa": "bg-amber-100 text-amber-600",
};

const VisaNewsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-full mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Visa News & Updates
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Stay informed with the latest visa policy changes and travel guidelines
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {newsUpdates.map((update: NewsUpdate, index: number) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{update.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[update.tag]}`}>
                    {update.tag}
                  </span>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap mt-1">{update.date}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {update.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {update.description}
              </p>

              <div className="flex items-center gap-1 text-indigo-500 text-sm font-medium">
                <span>Read more</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisaNewsSection;