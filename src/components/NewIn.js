import React, { useEffect } from "react";
import { allWeather } from "../constants/Data";
import Product from "./Product";

const NewIn = () => {
  const visibleData = allWeather?.slice(0, 7);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative">
      <img
        src="/assets/images/newIn/img1.webp"
        className="md:h-[28rem] h-full w-full"
      />
      <div className="text-white font-bold md:text-5xl text-xl absolute top-52 left-[53rem]">
        New In
      </div>
      <div className="container max-w-maxContainer py-20">
        <div className="flex justify-between items-center mb-10 md:px-0 px-4">
          <span className="font-semibold md:text-5xl text-xl">New</span>
          <div className="text-gray-500">7 products</div>
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

export default NewIn;
