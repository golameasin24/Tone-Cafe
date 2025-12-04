import React from "react";

function Navigation() {
  return (
    <nav className="bg-[#2F2E2E] border-t border-b-white border-b-1 mt-6">
      <ul className="flex flex-col sm:flex-row justify-around gap-0 sm:gap-10 text-lg hover:text-gray-300 py-2">
        <li><a href="#" className="hover:text-primary duration-200">Home</a></li>
        <li><a href="#" className="hover:text-primary duration-200">Menu</a></li>
        <li><a href="#" className="hover:text-primary duration-200">Contact Us</a></li>
        <li><a href="#" className="hover:text-primary duration-200">Events</a></li>
        <li><a href="#" className="hover:text-primary duration-200">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
