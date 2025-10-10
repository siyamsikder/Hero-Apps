import React from "react";
import { Link } from "react-router";
import useApps from "../Hooks/useApps";
const TrendingApps = () => {
  const { apps } = useApps();

  const trendingApps = apps.slice(0, 10);
  console.log(trendingApps);
  return (
    <div className="mt-10 px-10">
      <h1 className="text-4xl font-bold text-center">Trending Apps</h1>
      <p className="text-center mt-3 text-gray-600">
        Explore All Trending Apps on the Market developed by us.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingApps.map((app) => (
          <Link to={`/appDetails/${app.id}`}>
          <div className="border border-gray-200 rounded-lg shadow-sm bg-gray-100 p-5 hover:shadow-md transition">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-md font-semibold text-gray-800 my-4">
              {app.title}
            </h3>
            <div className="flex justify-between items-center">
              <p className="bg-green-100 flex items-center gap-2 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
               <img className="w-5 h-5" src="https://i.ibb.co.com/PGXBrfrY/fi-18110198-1.png" alt="" /> {app.downloads || "0+"}
              </p>
              <p className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md text-sm font-medium">
                ⭐ {app.ratingAvg || "N/A"}
              </p>
            </div>
          </div>
             </Link>
        ))}
      </div>
      <div className="flex mt-10 justify-center mb-16">
        <Link to="/apps">
          <button className="px-10 py-2 text-white font-semibold rounded-sm bg-gradient-to-r from-[rgba(159,98,242,1)] to-[rgba(99,46,227,1)] hover:opacity-90 transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
