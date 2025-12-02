import VideoBanner from "../UI/VideoBanner";

const HomePage = () => {
  return (
    <div>
      <VideoBanner
        videoSrc="/bannervideo.mp4"
        title="Discover Amazing Destinations"
        subtitle="Travel the world with Zodira Holidays"
      />
    </div>
  );
};

export default HomePage;
