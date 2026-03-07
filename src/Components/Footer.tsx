
import { NavLink } from 'react-router-dom';

interface SocialLink {
  label: string;
  icon: string;
}

const socials: SocialLink[] = [
  {
    label: "Twitter",
    icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
  },
  {
    label: "YouTube",
    icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
  {
    label: "Facebook",
    icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Visa</span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg ml-0.5">Navigator</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your trusted partner for hassle-free visa applications worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href="#" aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    className="fill-gray-400 group-hover:fill-white transition-colors">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Quick Links</h6>
            <ul className="space-y-3">
              {[{ to: '/', label: 'Home' }, { to: '/all visas', label: 'All Visas' }, { to: '/add visa', label: 'Add Visa' }, { to: '/my add visas', label: 'My Visas' }].map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200 inline-block">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Company</h6>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Jobs', 'Press Kit'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">Contact</h6>
            <ul className="space-y-3">
              {[{ icon: "���", text: "support@visanav.com" }, { icon: "���", text: "+1 (800) 123-4567" }, { icon: "���", text: "New York, USA" }].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            {`© ${new Date().getFullYear()} Visa Navigator. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-indigo-400 text-sm transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
