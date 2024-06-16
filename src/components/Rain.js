import React, { useEffect } from "react";
import { allWeather } from "../constants/Data";
import Product from "./Product";

const Rain = () => {
  const visibleData = allWeather?.slice(0, 5);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="relative">
      <img
        src="/assets/images/rain/banner.webp"
        className="md:h-[32rem] w-full object-fill h-full"
      />
      <div className="text-white font-bold md:text-5xl text-xl absolute top-60 left-[38rem]">
        Waterproof. City Essential.
      </div>
      <div className="container max-w-maxContainer py-20">
        <div className="flex justify-between items-center mb-10 md:px-0 px-4">
          <span className="font-semibold md:text-5xl text-xl pl-5">Rain</span>
          <div className="text-gray-500">5 products</div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-2 gap-5">
          {visibleData?.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rain;
