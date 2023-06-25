import React from "react";

import dog from "../assets/images/dog.png";
import { FaBus } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { Box } from "@mui/material";

const Hero2 = () => {
  return (
    <section className=" text-gray-700">
      <Box>
        <div className="custom-shape-divider-top-1687626123">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-purple-700 capitalize font-bold">
              {" "}
              WE CARE FOR YOUR PETS
            </p>
            <h1 className="text-5xl font-bold leadi sm:text-[3.5rem]">
              We help you care
              <br />
              for animals with nutrition
            </h1>
            <p className="mt-6 mb-8 text-sm sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline " />
              turpis pulvinar, est scelerisque ligula sem
              <br className="hidden md:inline " />
              hey,wshsyus eduuqsj suuwnzna
            </p>
            <div className="grid grid-cols-2 mx-auto gap-4 lg:mx-0">
              <div>
                {" "}
                <div className="flex flex-row items-center  gap-2 ">
                  <div className="flex items-center justify-center h-8 w-8 rounded-sm border border-gray-400 bg-slate-200 text-purple-700">
                    <FaBus />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold">Trust & Safety</h3>{" "}
                    <p className="text-sm">Veilit enumod pellum</p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div className=" flex items-center justify-center h-8 w-8 rounded-sm border border-gray-400 bg-slate-200 text-purple-700">
                    <CiDiscount1 />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold">Discount</h3>{" "}
                    <p className="text-sm">Bless me with d job</p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center justify-center h-8 w-8 rounded-sm border border-gray-400 bg-slate-200 text-purple-700">
                    <MdSupportAgent />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold">Support</h3>{" "}
                    <p className="text-sm">Expecto Patrolam</p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center justify-center h-8 w-8 rounded-sm border border-gray-400 bg-slate-200 text-purple-700">
                    <SiAdguard />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold">Gurrantee</h3>{" "}
                    <p className="text-sm">Your gotta hire me</p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="relative mx-5 lg:w-96">
              <img src={dog} className="relative mx-auto " alt="Hero Image" />
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Hero2;
