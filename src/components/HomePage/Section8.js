import React from "react";
import { Link } from "react-router-dom";

const Section8 = () => {
  return (
    <div className="py-20 bg-gray-200">
      <div className="container max-w-maxContainer">
        <div className="md:text-5xl text-xl text-center text-black font-bold mb-8">
          Join Us For The Next Phase of #Re-generation
        </div>
        <div className="md:flex grid md:justify-center items-center gap-2 mt-16 md:mx-0 mx-4">
          <input
            type="text"
            placeholder="Your e-mail"
            className="p-4 border border-gray-500 rounded-md text-black md:w-96 w-full"
          />
          <Link to="/login">
            <button className="bg-black rounded-lg text-white px-4 py-3.5 text-center w-48 font-semibold md:h-[58px] h-12">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section8;
