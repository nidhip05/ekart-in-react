import React from "react";
import Product2 from "./Product2";

const Section4 = () => {
  return (
    <>
      <div className="container max-w-maxContainer md:py-20 pt-20 pb-0">
        <div className="grid gap-8 justify-items-center pb-20 md:px-0 px-10">
          <span className="font-bold md:text-6xl text-xl">Moving Fast</span>
          <span className="font-semibold md:text-2xl text-base text-center">
            Only a few sizes left. Get them before they're gone.
          </span>
        </div>
        <Product2 />
      </div>
    </>
  );
};

export default Section4;
