import React, { useEffect } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const state = useSelector((state) => state.addItem);
  let total = 0;
  const itemList = (item) => {
    console.log(item, "item");
    total += item.price;
    return (
      <div className="border border-gray-300 px-4 py-5 rounded-md">
        <p className="font-semibold text-base leading-5 mb-5">{item.name}</p>
        <p className="text-gray-500 text-sm text-end">
          Rs.{" "}
          {new Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 6,
          }).format(item?.price)}
        </p>
      </div>
    );
  };
  return (
    <div className="container max-w-maxContainer grid md:grid-cols-[1fr,0.5fr] gap-10">
      <div className="md:py-10 py-5 md:px-0 px-5">
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-semibold">Contact</p>
          <p className="text-base">
            Have an account?{" "}
            <Link to="/login">
              <span className="text-blue-500 underline ml-1">Login</span>
            </Link>
          </p>
        </div>
        <div className="text-gray-500 text-base my-5">Shipping address</div>
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            placeholder="First name"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="Address"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="City"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="number"
            placeholder="PIN code"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
          <input
            type="number"
            placeholder="Mobile number"
            className="p-4 border border-gray-400 rounded-md text-gray-400 w-full"
          />
        </div>
        <div className="flex justify-between items-center mt-5">
          <Link to="/allweather">
            <p className="text-blue-700 text-sm flex items-center cursor-pointer">
              <RiArrowLeftSLine className="text-lg text-blue-700" />
              Return to cart
            </p>
          </Link>
          <button className="bg-blue-700 text-blue px-5 py-2.5 rounded-md text-sm text-white">
            Continue to shipping
          </button>
        </div>
      </div>
      <div className="bg-gray-100 py-10 px-5">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-2xl">Your cart</p>
          {state.length !== 0 ? (
            <p className="rounded-full p-1 text-sm text-white bg-black h-6 w-6 flex items-center justify-center">
              {state.length}
            </p>
          ) : (
            <span>CART IS EMPTY!!!</span>
          )}
        </div>
        <div className="my-5 grid gap-4">{state.map(itemList)}</div>
        {total !== 0 && (
          <div className="text-lg">
            Total:{" "}
            <span className="text-gray-500 ml-2">
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 6,
              }).format(total)}
            </span>
          </div>
        )}
      </div>
      </div>
  );
};

export default Checkout;
