import React from "react";

interface BannerVideoProps {
  videoSrc: string;
  title?: string;
  subtitle?: string;
}

const BannerVideo: React.FC<BannerVideoProps> = ({
  videoSrc,
  title = "Explore the World With Us",
  subtitle = "Your perfect travel experience starts here.",
}) => {
  return (
    <section className="relative w-full h-screen mb-4 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-tight">
          {title}
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl opacity-90">
          {subtitle}
        </p>
        <a
          href="https://wa.me/9779709155929?text=Hi!%20I%20want%20to%20book%20a%20trip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="
      mt-5 sm:mt-6 font-semibold flex items-center space-x-2
      rounded-full transition-all duration-300
      text-xs sm:text-sm md:text-base
      px-5 py-2 sm:px-7 sm:py-3
      bg-yellow-400 text-black shadow-lg
      hover:bg-orange-500 hover:text-white hover:shadow-xl
      hover:scale-[1.07] active:scale-95
    "
          >
            <span>Book A Trip Now</span>

            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
    </section>
  );
};

export default BannerVideo;
