import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoFlowerOutline } from "react-icons/io5";

export default function FooterSection() {
  return (
    <footer className="bg-[#2F2E2E] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section - Mailing List */}
        <div className="bg-[#3A2D18] p-10 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Join our mailing list for updates
          </h2>

          <label className="block mb-2">
            Enter your email here*
          </label>

          <input
            type="email"
            className="w-full p-3 rounded bg-white text-black mb-4 focus:outline-none"
            placeholder="Email"
          />

          <button className="w-full bg-white text-black font-medium py-3 rounded hover:bg-gray-200 transition">
            Subscribe Now
          </button>
        </div>

        {/* Right Section - Social + Logo */}
        <div className="flex flex-col items-center md:items-end gap-6 lg:px-20">
          <div className="text-sm">
            ©2023 Tone Cafe. All Rights Reserved
          </div>

          <div className="flex gap-5 text-white text-2xl">
            <FaYoutube className="bg-gray-500 p-1 size-7 rounded-full" />
            <FaTwitter className="bg-gray-500 p-1 size-7 rounded-full" />
            <IoLogoWhatsapp className="bg-gray-500 p-1 size-7 rounded-full" />
            <IoFlowerOutline className="bg-gray-500 p-1 size-7 rounded-full" />
          </div>

          <img
            src="/img/tone1.avif"
            alt="Tone Cafe Logo"
            className="w-35 pr-10 h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
