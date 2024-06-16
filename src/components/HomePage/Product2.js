import React from "react";
import { allWeather } from "../../constants/Data";
import Product from "../Product";

const Product2 = () => {
  const visibleData = allWeather.slice(0, 3);
  return (
    <>
      <div className="container max-w-maxContainer pb-20">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-5">
          {visibleData?.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product2;
