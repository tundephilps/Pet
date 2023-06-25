import { Box } from "@mui/material";
import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-12 mx-auto max-w-7xl">
      <Box>
        <div className="grid grid-cols-2 gap-10 mb-3  lg:grid-cols-4 lg:gap-20">
          <div className="col-span-1">
            <h1 className="text-purple-600 font-extrabold text-2xl gap-0">
              Pets <br /> Bonz
            </h1>
            <p className="my-4 text-xs leading-normal text-gray-500">
              Bring together your discussions, memberships, and content.
              Integrate a thriving community wherever your audience is, all
              under your own brand.
            </p>
            <div className="flex items-center flex-row gap-2">
              <div className="text-purple-600 text-xl">
                <FaPhone />
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-extrabold">(913)-283838-1828</h1>
                <p className="text-xs">Got any questions? call us.</p>
              </div>
            </div>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-1">
            <p className="mb-3  tracking-wider text-purple-600 text-1xl font-bold">
              Working Hours
            </p>

            <a
              href="#"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Mon - Fri: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7am - 6pm
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Saturday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9am - 4pm
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Sunday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed
            </a>
          </nav>

          <nav className="col-span-2 md:col-span-1 lg:col-span-1">
            <p className="mb-3 text-1xl   tracking-wider text-purple-600 text-1xl font-bold">
              Useful Link
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      Shop
                    </a>
                  </li>
                </ul>{" "}
              </div>

              <div>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      Delivery
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
                    >
                      Sales
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </nav>
          <div className="col-span-1">
            <p className="mb-3 text-1xl font-bold tracking-wider text-purple-600 ">
              Newsletter
            </p>
            <p className="text-xs pb-3">
              Be first in the queue! Get our latest news straight to your inbox
            </p>
            <form action="#" className="mb-2">
              <div className="flex flex-row items-center gap-3">
                <input
                  className="bg-white border border-gray-500 h-8 rounded-md px-2"
                  type="email"
                  placeholder="Email"
                />
                <button
                  className="bg-purple-600 py-2 px-2 rounded-md text-white"
                  type="submit"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
            <div className="flex flex-row gap-3 mt-3 text-2xl text-purple-600">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
            NOOT © All Rights Reserved Copyright 2023.
          </p>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
