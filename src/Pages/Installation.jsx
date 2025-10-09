import React from "react";
// import useApps from "../Hooks/useApps";

const Installation = () => {
  // const {apps} = useApps()

  return (
    <div className="mt-10 mb-10 px-10">
      <h1 className="text-4xl font-bold text-center mb-3">
        Your Installed App
      </h1>
      <p className="text-center">Explore all trending apps developed by us.</p>

      <div className="flex justify-between mt-10">
        <h1 className="font-bold text-2xl">1 App Found</h1>
        <div>Sort By Size</div>
      </div>
      <div className="flex justify-center items-center py-6">
        <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full">
          <div className="flex items-center space-x-4">
            <img
              src=""
              alt=""
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800"></h2>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-green-600 font-medium mr-1">↓</span>
                  <span> MB</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span></span>
                </div>
                <span></span>
              </div>
            </div>
          </div>
          {/* Button */}
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition duration-150 shadow-md">
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};
export default Installation;
