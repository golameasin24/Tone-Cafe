// import React from "react";import { useState } from "react";

import { useState } from "react";
import { Link } from "react-router";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#2F2E2E] border-t-[0.1px] border-b-[0.1px] border-white  text-primary">
      {/* Hamburger button – only visible on small screens */}
      <div className="sm:hidden flex justify-between items-center px-4 py-2">
        {/* <span className="text-lg font-semibold font-cursive">menu</span> */}
        <button
          onClick={() => setOpen(!open)}
          className="text-primary focus:outline-none"
          aria-label="Toggle navigation"
        >
          {open ? (
            // ⬆️ When open: show "X" or close icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // 🍔 When closed: show "hamburger" icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* The actual menu */}
        <ul
          className={`
            flex flex-col sm:flex-row justify-center gap-0 sm:gap-5 text-lg
            transition-all duration-300 overflow-hidden

            ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}

            sm:max-h-full sm:opacity-100 sm:pointer-events-auto sm:flex
            py-2
          `}
        >
          <li><Link to="/" className="block px-4 py-2 hover:text-primary duration-200">Home</Link></li>
          <li><Link to="/menu" className="block px-4 py-2 hover:text-primary duration-200">Menu</Link></li>
          <li><Link to="#" className="block px-4 py-2 hover:text-primary duration-200">Contact Us</Link></li>
          <li><Link to="#" className="block px-4 py-2 hover:text-primary duration-200">Events</Link></li>
          <li><Link to="#" className="block px-4 py-2 hover:text-primary duration-200">Shop</Link></li>
        </ul>
    </nav>
  );
}

export default Navigation