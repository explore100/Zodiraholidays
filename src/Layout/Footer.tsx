import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-blue-100 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            ZODIRA HOLIDAYS
            <span className="w-3 h-3 bg-blue-700 rounded-full inline-block"></span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-xs leading-relaxed">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="md:w-2/4 flex justify-between text-gray-700">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-3">Top Destinations</h3>
            <ul className="space-y-1 text-gray-500">
              <NavLink to='/europe'><li className="cursor-pointer hover:text-black">Europe</li></NavLink>
              <li className="cursor-pointer hover:text-black">Asia</li>
              <li className="cursor-pointer hover:text-black">Nepal</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-1 text-gray-500">
              <NavLink to="/Contact"><li className="cursor-pointer hover:text-black">Contact/FAQ</li> </NavLink>
              <NavLink to="/AboutUs"><li className="cursor-pointer hover:text-black">About Us</li></NavLink>
              <NavLink to="/travelguide"><li className="cursor-pointer hover:text-black">Travel Guides</li></NavLink>
            </ul>
          </div>
          {/* More */}
          <div>
            <h3 className="font-bold mb-3">More</h3>
            <ul className="space-y-1 text-gray-500">
              <li className="cursor-pointer hover:text-black">Heli Booking</li>
              <li className="cursor-pointer hover:text-black">Bus Ticketing</li>
              <NavLink to="/Package"><li className="cursor-pointer hover:text-black">Packages</li></NavLink>
            </ul>
          </div>
        </div>

        {/* Social Connect */}
        <div className="md:w-1/4 text-center md:text-left">
          <p className="font-semibold mb-3">Connect With Us On</p>

          <div className="flex justify-center md:justify-start gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61577112700910#" // <-- Replace link here
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-50 transition"
            >
              <FaFacebookF className="text-gray-800" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zodiraholidays/" // <-- Replace link here
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-800 transition"
            >
              <FaInstagram className="text-white" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@zodira.holidays" // <-- Replace link here
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-50 transition"
            >
              <FaTiktok className="text-gray-800" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9709155929" // <-- Replace with your phone number
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-50 transition"
            >
              <FaWhatsapp className="text-gray-800" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        All rights reserved@Zodira.Holidays. Developed by frostleaf
      </div>
    </footer>
  );
};

export default Footer;
