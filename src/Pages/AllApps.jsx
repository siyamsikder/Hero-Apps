import React, { useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import useApps from "../Hooks/useApps";
import Looder from "../Components/Looder";

const AllApps = () => {
  const { apps, loading } = useApps();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Looder />;

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

        {filteredApps.length === 0 ? (
          <div className="text-center mt-10 mb-8 text-gray-600 col-span-full">
            <h1 className="text-3xl font-bold mb-3">No Apps Found</h1>
            <p>Sorry, no apps match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-15">
            {filteredApps.map((app) => (
              <Link to={`/appDetails/${app.id}`} key={app.id}>
                <div className="shadow-sm w-full h-full p-5 rounded-xl hover:shadow-md transition">
                  <div>
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-[280px] object-cover rounded"
                    />
                  </div>
                  <h3 className="text-md font-semibold text-gray-800 my-4">
                    {app.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="bg-green-100 flex items-center gap-2 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
                      <img
                        className="w-5 h-5"
                        src="https://i.ibb.co.com/PGXBrfrY/fi-18110198-1.png"
                        alt=""
                      />
                      {app.downloads || "0+"}
                    </p>
                    <p className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md text-sm font-medium">
                      ⭐ {app.ratingAvg}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
