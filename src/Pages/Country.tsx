import React from "react";
import { countries } from "../Types/travelPackage";

const Country: React.FC = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Categories
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they’re already grouped by category.
        </p>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6 md:gap-8 place-items-center">
          {countries.map((country) => (
            <div
              key={country.id}
              className="text-center group w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
            >
              {/* Image container */}
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                {country.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Country;
