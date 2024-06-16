import React, { useEffect } from "react";
import { FaInstagram, FaPinterest, FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="py-10 bg-green-950 text-white">
      <div className="container max-w-maxContainer">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-12 items-start md:px-0 px-4">
          <div className="grid gap-5">
            <img src="/assets/images/footerLogo.webp" className="h-20 w-44" />
            <div className="font-semibold text-lg leading-6">
              Socially and environmentally <br /> progressive outdoor footwear
            </div>
            <div className="flex items-center gap-8 mt-10">
              <ImFacebook2 className="text-white text-xl" />
              <FaInstagram className="text-white text-xl" />
              <FaTwitterSquare className="text-white text-xl" />
              <FaPinterest className="text-white text-xl" />
            </div>
          </div>
          <div className="grid gap-3">
            <span className="cursor-pointer font-semibold text-lg mb-3">
              Our Shop
            </span>
            <Link to="/allweather">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                All Products
              </span>
            </Link>
            <Link to="/newin">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                The Weekend Boot™
              </span>
            </Link>
            <Link to="/rain">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                The Anyday Rain Boot™
              </span>
            </Link>
            <Link to="/snow">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                The Modern Winter Boot™
              </span>
            </Link>
          </div>
          <div className="grid gap-3">
            <span className="cursor-pointer font-semibold text-lg mb-3">
              Help
            </span>
            <Link to="/">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                Size guide
              </span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                Shipping Policy
              </span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                Refund Policy
              </span>
            </Link>
            <Link to="/">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                Wear and Care FAQ
              </span>
            </Link>
          </div>
          <div className="grid gap-3">
            <span className="cursor-pointer font-semibold text-lg mb-3">
              Our Shop
            </span>
            <Link to="/">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                Values
              </span>
            </Link>
            <Link to="/contact">
              <span className="cursor-pointer text-sm text-slate-100 hover:underline">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
