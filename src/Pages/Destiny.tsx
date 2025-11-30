import React, { useState, useEffect } from "react";
import { destinyData } from "../Types/travelPackage";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const CARD_VISIBLE_COUNT = 3;

const Destiny: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = destinyData.length - CARD_VISIBLE_COUNT;

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto-slide effect
useEffect(() => {
const interval = setInterval(() => {
setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
}, 5000); // change slide every 5 seconds
return () => clearInterval(interval);
}, [maxIndex]);

  const visibleData = destinyData.slice(
    startIndex,
    startIndex + CARD_VISIBLE_COUNT
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular Destinations
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Decide your next journey and destination with us
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="text-2xl sm:text-3xl md:text-4xl text-gray-600 hover:text-blue-600 transition"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next"
        className="text-2xl sm:text-3xl md:text-4xl text-gray-600 hover:text-blue-600 transition"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  </div>

  {/* Cards */}
  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {visibleData.map((dest) => (
      <div
        key={dest.id}
        className="bg-white shadow-sm rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition"
      >
        <img
          src={dest.imageUrl}
          alt={dest.title}
          className="w-full h-40 sm:h-48 md:h-52 rounded-3xl object-cover"
        />
        <div className="p-4 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-sm md:text-base text-gray-900">
              {dest.title}
            </h4>
            <p className="text-xs md:text-sm flex text-gray-500 mt-1 items-center gap-1">
              <FaLocationDot /> {dest.location}
            </p>
          </div>
          <span className="bg-blue-600 text-white text-xs md:text-sm font-semibold rounded-full px-2 py-1 flex items-center gap-1">
            {dest.rating} <span>★</span>
          </span>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Destiny;
