import React, { useState } from "react";
import { testimonials } from "../Types/travelPackage";

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="max-w-5xl mx-auto text-center font-sans py-16 px-4">
      {/* Header */}
      <p className="text-sm text-indigo-700 font-semibold italic mb-2">Testimonial</p>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-16 sm:text-4xl">
        What our customer <br /> says about us
      </h2>

      <div className="flex items-center justify-center space-x-12">
        {/* Left side images */}
        <div className="flex flex-col space-y-8">
          {testimonials.slice(0, Math.floor(length / 2)).map((t, i) => (
            <img
              key={t.id}
              src={t.image}
              alt={t.author}
              className={`rounded-full object-cover transition-transform duration-300 ease-in-out 
                ${i === current ? "w-24 h-24 filter-none opacity-100" : "w-16 h-16 grayscale opacity-40"}`}
            />
          ))}
        </div>

        {/* Center Testimonial Content */}
        <div className="max-w-xl px-8 relative">
          <p className="text-gray-900 font-semibold text-lg leading-relaxed mb-8 before:content-['“'] before:text-yellow-400 before:text-5xl before:align-top">
            {testimonials[current].text}
          </p>
          <p className="text-gray-500 text-sm font-light">
            -By {testimonials[current].author}, {testimonials[current].role}
          </p>

          {/* Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === current ? "bg-indigo-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right side images */}
        <div className="flex flex-col space-y-8">
          {testimonials.slice(Math.floor(length / 2)).map((t, i) => {
            const idx = i + Math.floor(length / 2);
            return (
              <img
                key={t.id}
                src={t.image}
                alt={t.author}
                className={`rounded-full object-cover transition-transform duration-300 ease-in-out 
                ${idx === current ? "w-24 h-24 filter-none opacity-100" : "w-16 h-16 grayscale opacity-40"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
