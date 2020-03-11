import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-center sm:justify-between flex-wrap p-6">
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
      <h1 className="text-white bg-blue-500 text-4xl font-serif font-semibold p-2">Z|Naddaf</h1>
    </nav>
  )
}

export default withRouter(Navbar)