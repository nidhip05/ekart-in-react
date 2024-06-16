import React, { useEffect } from "react";
import Product from "./Product";
import Section1 from "./HomePage/Section1";
import Section2 from "./HomePage/Section2";
import Section3 from "./HomePage/Section3";
import Section4 from "./HomePage/Section4";
import Section5 from "./HomePage/Section5";
import Section6 from "./HomePage/Section6";
import Section7 from "./HomePage/Section7";
import { productData } from "../constants/Data";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="md:container md:max-w-maxContainer w-full md:py-20">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-2 gap-5">
          {productData?.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Home;
