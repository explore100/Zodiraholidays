
import BannerVideo from "../UI/BannerVideo";
import travelVideo from "../assets/icons/bannervideo.mp4";

const HomePage = () => {
  return (
    <div>
      <BannerVideo
        videoSrc={travelVideo}
        title="Discover Amazing Destinations"
        subtitle="Premium holiday packages for your dream vacation."
      />
    </div>
  );
};

export default HomePage;
