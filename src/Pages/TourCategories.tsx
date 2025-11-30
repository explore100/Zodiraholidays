import React from "react";
import { tourCategories } from "../Types/travelPackage";
import type { TourCategory } from "../Types/types";

const TopCategories: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Top Categories of Tours
          </h2>
          <p className="text-gray-600 mt-2 max-w-md">
            Favorite destinations based on customer reviews
          </p>
        </div>

        <button
          type="button"
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-900 transition"
        >
          View More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tourCategories.map(
          ({ id, title, description, imageUrl }: TourCategory) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{description}</p>
                </div>
                <a
                  href={`https://wa.me/9779709155929?text=${encodeURIComponent(
                    "Hi! I want to contact you."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full border border-gray-300 p-2 flex items-center justify-center text-gray-500 hover:text-black transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TopCategories;
