import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { allWeather } from "../constants/Data";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [cartBtn, setCartBtn] = useState("Add to Cart");
  {
    /* Now we need a product id which is pass from the product page. */
  }
  const proid = useParams();
  const proDetail = allWeather.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container md:my-5 md:py-3 pb-3 mb-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="">
            <img
              src={product.img}
              alt={product.title}
              className="h-full w-full"
            />
          </div>
          <div className="md:px-0 px-4">
            <p className="tracking-wide mb-5">THESUS</p>
            <p className="md:text-5xl text-xl font-semibold mb-4 tracking-tight">
              ✨ The Allegra <br /> Weekend Boot
            </p>
            <h1 className="my-5 md:text-lg text-sm font-semibold font-sans">
              {product.name}
            </h1>
            <h2 className="md:text-lg text-sm tracking-wide text-gray-600 font-semibold flex items-center gap-2 mb-4">
              Rs.{" "}
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 6,
              }).format(product?.price)}{" "}
              <span className="rounded-2xl px-3 py-1.5 bg-red-600 text-white text-sm ml-2">
                Sale
              </span>
            </h2>
            <h2 className="mt-1 mb-5 md:text-base text-sm">
              <span className="underline text-gray-600">Shipping</span>{" "}
              <span className="text-gray-600">calculated at checkout.</span>
            </h2>
            <p className="text-gray-500 my-5 md:text-lg text-sm leading-6">
              Comfy all day. Cozy all year. Wear them with anything.
            </p>
            <p className="text-gray-500 my-5 md:text-lg text-sm leading-6">
              The Weekend Boots are vegan and sustainably made with over 95%
              natural and recycled materials. Their minimalist yet versatile
              design is made to take you wherever your day ends up - on a trail,
              in the park, at brunch or errands in the city, they've got you
              covered.
            </p>
            <button
              onClick={() => handleCart(product)}
              className="rounded-3xl w-80 px-3 py-1.5 text-black border-black border h-[48px] hover:bg-black hover:text-white mt-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
