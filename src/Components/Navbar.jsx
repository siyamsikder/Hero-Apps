import React from "react";
import { Link } from "react-router";
import { VscGithub } from "react-icons/vsc";
import logo from "../assets/logo.png";
const Navbar = () => {
  const link = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <Link to="/apps">
        <li className="m-2">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="m-2">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {link}
          </ul>
        </div>
        <a className="flex justify-center items-center gap-2 text-xl">
          <img src={logo} alt="Logo" className="h-[40px] w-[40px]" />
          <span className="bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] bg-clip-text text-transparent font-bold">
            HERO.IO
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/siyamsikder"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white font-semibold btn rounded-sm bg-gradient-to-r to-[rgba(99,46,227,1)] from-[rgba(159,98,242,1)] hover:opacity-90 transition">
          <VscGithub size={22} />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
