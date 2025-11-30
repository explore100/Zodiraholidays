import React from "react";
import { cardsData } from "../Types/travelPackage"; // adjust path

const CardsGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card) => {
        const {
          id,
          title,
          subtitle,
          images,
          phone,
          discount,
          buttonText,
          backgroundImage,
        } = card;

        // layout tweaks for grid arrangement
        const gridClass =
          id === 1
            ? "lg:col-span-2"
            : id === 2
            ? "lg:col-span-1"
            : id >= 3
            ? "lg:col-span-1"
            : "";

        return (
          <div
            key={id}
            className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${gridClass}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "280px",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text & Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
              {id === 3 ? (
                <>
                  <h3 className="text-2xl font-bold mb-1">{title}</h3>
                  <p className="text-sm mb-3">{subtitle}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    {images?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`person-${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-xs">{phone}</p>
                  <p className="text-yellow-400 font-bold text-sm">
                    {discount}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold leading-snug mb-2">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-lg font-light mb-2">{subtitle}</p>
                  )}
                </>
              )}

              {/* Button */}

              <a
                href={`https://wa.me/9779709155929?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(
                  buttonText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="mt-auto bg-yellow-400 text-black font-semibold rounded-full px-5 py-2 w-fit inline-flex items-center space-x-2 hover:bg-yellow-500 transition"
                >
                  <span>{buttonText}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CardsGrid;
