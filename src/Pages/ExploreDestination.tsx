// src/components/ExploreDestinations.tsx
import React from "react";
import { destinationCategory } from "../Types/travelPackage";
import { FiArrowRight } from "react-icons/fi";

const ExploreDestinations: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">Explore More Destination</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {destinationCategory.map(
          ({ id, title, location, imageUrl, discount }) => (
            <div
              key={id}
              className="group relative rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
              />

              {/* Discount badge */}
              <div className="absolute top-3 left-3 bg-orange-600 bg-opacity-100 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                {discount}
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm opacity-80 flex items-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 2.828l4.243 4.243a8 8 0 1111.314-11.314 8 8 0 01-11.314 11.314z"
                      transform="translate(-5 -3)"
                    />
                  </svg>
                  {location}
                </p>
              </div>

              {/* 'View Details' link */}
              <a
                href={`https://wa.me/9779709155929?text=${encodeURIComponent(
                  "Hi! I want to contact you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute bottom-3 right-3 opacity-90 text-xs text-white flex items-center cursor-pointer hover:text-yellow-400 transition-colors">
                  Book It <FiArrowRight className="ml-1" />
                </div>
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ExploreDestinations;
