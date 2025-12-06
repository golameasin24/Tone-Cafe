

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-16  px-5 lg:px-10"
    
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-serif mb-6 text-[#C6A667]">
            Location & Hours
          </h2>

          <div className="flex items-start gap-3 mb-4">
            <MapPin className="text-[#C6A667]" />
            <p className="text-lg">265 Neptune Ave Brooklyn NY 1123</p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Phone className="text-[#C6A667]" />
            <p className="text-lg">+1 718 332 8082</p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Mail className="text-[#C6A667]" />
            <p className="text-lg">georgianbreadny@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#C6A667] mt-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <form className="space-y-5">
            {/* First + Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 bg-white text-black outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 bg-white text-black outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 bg-white text-black outline-none"
            />

            {/* Message */}
            <textarea
              placeholder="Message"
            //   rows= "1"
              className="w-full p-3 bg-white text-black outline-none"
            ></textarea>

            {/* Send Button */}
            <div className="flex justify-start md:justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#A8814A] text-white font-medium hover:bg-[#8f6c3c] duration-150"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
