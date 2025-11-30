import React from "react";
import { servicesData } from "../Types/travelPackage"; // Ensure data includes id, title, description, image, etc.

const ServicesProvided: React.FC = () => {
  return (
    <section className="relative bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-10 leading-tight">
            What Services <br />
            We Provide
          </h2>

          {/* Services List */}
          <div className="space-y-8 text-gray-700">
            {servicesData.map(({ id, title, description }) => (
              <div key={id} className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">
                  {id < 10 ? `0${id}.` : `${id}.`} {title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 max-w-md">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 relative flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10">
          {servicesData.map(({ id, image, imageAlt }, index) => (
            <div
              key={id}
              className="rounded-full overflow-hidden shadow-lg border-4 border-white bg-white transition-transform hover:scale-105"
              style={{
                width:
                  index === 0
                    ? "140px"
                    : index === 1
                    ? "160px"
                    : index === 2
                    ? "130px"
                    : "140px",
                height:
                  index === 0
                    ? "140px"
                    : index === 1
                    ? "160px"
                    : index === 2
                    ? "130px"
                    : "140px",
              }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Airplane outline background */}
          <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-64 sm:w-96 lg:w-[550px] h-64 sm:h-96 lg:h-[550px] text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M502.6 309.5L359.9 166.8 398.4 60.4 352 14 258.5 107.5 152.1 69 9.4 211.7 228.3 278.5 165 341.8 31.5 320.1 8 343.6 168.4 504l23.5-23.5-21.7-133.5 63.3-63.3 66.8 218.9L443 360.9 502.6 309.5z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProvided;
