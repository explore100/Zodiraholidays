import React, { useState } from "react";
import { aboutData } from "../Types/travelPackage";

const AboutUsSlider: React.FC = () => {
  const { title, description, images } = aboutData;
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= images.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      {/* Title and Description */}
      <div className="flex flex-col md:flex-row justify-between mb-8 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-0 md:w-1/4">
          {title}
        </h2>
        <p className="md:w-3/4 text-gray-700 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 z-10 p-1 sm:p-2 bg-white/80 border border-gray-400 rounded-full hover:bg-gray-100 transition"
        >
          &#10094;
        </button>

        {/* Images Container */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 mx-auto w-full justify-center items-center">
          {images.slice(startIndex, startIndex + 3).map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Slide ${idx + 1}`}
              className="w-[90%] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[250px] sm:h-[350px] md:h-[400px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 z-10 p-1 sm:p-2 bg-white/80 border border-gray-400 rounded-full hover:bg-gray-100 transition"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default AboutUsSlider;
