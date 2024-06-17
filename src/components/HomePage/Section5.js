import React from "react";
import { MdOutlineStar } from "react-icons/md";

const Section5 = () => {
  return (
    <div className="container max-w-maxContainer pb-20">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="px-10 grid gap-10 justify-items-center items-center">
          <div className="text-center">
            <div className="flex gap-1 justify-center py-10">
              <MdOutlineStar className="text-green-500" />
              <MdOutlineStar className="text-green-500" />
              <MdOutlineStar className="text-green-500" />
              <MdOutlineStar className="text-green-500" />
              <MdOutlineStar className="text-green-500" />
            </div>
            <div className="text-center text-xl">
              <i className="text-gray-500">
                "The Weekend Boots have a very nice padding in the sole which
                makes it comfortable to wear for long periods of time and these
                shoes definitely fit very true to size."
              </i>
            </div>
            <div className="text-center text-gray-500 pt-10 md:pb-0 pb-4">
              CLAIRE
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/images/new/product6.webp" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
