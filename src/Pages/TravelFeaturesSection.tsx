import React from "react";
import { travelFeatures } from "../Types/travelPackage";

const TravelFeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-serif font-semibold mb-16">
        Revolutionizing The <br /> Ways We Travel
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {travelFeatures.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border-r last:border-r-0 md:border-r border-gray-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-2xl mb-6"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 font-serif">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelFeaturesSection;
