import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <>
      <div className="md:py-20 container max-w-maxContainer py-0">
        <div className="grid md:gap-20 gap-12 md:my-0 my-12">
          <div className="grid gap-5">
            <span className="md:text-5xl text-xl underline font-semibold text-center md:leading-[4rem] leading-6">
              Find Your Size. Free Shipping. <br /> Easy Returns.
            </span>
          </div>
          <div className="grid md:grid-cols-[1fr,0.5fr] grid-cols-1 gap-20">
            <img
              src="/assets/images/home/frame3.webp"
              className="h-[30rem] w-full"
            />
            <div className="grid gap-3 justify-items-center items-center">
              <span className="text-5xl font-extrabold text-center leading-[4rem]">
                No Virgin Plastic. <br /> More Nature. <br /> Less Waste.
              </span>
              <Link to="/allweather">
                <button className="rounded-3xl px-8 py-3.5 bg-black text-white font-semibold cursor-pointer">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
