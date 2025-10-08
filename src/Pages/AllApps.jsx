import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 px-10">
      <h1 className="font-bold text-4xl text-center">Our All Applications</h1>
      <p className="text-center mt-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-10">
          <p className="mb-4">({filteredApps.length}) Apps Found</p>

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
            <div
              key={app.id}
              className="border border-gray-200 rounded-lg shadow-sm w-full h-full bg-gray-100 p-5">
              <div>
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full object-cover rounded"
                />
              </div>
              <h3 className="text-md font-semibold text-gray-800 my-4">
                {app.title}
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <p className="bg-green-100 text-green-700 px-2 py-1 rounded-md">
                    {app.downloads}
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium">
                  <p className="bg-yellow-100 text-yellow-500 px-2 py-1 rounded-md">
                    {app.ratingAvg}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
