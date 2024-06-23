import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { Link, NavLink } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="" key={cartItem.id}>
        <div className="grid grid-cols-[1fr,0fr] md:my-10 my-5 md:px-0 px-4">
          <div className="grid md:grid-cols-[auto,1fr] gap-5">
            <div className="">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                className="md:h-36 h-20 md:w-36 w-20 rounded-md"
              />
            </div>
            <div className="">
              <h3 className="font-semibold md:text-lg text-sm mb-2">
                {cartItem.name}
              </h3>
              <p className="md:text-base text-xs text-gray-500 mb-2">
                Rs.{" "}
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 6,
                }).format(cartItem?.price)}
              </p>
              <p className="md:text-base text-xs text-gray-500">Size: 39</p>
            </div>
          </div>
          <div>
            <button onClick={() => handleClose(cartItem)}>
              <RiDeleteBin6Line className="md:text-lg text-sm text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container max-w-container py-10">
          <div className="text-center">
            <p className="font-bold md:text-4xl text-lg">Your Cart is Empty</p>
            <Link to="/allweather">
              <button className="bg-black rounded-3xl text-white px-5 py-3.5 text-center md:w-48 w-full font-semibold h-[58px] mt-10">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const checkOutButton = () => {
    return (
      <div className="container max-w-maxContainer md:py-20 py-10 md:px-0 px-4">
        <div className="text-end">
          <NavLink
            to="/checkout"
            className="bg-black rounded-lg text-white hover:bg-white hover:text-black border border-black px-5 py-2.5 md:text-base text-sm"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && (
        <div className="container max-w-maxContainer md:py-10 py-2">
          <div className="flex justify-between items-center md:my-10 py-5 md:px-0 px-4">
            <h1 className="font-semibold text-black md:text-5xl text-lg">
              Your Cart
            </h1>
            <Link to="/allweather">
              <h1 className=" text-gray-500 md:text-lg text-sm underline">
                Continue Shopping
              </h1>
            </Link>
          </div>
          <hr />
          <div className="container md:my-10 my-5">
            <div className="flex justify-between items-center text-sm md:px-0 px-4">
              <p className="tracking-wide text-gray-500 md:text-base text-sm">
                PRODUCT
              </p>
              <p className="tracking-wide text-gray-500 md:text-base text-sm">
                REMOVE PRODUCT
              </p>
            </div>
          </div>
          <hr />
          {state.map(cartItems)}
        </div>
      )}
      {/* {state.length !== 0 && state.map(cartItems)} */}
      {state.length !== 0 && checkOutButton()}
    </>
  );
};

export default Cart;
