import React from "react";
import dog4 from "../assets/images/dog4.png";

import pup2 from "../assets/images/pup2.png";
import pup3 from "../assets/images/pup3.png";
import { Box } from "@mui/material";

const Gallery = () => {
  return (
    <section className="  py-10">
      <Box>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
          <div className="col-span-2 h-25 bg-pink-300 ">
            <div className="flex justify-end mt-8 px-9">
              <button
                type="button"
                className="text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Up to 40% off
              </button>
            </div>
            <div className="container flex flex-col justify-center p-4 mx-auto sm:py-2 lg:py-4 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="px-4 text-2xl font-bold leadi sm:text-2xl">
                  Check Out <br /> Our Specials
                </h1>
                <p className="px-4 mt-3 mb-5 text-xs sm:mb-12">
                  Dictum aliquam porta in <br />
                  condimentum ac integer
                  <br />
                  turpis pulvinar,
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar,
                </p>
                <div>
                  <button
                    type="button"
                    className="text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                  >
                    Shop Now
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>{" "}
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-90 xl:h-112 2xl:h-128">
                <img
                  src={dog4}
                  alt=""
                  className="object-contain h-70 sm:h-80 lg:h-90 xl:h-100 2xl:h-120"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="bg-yellow-500 ">
              {" "}
              <div className="container flex flex-col justify-center p-1 mx-auto sm:py-2 lg:py-1 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="px-1 text-sm font-bold leadi sm:text-2xl w-[100%]">
                    luxury Fashion collection
                  </h1>

                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center "
                    >
                      Shop Now
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>{" "}
                  </div>
                </div>
                <div className="h-42 lg:h-52 bg-blue-600 rounded-[20%] z-30">
                  <div className="flex items-center justify-center p-2 mt-2 lg:mt-5 ">
                    <img
                      src={pup3}
                      alt=""
                      className="object-contain lg:h-full h-25  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500 h-full">
              {" "}
              <div className="container flex flex-col justify-center p-1 mx-auto sm:py-2 lg:py-1 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="px-1 text-sm font-bold leadi sm:text-2xl w-[100%]">
                    Shop Whats Trending
                  </h1>

                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center "
                    >
                      Shop Now
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>{" "}
                  </div>
                </div>
                <div className="h-42 lg:h-52 bg-pink-300 rounded-[20%] z-30">
                  <div className="flex items-center justify-center  p-2 mt-2 lg:mt-5 ">
                    <img
                      src={pup2}
                      alt=""
                      className="object-contain lg:h-full h-29 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Gallery;
