import React, { useEffect } from "react";
import { allWeather } from "../constants/Data";
import Product from "./Product";

const AllWeather = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="relative">
      <img
        src="/assets/images/allWeather/banner.webp"
        className="md:h-[30rem] h-full w-full"
      />
      <div className="text-yellow-700 font-bold text-6xl absolute top-32 left-[52rem]">
        Sustainable.
      </div>
      <div className="font-bold text-5xl absolute top-[13rem] text-yellow-700 left-[53rem]">
        Oh So Comfy!
      </div>
      <div className="text-yellow-700 font-semibold absolute top-[18rem] left-[57rem]">
        The Weekend Boot™
      </div>
      <div className="container max-w-maxContainer py-20">
        <div className="flex justify-between items-center mb-10 md:px-0 px-4">
          <span className="font-semibold md:text-5xl text-xl pl-5">
            All Weather
          </span>
          <div className="text-gray-500">13 products</div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-2 gap-5">
          {allWeather?.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWeather;
