import React, { useState } from "react";
import subsImg from "../assets/rafting.png";
import { IoIosSend } from "react-icons/io";

const SubscribeFooter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section className="max-w-6xl mx-auto my-12 px-4 font-[Nunito]">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* Left Section */}
        <div className="flex-1 bg-[#dbeeff] p-6 sm:p-10 flex flex-col justify-center gap-5">
          {/* Badge */}
           <div className="relative w-fit pl-10 sm:pl-12"> {/* Add left padding to prevent overlap */}
      {/* Badge */}
      <div className="flex items-center gap-2 bg-[#ffef33] text-gray-900 text-xs sm:text-sm font-semibold uppercase rounded-full px-4 py-1 tracking-wide">
        Join our newsletter
      </div>
      {/* Floating Icon */}
      <span className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2.5 sm:p-3.5 rounded-full shadow-lg flex items-center justify-center">
        <IoIosSend className="text-lg sm:text-xl" />
      </span>
    </div>



          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-800 leading-snug text-center md:text-left">
            Subscribe to get all the latest{" "}
            <span className="text-blue-600 font-bold">Offers</span>
            <br className="hidden sm:block" />
            from{" "}
            <span className="text-indigo-800  font-semibold">
              Zodira <span className="text-yellow-400">Holidays</span> 
            </span>
          </h2>

          {/* Subscription Form */}
          <form
            onSubmit={handleSubscribe}
            className="mt-4 flex w-full max-w-md mx-auto md:mx-0"
          >
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-r-full text-sm transition-all duration-300"
            >
              Subscribe
            </button>
          </form>

          {/* Small note */}
          <p className="text-xs text-gray-600 mt-2 text-center md:text-left">
            No ads. No trials. No commitments.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 h-52 sm:h-72 md:h-auto">
          <img
            src={subsImg}
            alt="Rafting adventure"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeFooter;
