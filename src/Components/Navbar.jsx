import React from "react";
import { Link, NavLink } from "react-router";
import { VscGithub } from "react-icons/vsc";
import logo from "../assets/logo.png";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `m-2 px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
      isActive
        ? "bg-purple-600 text-white shadow-md"
        : "text-gray-700 hover:bg-purple-100"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold select-none">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
        <ul className="hidden lg:flex gap-2">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/apps" className={linkClasses}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={linkClasses}>
            Installation
          </NavLink>
        </ul>
        <a
          href="https://github.com/siyamsikder"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90 transition-shadow shadow-md">
          <VscGithub size={22} />
          Contribute
        </a>
        <div className="lg:hidden relative">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="btn btn-ghost p-2 rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md opacity-0 peer-checked:opacity-100 transition-opacity duration-300 z-50 flex flex-col p-2">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/apps" className={linkClasses}>
              Apps
            </NavLink>
            <NavLink to="/installation" className={linkClasses}>
              Installation
            </NavLink>
            <a
              href="https://github.com/siyamsikder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-semibold px-3 py-2 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 mt-2">
              <VscGithub size={20} /> Contribute
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
