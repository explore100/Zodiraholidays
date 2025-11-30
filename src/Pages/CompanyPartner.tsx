import React from "react";
import { companyLogos } from "../Types/travelPackage";

const CompanyLogos: React.FC = () => {
  // Duplicate logos for infinite scroll effect
  const scrollingLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {scrollingLogos.map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center 
                mx-6 sm:mx-10 md:mx-14 lg:mx-20
                shrink-0
              "
            >
              <img
                src={logo.imageUrl}
                alt={logo.altText}
                className="
                  h-10 sm:h-14 md:h-20 lg:h-24
                  w-auto object-contain 
                  opacity-80 hover:opacity-100
                  transition-all duration-200
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
