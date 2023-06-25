import { Box } from "@mui/material";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

const Banner = () => {
  return (
    <Box>
      <div className="flex z-99 items-center justify-between gap-4 bg-purple-600  py-2  text-white">
        <div className="text-sm font-medium flex flex-row gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
        </div>

        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <FaPhone />
            <p>000- 12345678</p>
          </div>
          <div className=" items-center gap-2 hidden lg:flex">
            <FaMailBulk />
            <p>info@exmaple.com</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Banner;
