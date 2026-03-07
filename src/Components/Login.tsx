import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const auth = useContext(authContext);
  const handleSignIN = auth?.handleSignIN;
  const handleGoogleLogin = auth?.handleGoogleLogin;

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    const Email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const Password = (form.elements.namedItem('password') as HTMLInputElement).value;

    setErrorMessage('');
    setSuccess(false);

    handleSignIN?.(Email, Password)
      .then(() => {
        setSuccess(true);
        navigate('/');
        form.reset();
      })
      .catch((error: Error) => {
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  const handleLogin = (): void => {
    handleGoogleLogin?.()
      .then(() => {
        navigate('/');
      })
      .catch((error: Error) => {
        console.log('ERROR', error);
      });
  };

  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-5">
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl font-bold ml-10">Login now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn absolute right-3 top-12 btn-xs"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <label className="label">
                  <NavLink to="/forget password" className="label-text-alt link link-hover">
                    Forgot password?
                  </NavLink>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p className="ml-5 mb-5 mr-3">
              New to this website? Please{' '}
              <button className="btn btn-sm bg-blue-600 text-white">
                <NavLink to="/register">Register</NavLink>
              </button>
            </p>
            <div className="flex justify-center items-center">
              <button onClick={handleLogin} className="flex items-center justify-center">
                <FcGoogle size={40} />
                Login with Google
              </button>
            </div>
            {errorMessage && <p className="text-red-600 text-lg">{errorMessage}</p>}
            {success && <p className="text-green-600 text-lg ml-20">Login Successfully</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;