import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Lottie from 'lottie-react';
import registerAnimation from '../assets/register.json';

const Register = () => {
  const auth = useContext(authContext);
  const handleSignUp = auth?.handleSignUp;

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    const Email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const Password = (form.elements.namedItem('password') as HTMLInputElement).value;

    setErrorMessage('');
    setSuccess(false);

    if (Password.length < 6) {
      setErrorMessage('Password should be 6 characters or longer');
      return;
    }
    if (!/[a-z]/.test(Password)) {
      setErrorMessage('Password must contain at least one lowercase letter');
      return;
    }
    if (!/[A-Z]/.test(Password)) {
      setErrorMessage('Password must contain at least one uppercase letter');
      return;
    }

    handleSignUp?.(Email, Password)
      .then(() => {
        setSuccess(true);
        navigate('/');
        form.reset();
      })
      .catch((error: Error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="fixed top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-indigo-100/50 border border-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center">
                <Lottie
                  animationData={registerAnimation}
                  loop={true}
                  className="w-full max-w-xs mx-auto"
                />
                <h2 className="text-2xl font-extrabold text-white mt-2">
                  Join Visa Navigator
                </h2>
                <p className="text-indigo-200 text-sm mt-2 max-w-xs leading-relaxed">
                  Create your free account and explore visa options for 190+ countries worldwide.
                </p>
                <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/20">
                  {[{ value: '190+', label: 'Countries' }, { value: '50K+', label: 'Users' }, { value: 'Free', label: 'Forever' }].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-white font-extrabold text-lg">{stat.value}</p>
                      <p className="text-indigo-200 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div>
                  <span className="text-gray-900 font-bold">Visa</span>
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold ml-0.5">Navigator</span>
                </div>
              </div>
              <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">Create account</h1>
                <p className="text-gray-400 text-sm mt-1">Fill in your details below to get started</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-indigo-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Photo URL
                    </label>
                    <input
                      type="url"
                      name="url"
                      placeholder="https://photo.url"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-indigo-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-indigo-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Min. 6 characters"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-indigo-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                    </button>
                  </div>
                  <div className="flex gap-4 mt-2">
                    {['6+ chars', 'Uppercase', 'Lowercase'].map((hint) => (
                      <span key={hint} className="text-xs text-gray-300 flex items-center gap-1">
                        <span className="w-1 h-1 bg-gray-300 rounded-full inline-block" />
                        {hint}
                      </span>
                    ))}
                  </div>
                </div>
                {errorMessage && (
                  <div className="flex items-start gap-3 px-4 py-3 bg-red-50 border border-red-100 rounded-xl">
                    <span className="text-red-400 mt-0.5">⚠</span>
                    <p className="text-red-500 text-sm leading-relaxed">{errorMessage}</p>
                  </div>
                )}
                {success && (
                  <div className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-100 rounded-xl">
                    <span className="text-green-500">✓</span>
                    <p className="text-green-600 text-sm font-medium">Account created successfully!</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 text-sm tracking-wide mt-2"
                >
                  Create Account →
                </button>

              </form>
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-gray-300 text-xs font-medium">Already have an account?</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <NavLink to="/login">
                <button className="w-full py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-600 font-semibold rounded-xl transition-all duration-300 text-sm">
                  Sign In to existing account
                </button>
              </NavLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;