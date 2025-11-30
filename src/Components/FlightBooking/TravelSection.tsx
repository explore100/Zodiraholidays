import travelBg from "../../assets/airplanebg.png";
import { heroContent } from "../../Types/travelPackage";

const TravelSection = () => {
  return (
    <section
      className="w-full h-[450px] md:h-[550px] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 20, 30, 0.6), rgba(10, 20, 30, 0.6)), url(${travelBg})`,
      }}
    >
     <section className="w-full py-24 flex flex-col items-center text-center px-4">
           {/* Top Small Text */}
           <p className="text-gray-100 text-sm tracking-wide mb-4">
             {heroContent.tagline}
           </p>
     
           {/* Main Heading */}
           <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold leading-tight text-white">
             {heroContent.title}
           </h1>
     
           {/* Avatars */}
           <div className="flex items-center justify-center gap-2 mt-10">
             {heroContent.images.map((img, index) => (
               <img
                 key={index}
                 src={img}
                 alt="team-member"
                 className="w-10 h-10 rounded-full object-cover border border-gray-300"
               />
             ))}
           </div>
     
           {/* Bottom Subtext */}
           <p className="text-gray-200 text-sm mt-4 max-w-md">
             {heroContent.subtext}
           </p>
         </section>
    </section>
  );
};

export default TravelSection;
