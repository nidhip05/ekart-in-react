import React, { useEffect } from "react";
import { allWeather } from "../constants/Data";
import Product from "./Product";

const Snow = () => {
  const visibleData = allWeather?.slice(0, 2);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="container max-w-maxContainer py-10">
        <div className="flex justify-between items-center mb-10 md:px-0 px-4">
          <span className="font-semibold md:text-5xl text-xl pl-5">Snow</span>
          <div className="text-gray-500">2 products</div>
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

export default Snow;
