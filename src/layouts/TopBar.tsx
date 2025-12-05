import { Facebook } from "lucide-react";
import { BsCart4 } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoFlowerOutline } from "react-icons/io5";



function TopBar() {
  return (
    <header className="bg-[#2F2E2E] py-2">
        <div className="flex flex-col lg:flex-row justify-around gap-5 lg:gap-0 ">

            {/* Left Section */}
            <div className="text-center lg:text-left">
            <div className="text-primary">
                <p>265 Neptune Ave</p>
                <p>Brooklyn NY 11235</p>
            </div>
            <div className="flex justify-center lg:justify-start mt-3">
                <img className="w-[100px]" src="/img/tone1.avif" alt="picture" />
            </div>
            </div>

            {/* Middle Logo + Social Icons */}
            <div className="text-center">
            <div className="flex justify-center text-primary font-custom font-bold text-[40px] sm:text-[50px] items-center">
                <h1>TONE</h1>
                <img className="w-[80px] sm:w-[100px]" src="/img/GB-Logo.avif" alt="picture" />
                <h4>CARE</h4>
            </div>

            <div className="flex gap-2 justify-center mt-5">
                <Facebook className="bg-gray-500 p-1 size-7 rounded-full" />
                <FaYoutube className="bg-gray-500 p-1 size-7 rounded-full" />
                <FaTwitter className="bg-gray-500 p-1 size-7 rounded-full" />
                <IoLogoWhatsapp className="bg-gray-500 p-1 size-7 rounded-full" />
                <IoFlowerOutline className="bg-gray-500 p-1 size-7 rounded-full" />
            </div>
            </div>

            {/* Right Button & Cart */}
            <div className="flex gap-5 items-center lg:items-end justify-center lg:justify-start">
            <button className="bg-primary px-5 py-2">Order Online</button>
            <BsCart4 className="text-primary size-10" />
            </div>

        </div>
        <div>
          
        </div>
    </header>
  );
}

export default TopBar;
