import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Looder from "../Components/Looder";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((a) => String(a.id) === id);

  useEffect(() => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem("Installation")) || [];
    const isAlreadyInstalled = existingList.some((a) => a.id === app.id);
    setIsInstalled(isAlreadyInstalled);
  }, [app]);

  const handleAddToInstall = () => {
    if (!app) return;

    const existingList = JSON.parse(localStorage.getItem("Installation")) || [];
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      toast.info("✅ This app is already installed!");
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("Installation", JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success("🎉 App installed successfully!");
  };

  if (loading) return <Looder />;

  const {
    image,
    ratingAvg,
    downloads,
    description,
    reviews,
    companyName,
    title,
    size,
  } = app;

  const chartData = [{ name: "App Info", rating: ratingAvg, size: size }];

  return (
    <div className="px-10 mt-10 mb-10">
      <div className="rounded-lg flex flex-col md:flex-row items-center mx-auto p-6 gap-10">
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-64 h-64 md:w-80 md:h-80 p-5 rounded-xl border border-gray-300 bg-white"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl mb-3 font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            Developed by{" "}
            <span className="text-indigo-600 font-medium cursor-pointer">
              {companyName}
            </span>
          </p>

          <div className="flex items-center gap-10 mb-10 mt-10">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 mt-1">Downloads</p>
              <p className="text-lg font-bold text-gray-900">{downloads}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 mt-1">Average Rating</p>
              <p className="text-lg font-bold text-gray-900">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
              <p className="text-lg font-bold text-gray-900">{reviews}</p>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={handleAddToInstall}
              disabled={isInstalled}
              className={`px-6 py-2 rounded-md shadow-sm font-semibold transition ${
                isInstalled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}>
              {isInstalled ? "✅ Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl h-96 p-5 mt-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rating" fill="#82ca9d" name="Rating (★)" />
            <Bar dataKey="size" fill="#8884d8" name="App Size (MB)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5  mx-auto  rounded-xl p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          Description
        </h1>
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

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

export default AppDetails;
