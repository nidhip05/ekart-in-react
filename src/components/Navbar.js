import React from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const router = useLocation();
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <div className="sticky top-0 w-full bg-white shadow-lg z-20">
        <div className="py-4 md:px-0 px-4 container max-w-maxContainer md:flex items-center md:gap-5 gap-2 md:justify-between grid">
          <div className="md:flex grid items-center md:gap-16 gap-5 product">
            <Link to="/">
              <img
                src="https://thesusoutdoors.com/cdn/shop/files/THESUS-LOGO1.png?v=1695740838&width=200"
                className="md:h-16 md:w-56 cursor-pointer h-12 w-40"
              />
            </Link>
            <div className="flex md:justify-start justify-between md:gap-10 gap-2 items-center">
              <Link to="/newin">
                <span
                  className={`text-gray-600 md:text-base text-sm cursor-pointer hover:underline ${
                    router.pathname == "/newin" ? "underline" : ""
                  }`}
                >
                  New
                </span>
              </Link>
              <Link to="/rain">
                <span
                  className={`text-gray-600 md:text-base text-sm cursor-pointer hover:underline ${
                    router.pathname == "/rain" ? "underline" : ""
                  }`}
                >
                  Rain
                </span>
              </Link>
              <Link to="/snow">
                <span
                  className={`text-gray-600 md:text-base text-sm cursor-pointer hover:underline ${
                    router.pathname == "/snow" ? "underline" : ""
                  }`}
                >
                  Snow
                </span>
              </Link>
              <Link to="/allweather">
                <span
                  className={`text-gray-600 md:text-base text-sm cursor-pointer hover:underline ${
                    router.pathname == "/allweather" ? "underline" : ""
                  }`}
                >
                  All Weather
                </span>
              </Link>
            </div>
          </div>
          <div className="flex md:justify-center justify-between items-center gap-2">
            <Link to="/login">
              <CiUser className="md:text-2xl text-lg text-gray-600 cursor-pointer" />
            </Link>
            <Link to="/cart">
              <div className="relative">
                <CiShoppingCart className="md:text-3xl text-xl text-gray-500 cursor-pointer" />
                {state.length !== 0 && (
                  <span className="absolute -bottom-2 md:-right-4 -right-2 text-xs text-white font-semibold bg-black rounded-full px-1 md:h-5 h-3 md:w-5 w-3 flex items-center justify-center">
                    {state.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
