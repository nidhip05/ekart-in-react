import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 justify-items-center grid-cols-1">
        <img
          src="/assets/images/home/frame1.webp"
          className="h-[35rem] w-full"
        />
        <img
          src="/assets/images/home/frame2.webp"
          className="h-[35rem] w-auto"
        />
      </div>
      <div className="bg-green-950 py-20 text-white grid justify-items-center gap-4 md:px-0 px-4">
        <span className="md:text-5xl text-2xl font-bold">“Thes-us”</span>
        <span className="md:text-xl text-sm font-semibold">
          (a theory, proven by community action)
        </span>
        <span className="md:text-xl text-sm font-semibold text-center">
          We help people connect to themselves, community and <br /> the Planet.
          #BeOutside
        </span>
      </div>
    </>
  );
};

export default Section1;
