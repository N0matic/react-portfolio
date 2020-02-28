import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active; bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "nav-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            }
          >
            About
            </Link>
        </li>
        <li className="-mb-px mr-1">
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active; bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "nav-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            }
          >
            Contact
            </Link>
        </li>
        <li className="-mb-px mr-1">
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active; bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "nav-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            }
          >
            Portfolio
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar





// Switch case for active tab

// if what? then -> that tab becomes active