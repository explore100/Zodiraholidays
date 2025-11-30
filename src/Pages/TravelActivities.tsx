import React from 'react';
import {
  activityIconss,
  activityCards,
  promotionalCard,
} from '../Types/travelPackage';

const TravelActivities: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 font-sans">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-xl md:text-3xl font-bold">Travel By Activities</h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Navigate the Globe with Confidence
        </p>
      </div>

      {/* Top Icons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
        {activityIconss.map(({ id, label, image }) => (
          <div key={id} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 border border-gray-300 flex items-center justify-center">
              <img
                src={image}
                alt={label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs md:text-sm text-center">{label}</span>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
        {activityCards.map(({ id, title, image, toursLabel, activitiesList }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                  />
                </svg>
                {toursLabel}
              </div>
            </div>
            <div className="px-4 py-5 flex flex-col gap-3">
              <h3 className="font-semibold text-base md:text-lg">{title}</h3>
              <ul className="space-y-1 text-gray-700 text-xs md:text-sm list-disc list-inside">
                {activitiesList.map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Promotional Card */}
        <div className="rounded-2xl bg-blue-200 p-6 flex flex-col justify-center sm:col-span-2 lg:col-span-1">
          <h4 className="text-xs md:text-sm font-semibold text-blue-800 mb-1">
            {promotionalCard.headline}
          </h4>
          <h2 className="text-lg md:text-xl font-bold mb-4 text-blue-900">
            {promotionalCard.title}
          </h2>
          <a
  href={`https://wa.me/9779709155929?text=Hi!%20I%20am%20interested%20in%20${encodeURIComponent(
    promotionalCard.buttonLabel
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    type="button"
    className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full w-max hover:bg-yellow-300 transition text-sm md:text-base"
  >
    {promotionalCard.buttonLabel} →
  </button>
</a>


          <img
            src={promotionalCard.image}
            alt="Travel suitcase"
            className="mt-6 max-w-full mx-auto rounded-lg"
          />
        </div>
      </div>

      {/* Load More Button */}
      
    </div>
  );
};

export default TravelActivities;
