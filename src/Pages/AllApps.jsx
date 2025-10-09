import React, { useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import useApps from "../Hooks/useApps";

const AllApps = () => {
  const { apps } = useApps();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 px-10">
      <h1 className="font-bold text-4xl text-center">Our All Applications</h1>
      <p className="text-center mt-3 text-gray-600">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <p className="text-gray-700 font-medium">
            ({filteredApps.length}) Apps Found
          </p>
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search Apps"
              className="pl-10 pr-4 py-2 border rounded-md outline-none w-60 focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            // <Link key={app.id} to={`/installation/${app.id}`}>
              <div className="border border-gray-200 rounded-lg shadow-sm w-full h-full bg-gray-100 p-5 hover:shadow-md transition">
                <div>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
                <h3 className="text-md font-semibold text-gray-800 my-4">
                  {app.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
                    {app.downloads}
                  </p>
                  <p className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md text-sm font-medium">
                    ⭐ {app.ratingAvg}
                  </p>
                </div>
              </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
