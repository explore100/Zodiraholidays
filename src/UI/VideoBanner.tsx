

interface VideoBannerProps {
  videoSrc: string; 
  title: string;
  subtitle?: string;
  height?: string; // Example: "80vh", "600px"
}

const VideoBanner: React.FC<VideoBannerProps> = ({
  videoSrc,
  title,
  subtitle,
  height = "85vh",
}) => {
  return (
    <section
      className="relative w-full overflow-hidden mb-4"
      style={{ height }}
    >
      {/* VIDEO */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg md:text-2xl font-medium drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default VideoBanner;
