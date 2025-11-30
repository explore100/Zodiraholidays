import React from "react";
import { trendingAttractions } from "../Types/travelPackage";

const TrendingAttractions: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Trending Attractions
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-10 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {trendingAttractions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image oval */}
              <div className="relative w-52 h-72 rounded-full overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Floating Icon */}
                <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full p-3 w-14 h-14 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-7 h-7 opacity-70" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mt-10">
                {item.title}
              </h3>

              {/* Tours + Price */}
              <p className="text-sm text-gray-600 mt-1">
                {item.tours} Tours • From{" "}
                <span className="text-indigo-600 font-medium">
                  {item.price}$
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingAttractions;
