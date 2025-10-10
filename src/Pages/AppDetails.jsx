import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const app = apps.find((a) => String(a.id) === id);

  const { image, ratingAvg, downloads, reviews, companyName, title, size } = app || {}
   
   const handaleAddtoInstall = ()=>{
    const existingList=JSON.parse(localStorage.getItem('Installation'))
    let updateList = []
    console.log(existingList)
    if(existingList){
        const isDuplicate = existingList.some(a => a.id === app.id )
        if (isDuplicate) return alert('this app is alradi downlod')
        updateList= [...existingList,app]
    }else{
        updateList.push(app)
    }
      localStorage.setItem('Installation', JSON.stringify(updateList))
   }
  return (
    <div className="px-10 mt-10 mb-10">
      <div className="rounded-lg flex flex-col md:flex-row items-center mx-auto bg-gray-50 shadow-md p-6 gap-10">
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
              <img
                src="https://i.ibb.co.com/PGXBrfrY/fi-18110198-1.png"
                alt="downloads"
                className="w-6 h-6"
              />
              <p className="text-sm text-gray-500 mt-1">Downloads</p>
              <p className="text-lg font-bold text-gray-900">{downloads}</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/7djpytNs/Vector.png"
                alt="rating"
                className="w-6 h-6"
              />
              <p className="text-sm text-gray-500 mt-1">Average Rating</p>
              <p className="text-lg font-bold text-gray-900">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/qLMwSrzr/Vector-1.png"
                alt="reviews"
                className="w-6 h-6"
              />
              <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
              <p className="text-lg font-bold text-gray-900">{reviews}</p>
            </div>
          </div>
          <div className="mt-4">
            <button  onClick={handaleAddtoInstall} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
