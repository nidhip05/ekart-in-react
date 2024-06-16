import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1 className="mb-5 font-semibold text-4xl">Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="">
            <form>
              <div className="mb-5 grid gap-1">
                <label htmlFor="exampleForm" className="text-lg font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="p-4 border border-gray-500 rounded-md text-black w-96"
                />
              </div>
              <div className="mb-5 grid gap-1">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="text-lg font-semibold"
                >
                  Email address
                </label>
                <input
                  type="text"
                  placeholder="john@gmail.com"
                  className="p-4 border border-gray-500 rounded-md text-black w-96"
                />
              </div>
              <div className="mb-5 grid gap-1">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="text-lg font-semibold"
                >
                  Ask Question
                </label>
                <textarea
                  className="border border-gray-400 rounded-lg"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button className="bg-black rounded-xl text-white px-4 py-3.5 text-center w-48 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
