import React, { useState } from "react";
import { blogData } from "../Types/travelPackage";

const BlogsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === blogData.length - 1 ? 0 : prev + 1));
  };

  const currentBlog = blogData[currentIndex];

  return (
    <section className="bg-[#FFFAF2] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 border-l-4 border-orange-400 pl-4 mb-4 md:mb-0 md:mr-8">
          Blogs
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
          Uncover the beauty of Nepal with Soaltee Hotels and Resorts. Our blog
          features exclusive hotel deals, comprehensive travel guides, and tips
          for destination weddings. From exploring hidden gems in Kathmandu to
          appreciating the stunning landscapes surrounding our luxury hotels in
          Nepal, stay informed with insider updates. Immerse yourself in the
          Soaltee experience and learn why we are celebrated as the best 5-star
          hotel in Nepal.
        </p>
      </div>

      {/* Slider Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-300">
        {/* Images Section */}
        <div className="relative flex-1 flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-4 md:gap-6 w-full md:w-auto">
          {currentBlog.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Blog ${currentBlog.id} image ${idx + 1}`}
              className={`rounded-xl object-cover transition-transform duration-300 hover:scale-105 ${
                idx === 0
                  ? "w-[90%] sm:w-[280px] md:w-[320px] h-[180px] sm:h-[200px] md:h-[220px]"
                  : "w-[42%] sm:w-[200px] md:w-[240px] h-[160px] sm:h-[180px] md:h-[200px]"
              }`}
            />
          ))}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-md rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition z-10"
            aria-label="Previous Blog"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-md rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition z-10"
            aria-label="Next Blog"
          >
            &#10095;
          </button>
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full md:ml-10 mt-6 md:mt-0 text-center md:text-left px-2 sm:px-0">
          <p className="text-orange-500 text-xs sm:text-sm mb-2 font-semibold uppercase tracking-wide">
            {currentBlog.date}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-snug text-gray-900">
            {currentBlog.title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
            {currentBlog.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogsSlider;
