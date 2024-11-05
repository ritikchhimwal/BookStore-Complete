import React from "react";

const Banner = () => {
  return (
    <>
      <div className="mb-16 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-10 md:mt-28 order-2 md:order-1">
          <div className="space-y-8 mt-10">
            <h1 className="text-4xl font-semibold">
              Where Every Book{" "}
              <span className="text-pink-500">Opens a Door</span> to Endless
              <span className="text-green-600"> Adventures</span> and
              Unforgettable Journeys!
            </h1>
            <p className="md:text-xl">
              Welcome to bookHive, your ultimate destination for book lovers!
              Whether you’re searching for timeless classics, contemporary
              bestsellers, or hidden literary gems, we have something for every
              reader.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Submit</button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center order-1 mt-4">
        <img src="./book.png" className="w-100 h-100"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
