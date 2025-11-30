import React from "react";
import { testimonialsImages, testimonialsText } from "../Types/travelPackage";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
      {/* Center Text Content */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-600 text-sm mb-3 bg-gray-100 px-4 py-1 rounded-full inline-block">
          {testimonialsText[0].tag}
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          {testimonialsText[0].title1}
        </h2>

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mt-1 leading-tight">
          {testimonialsText[0].title2}
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          {testimonialsText[0].subtitle}
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition inline-flex items-center gap-2">
          {testimonialsText[0].button} <span>→</span>
        </button>
      </div>

      {/* Fade Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>

      {/* Floating Photo Grid */}
      <div className="relative max-w-6xl mx-auto flex flex-wrap justify-center gap-8 mb-20">
        {testimonialsImages.map((item, index) => (
          <div
            key={item.id}
            className={`
          relative rounded-2xl shadow-xl overflow-hidden bg-white
          w-[120px] h-[140px] sm:w-[150px] sm:h-[170px] lg:w-[170px] lg:h-[190px]
          flex items-center justify-center

          /* --- stagger vertical positions --- */
          ${index % 6 === 0 ? "mt-6" : ""}
          ${index % 6 === 1 ? "-mt-4" : ""}
          ${index % 6 === 2 ? "mt-10" : ""}
          ${index % 6 === 3 ? "-mt-2" : ""}
          ${index % 6 === 4 ? "mt-8" : ""}
          ${index % 6 === 5 ? "mt-0" : ""}
        `}
          >
            <img
              src={item.img}
              alt="testimonial"
              className="object-cover w-full h-full"
            />

            {/* Vertical Line */}
            <div className="absolute bottom-[-80px] left-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-300/60 to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
