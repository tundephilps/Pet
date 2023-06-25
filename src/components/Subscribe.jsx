import React from "react";

import pup2 from "../assets/images/pup2.png";
import pup3 from "../assets/images/pup3.png";

const Subscribe = () => {
  return (
    <section className="relative bg-purple-700 m-auto ">
      <img
        className="absolute lg:flex hidden w-25 h-25 right-0 bottom-[20%]"
        src={pup2}
        alt=""
      />
      <img
        className="absolute lg:flex hidden w-15 h-15 bottom-[10%] z-[1]"
        src={pup3}
        alt=""
      />
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Get 20% off your first purchase <br /> when you use Petco Credit card
        </h2>

        <p className="max-w-3xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
          officiis reprehenderit, aperiam veritatis non, quod veniam fuga
          possimus hic explicabo laboriosam nam. A tempore totam ipsa nemo
          adipisci iusto!
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto items-center justify-center">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-transparent border border-white rounded-lg sm:mx-2 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Type your email"
            />

            <button className="px-6 py-2 text-sm tracking-wide text-black font-bold capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg focus:ring focus:ring-yellow-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-yellow-900 focus:outline-none focus:bg-yellow-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
