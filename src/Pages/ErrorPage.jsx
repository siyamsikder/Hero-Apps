import React from "react";
import { Link, useRouteError } from "react-router";
import errorPaz from "../assets/App-Error.png"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center text-center flex-grow bg-[#f8faff] py-20 px-5">
            <img
        src={errorPaz}
        alt="404 Illustration"
        className="w-64 mb-6"
      />
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops, page not found!</h2>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>
       <Link to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
        Go Back!
      </Link>
    </div>
    <Footer/>
    </div>
    
  );
};

export default ErrorPage;
