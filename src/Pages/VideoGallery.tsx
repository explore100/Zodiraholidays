import React from "react";
import { videoGalleryData } from "../Types/travelPackage";

const VideoGallery: React.FC = () => {
  const handlePlayVideo = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <section className="relative bg-black text-white py-16 px-4 flex justify-center items-center overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 30%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.05) 0%, transparent 30%)",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative max-w-6xl w-full text-center z-10">
        {/* Badge */}
        <span className="inline-block bg-yellow-400 text-black text-xs sm:text-sm font-semibold rounded-full px-4 py-1 mb-2">
          Video Gallery
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 leading-tight">
          Journey to the Most <br /> Beautiful Places on Earth
        </h2>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Left large video */}
          {videoGalleryData.slice(0, 1).map(({ id, imageUrl, videoUrl, altText }) => (
            <div
              key={id}
              onClick={() => handlePlayVideo(videoUrl)}
              className="relative w-full sm:w-[500px] lg:w-[420px] xl:w-[460px] h-[250px] sm:h-[350px] lg:h-[460px] rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={imageUrl}
                alt={altText}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-5.6-3.2A1 1 0 008 9v6a1 1 0 001.152.96l5.6-3.2a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Right 4 smaller videos */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 w-full sm:w-[500px] lg:w-[480px] xl:w-[520px]">
            {videoGalleryData.slice(1, 5).map(({ id, imageUrl, videoUrl, altText }) => (
              <div
                key={id}
                onClick={() => handlePlayVideo(videoUrl)}
                className="relative w-full h-[150px] sm:h-[180px] lg:h-[200px] xl:h-[220px] rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={imageUrl}
                  alt={altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-5.6-3.2A1 1 0 008 9v6a1 1 0 001.152.96l5.6-3.2a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="mt-12 bg-yellow-400 text-black font-semibold py-3 px-10 rounded-full hover:bg-yellow-300 transition-colors duration-300">
          Load More Tours
        </button>
      </div>
    </section>
  );
};

export default VideoGallery;
