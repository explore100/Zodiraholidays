import React from "react";
import { thingsData } from "../Types/travelPackage"; // Ensure correct path

const ThingsYouNeed: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 text-center md:text-left space-y-2 md:space-y-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Things You Need To
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
          Our goal is to provide you with a well-planned, safe vacation at a
          price you can afford.
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {thingsData.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="group border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col items-start justify-between bg-white hover:shadow-lg hover:border-orange-400 transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
              <Icon className="text-orange-500 text-3xl sm:text-4xl" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThingsYouNeed;
