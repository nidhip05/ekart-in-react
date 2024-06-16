import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container max-w-maxContainer py-10">
      <div className="text-center">
        {!showSignup ? (
          <>
            <div className="md:text-5xl text-xl font-semibold mb-10">Login</div>
            <div className="grid gap-4 justify-items-center md:px-0 px-4">
              <input
                type="text"
                placeholder="Email"
                className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
              />
              <input
                type="text"
                placeholder="Password"
                className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
              />
              <p className="underline text-black mb-5">Forget Password</p>
            </div>
            <div className="grid justify-items-center mt-16">
              <Link to="/">
                <button className="bg-black rounded-2xl text-white px-4 py-3.5 text-center w-48 font-semibold">
                  Sign In
                </button>
              </Link>
              <button
                className="mt-5 underline text-sm text-center cursor-pointer"
                onClick={() => setShowSignup(true)}
              >
                Create account
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="md:text-5xl text-xl font-semibold mb-10">
              Create account
            </div>
            <div className="grid gap-4 justify-items-center md:px-0 px-4">
              <input
                type="text"
                placeholder="First name"
                className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
              />
              <input
                type="text"
                placeholder="Password"
                className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
              />
            </div>
            <Link to="/">
              <button className="bg-black rounded-2xl text-white px-4 py-3.5 text-center w-48 font-semibold mt-10">
                Create
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
