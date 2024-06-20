import React, { useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import config from "./config";
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const usernameref = useRef(null);
  const passwordref = useRef(null);
  const [error, setError] = React.useState('');

  const loginSubmit = async () => {
    const username = usernameref.current.value;
    const password = passwordref.current.value;

    if (username && password) {
      const data = { username, password };
      try {
        const response = await axios.post(`${config.baseurl}login/`, data, {
          headers: { 'Content-Type': 'application/json' },
        });
        Cookies.set('auth_token', response.data.token);
        // Determine navigation based on user role
        if (response.data.is_staff) {
          navigate('/admin', { state: { data: response.data } });
        } else if (response.data.user_type === '1') {
          navigate('/developer', { state: { data: response.data } });
        } else {
          navigate('/teamlead', { state: { data: response.data } });
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setError('Invalid credentials');
      }
    } else {
      setError("Enter username and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); loginSubmit(); }}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                ref={usernameref}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                ref={passwordref}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Not a member?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
