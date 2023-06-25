import React from "react";
import pup from "../assets/images/pup.png";

import award from "../assets/images/medal.png";
import brand from "../assets/images/brand.png";
import shop from "../assets/images/shop.png";
import { Box } from "@mui/material";
const Stats = () => {
  return (
    <Box>
      <div className="  rounded-md flex items-center justify-center  bg-purple-600 px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-10">
        <div className="grid grid-cols-2 gap-20 md:grid-cols-4">
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8">
              <img src={pup} alt="pup" />
            </div>
            <div className="text-start">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                120+
              </h6>
              <p className="font-bold text-sm">Subscribed clients</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8">
              <img src={award} alt="pup" />
            </div>
            <div className="text-start">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                20+
              </h6>
              <p className="font-bold text-sm">Years Experinece</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8">
              <img src={brand} alt="pup" />
            </div>
            <div className="text-start">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                70+
              </h6>
              <p className="font-bold text-sm">Brands Avaliable</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8">
              <img src={shop} alt="pup" />
            </div>
            <div className="text-start">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                200+
              </h6>
              <p className="font-bold text-sm">Products for Pets</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Stats;
