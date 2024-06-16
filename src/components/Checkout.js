import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
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
    <div className="container max-w-maxContainer grid md:grid-cols-[1fr,0.5fr] gap-10 md:px-0 px-4">
      <div className="py-10">
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
      {/* <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">
              {state.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {state.map(itemList)}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>
          <form className="card p-2" id="product-card">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required=""
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required=""
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2{" "}
                  <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select className="form-select" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked=""
                  required=""
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required=""
                />
                <small className="text-body-secondary">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required=""
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </form> 
        </div>
  </div>*/}
    </div>
  );
};

export default Checkout;
