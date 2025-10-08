import React from "react";
import { Link, useLoaderData } from "react-router";

const TrendingApps = () => {
  const tAppss = useLoaderData();
  console.log(tAppss);
  return (
    <div>
      <h1 className="text-4xl  font-bold text-center">Trending Apps</h1>
      <p className="text-center mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      {/* Trending Apps */}
      <div className="mt-10 px-20 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tAppss.map((apps) => (
          <div
            key={apps.id}
            className="border border-gray-200 rounded-lg shadow-sm w-full h-full bg-gray-100 p-5">
            <div>
              <img
                src={apps.image}
                alt="png"
                className="w-full object-cover rounded"
              />
            </div>
            <h3 className="text-md font-semibold text-gray-800 my-4">
              {apps.title}
            </h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <p className="bg-green-100 text-green-700 px-2 py-1 rounded-md">
                  {apps.downloads}
                </p>
              </div>
              <div className="flex items-center text-sm font-medium">
                <p className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-md">
                  {apps.ratingAvg}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <Link to ="/apps"> 
          <button className="btn px-10 text-white font-semibold rounded-sm bg-gradient-to-r to-[rgba(99,46,227,1)] from-[rgba(159,98,242,1)] hover:opacity-90 transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
