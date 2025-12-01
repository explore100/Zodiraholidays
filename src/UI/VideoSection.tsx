

const VideoSection = () => {
  return (
    <div className="relative w-full h-[85vh] mb-4 overflow-hidden">

      {/* VIDEO */}
      <video
        className="w-full h-full object-cover"
        src="/bannervideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CENTERED TEXT + BUTTON */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Discover Amazing Destinations
        </h1>

        <p className="text-white text-lg md:text-2xl mt-4 drop-shadow-lg">
          Premium holiday packages for your dream vacation.
        </p>

        <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition">
          Book a Trip Now
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
