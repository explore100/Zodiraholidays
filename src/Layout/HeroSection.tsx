import React, { useState, useEffect } from "react";
import planeImage from "../assets/travellingimg1.png";
import helicopterImage from "../assets/travellingimg2.png";
import busImage from "../assets/travellingimg3.png";
import place1 from "../assets/france.png";
import place2 from "../assets/Thailand.png";
import place3 from "../assets/japan.png";

const HeroFlight: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: (
        <>
          Experience Magic
          <br />
          Start Your <span className="text-[#293d8a]">Journey</span> With
          <br />
          Flight
        </>
      ),
      image: planeImage,
      accentColor: "#293d8a",
    },
    {
      id: 2,
      title: (
        <>
          Discover Heights
          <br />
          Start Your <span className="text-[#3a6cb0]">Adventure</span> With
          <br />
          Helicopter
        </>
      ),
      image: helicopterImage,
      accentColor: "#3a6cb0",
    },
    {
      id: 3,
      title: (
        <>
          Explore Roads
          <br />
          Start Your <span className="text-[#2b7a4b]">Journey</span> With
          <br />
          Bus
        </>
      ),
      image: busImage,
      accentColor: "#2b7a4b",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);
  const activeSlide = slides[activeIndex];

  return (
    <section className="relative w-full h-[520px] sm:h-[580px] md:h-[600px] rounded-[2rem] overflow-hidden bg-[#f8f8f8] transition-all duration-700">
      {/* Background Layer */}
      <div className="absolute inset-0 flex">
        <div className="w-[60%] sm:w-[55%] bg-gradient-to-r from-[#0a0a0a] via-[#7494d9] to-transparent rounded-r-[3rem] z-10"></div>

        <img
          src={activeSlide.image}
          alt="Travel"
          className="absolute right-0 top-0 w-[75%] sm:w-[68%] md:w-[65%] h-full object-cover transition-all duration-700 blend-image"
        />
      </div>

      



  {/* Content */}
  <div className="relative z-20 flex flex-col md:flex-row justify-between h-full px-6 sm:px-10 md:px-16 lg:px-24 py-10">
    {/* Left Section */}
    <div className="flex items-center gap-6 sm:gap-10">
      {/* Steps */}
      <div className="flex flex-col items-center space-y-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center text-sm sm:text-base transition-all ${
              activeIndex === i
                ? "bg-white text-black font-semibold border-white scale-110 shadow"
                : "border-white text-white hover:bg-white/20"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Slide Text */}
      <div key={activeSlide.id} className="text-white transition-opacity duration-700">
        <p className="text-xs sm:text-sm md:text-base mb-2 font-light tracking-wide">
          Elevate your experience
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
          {activeSlide.title}
        </h1>

        <a
          href="https://wa.me/9779709155929?text=Hi!%20I%20want%20to%20book%20a%20trip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="mt-5 sm:mt-6 font-semibold flex items-center space-x-2 rounded-full transition-all
           text-xs sm:text-sm md:text-base
           px-4 py-2 sm:px-6 sm:py-3
           hover:scale-105"
            style={{
              backgroundColor: activeSlide.accentColor,
              color: "white",
            }}
          >
            <span>Book A Trip Now</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </a>
      </div>
    </div>

    {/* Right Floating Card */}
    <div
      className="absolute md:bottom-6 md:right-8 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 
                    bg-white rounded-2xl shadow-xl px-5 py-4 
                    w-[250px] sm:w-[280px] md:w-[300px] top-auto bottom-4"
    >
      <p className="text-sm text-gray-600">Know More</p>
      <h3 className="text-lg sm:text-xl font-bold">Awesome Places</h3>
      <p className="text-gray-500 text-xs sm:text-sm mt-1">
        Choose Zodira as your travel partner and enjoy the journey without hassle.
      </p>

      <div className="flex space-x-2 mt-3">
        {[place1, place2, place3].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Place ${idx + 1}`}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow"
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroFlight;
