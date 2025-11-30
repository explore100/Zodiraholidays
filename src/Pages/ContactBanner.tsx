import React from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";

const BackgroundSection: React.FC = () => {
  return (
    <div
      className="w-full h-[450px] bg-cover bg-center flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <h1 className="text-white text-4xl sm:text-5xl font-normal mb-4 text-center">
        Connect with{' '}
        <span className="text-orange-500">
          Excellence
        </span>
      </h1>

      <p className="text-white max-w-3xl text-center text-base sm:text-lg leading-relaxed mb-6">
        We're here to assist you 24/7 with personalized attention and absolute discretion. Whether you're looking to make a reservation, inquire about our premium services, or request a custom solution, our team is ready to respond with professionalism and care.
      </p>

      {/* ---- GOOGLE MAP BUTTON ---- */}
      <a
        href="https://maps.app.goo.gl/cYpePrXjp45GuN3y6" // <-- Replace with your exact location coords
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FFC50F] hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg shadow-lg hover:shadow-xl transition-all"
      >
        <FaMapMarkedAlt className="text-xl" />
        Locate on Google Map
      </a>
    </div>
  );
};

export default BackgroundSection;
