import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <div
      className={`grid ${item?.isSecond && "md:mt-10"}`}
      key={item.id}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <img
        src={cardHovered ? item?.imgBack : item?.img}
        className="w-full h-[350px] md:rounded-tl-md md:rounded-tr-md transition-transform transform-gpu duration-300 ease-in-out"
        alt={item.name}
      />
      <div className="grid gap-5 p-4 bg-gray-100 items-start md:rounded-bl-md md:rounded-br-md">
        <span className="text-base font-semibold pt-2">{item.name}</span>
        <span className="text-sm pt-2">{item.desc}</span>
        {item.price && (
          <span className="text-base text-gray-500">
            Rs.{" "}
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 6,
            }).format(item?.price)}
          </span>
        )}
        {item.addToCart ? (
          <Link to={`/products/${item.id}`}>
            <button className="rounded-lg w-full px-3 py-1.5 text-white bg-black h-[48px] hover:bg-gray-200 hover:text-black border border-gray-400 hover:shadow-xl">
              Add to Cart
            </button>
          </Link>
        ) : (
          <Link to={item.link}>
            <span className="text-sm flex items-center cursor-pointer">
              Shop Now <MdArrowRightAlt className="text-xl ml-2" />{" "}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Product;
