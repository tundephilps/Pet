import { Box } from "@mui/material";
import React from "react";
import { FaClock, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="py-6 flex items-center justify-center ">
      <Box>
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracki text-center text-purple-600 uppercase">
            OUR CONTACTS
          </p>
          <p className="p-2 text-3xl  tracki text-center font-bold ">
            Contacts
          </p>
          <p className="text-sm  leadi text-center ">
            The talented people behind the scenes
          </p>
          <div className="lg:grid flex flex-col items-center  lg:grid-cols-4 sm:grid-cols-1 justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <div className="flex items-center justify-center text-purple-700 hover:text-white self-center flex-shrink-0 w-20 h-20 -mt-12 bg-center bg-cover rounded-full bg-gray-200 hover:bg-purple-700">
                <FaPhone className="" />
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Phone</p>
                <p>+234 83203002</p>
                <p>+345 38394330</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <div className="flex items-center justify-center text-purple-700 hover:text-white self-center flex-shrink-0 w-20 h-20 -mt-12 bg-center bg-cover rounded-full bg-gray-200 hover:bg-purple-700">
                <FaMailBulk className="" />
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Email</p>
                <p>info@example.com</p>
                <p>petco@example.com</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <div className="flex items-center justify-center text-purple-700 hover:text-white self-center flex-shrink-0 w-20 h-20 -mt-12 bg-center bg-cover rounded-full bg-gray-200 hover:bg-purple-700">
                <FaLocationArrow className="" />
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Address</p>
                <p>17, Parkman palace 2287</p>
                <p>United States</p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
              <div className="flex items-center justify-center text-purple-700 hover:text-white self-center flex-shrink-0 w-20 h-20 -mt-12 bg-center bg-cover rounded-full bg-gray-200 hover:bg-purple-700">
                <FaClock className="" />
              </div>
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Open Hours</p>
                <p>Mon-Fri: 7am-6pm</p>
                <p>Sat: 1pm-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Contacts;
