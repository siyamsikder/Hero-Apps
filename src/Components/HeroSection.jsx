import React from "react";
import heroimg from "../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import banner from "../assets/banner.png";

const HeroSection = () => {
  return (
    <section className="bg-[#f8faff] py-10 text-center">
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>
          Apps
        </h1>
        <p className="text-gray-500 mt-4 leading-relaxed">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-5 py-3 shadow-sm hover:shadow-md hover:scale-105 transition transform">
              <FaGooglePlay className=" text-2xl" />
              <span className="font-bold text-gray-700">Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-5 py-3 shadow-sm hover:shadow-md hover:scale-105 transition transform">
              <IoLogoAppleAppstore className="text-2xl" />
              <span className="font-bold text-gray-700">App Store</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <img src={heroimg} alt="Hero Section" className="w-full max-w-md" />
      </div>
      <div>
        <img className=" w-full h-80 bg-cover" src={banner} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
