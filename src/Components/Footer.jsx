import React from "react";
import logo from "../assets/logo.png"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[rgba(159,98,242,1)] to-[rgba(99,46,227,1)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded"
            />
            <span className="text-2xl font-bold">HERO.IO</span>
          </Link>
          <p className="mt-3 text-sm text-gray-100">
            Discover the best apps built with innovation and creativity.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className="hover:underline">
                All Apps
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8">
        <p className="text-center text-sm py-4">
          © {new Date().getFullYear()} HERO.IO — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
