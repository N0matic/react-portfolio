import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <ul className="flex border-b">
        <li className="flex-1 mr-2">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active; text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                : "nav-link text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            }
          >
            About
            </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active; text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                : "nav-link text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
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