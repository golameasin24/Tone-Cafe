// import React from 'react';


import { Facebook } from "lucide-react";

import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoFlowerOutline } from "react-icons/io5";
function FoodShow() {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center bg-cover"
      style={{ backgroundImage: "url('/img/bigladdu.png')" }}
    >
            <div className="flex gap-3 justify-center items-center relative top-7">
                <Facebook className="bg-gray-500 p-1 size-7 rounded-full" />
                <FaYoutube className="bg-gray-500 p-1 size-7 rounded-full" />
                <FaTwitter className="bg-gray-500 p-1 size-7 rounded-full" />
                <IoLogoWhatsapp className="bg-gray-500 p-1 size-7 rounded-full" />
                <IoFlowerOutline className="bg-gray-500 p-1 size-7 rounded-full" />
            </div>
    </div>
  );
}

export default FoodShow;
