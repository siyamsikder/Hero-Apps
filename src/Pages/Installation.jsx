import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Looder from "../Components/Looder";
import useApps from "../Hooks/useApps";

const Installation = () => {
  const { loading } = useApps();
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("Installation"));
    if (saveList) setInstall(saveList);
  }, []);

  const sortedInstall = [...install].sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.ratingAvg - b.ratingAvg;
    } else if (sortOrder === "price-desc") {
      return b.ratingAvg - a.ratingAvg;
    } else {
      return 0;
    }
  });
  if (loading) return <Looder />;

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("Installation")) || [];
    const updatedList = existingList.filter((p) => p.id !== id);

    setInstall((prev) => prev.filter((p) => p.id !== id));
    localStorage.setItem("Installation", JSON.stringify(updatedList));

    toast.success("App uninstalled successfully!");
  };
  return (
    <div className="mt-10 mb-10 px-10">
      {install.length === 0 ? (
        <div className="text-center mt-20 mb-60 text-gray-600">
          <h1 className="text-3xl font-bold mb-3">No Installed Apps</h1>
          <p>Install an app to see it listed here!</p>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center mb-3">
            Your Installed Apps
          </h1>
          <p className="text-center text-gray-600">
            Explore all trending apps developed by us.
          </p>
          <div className="flex justify-between mt-10 mb-6">
            <h1 className="font-bold text-2xl">{install.length} Apps Found</h1>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-md px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="none">Sort by Rating</option>
              <option value="price-asc">Low → High</option>
              <option value="price-desc">High → Low</option>
            </select>
          </div>
          <div className="grid gap-4">
            {sortedInstall.map((app) => (
              <div
                key={app.id}
                className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {app.title}
                    </h2>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="text-green-600 font-medium mr-1">↓</span>
                        <span>{app.size} MB</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{app.ratingAvg}</span>
                      </div>
                      <span>{app.companyName}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(app.id)}
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl transition duration-150 shadow-md">
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Installation;
