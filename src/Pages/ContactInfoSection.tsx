import React from "react";
import {
  BiMapPin,
  BiPhoneCall,
  BiEnvelope,
  BiBuilding,
  BiEditAlt,
} from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactInfoSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-24 text-gray-700">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <BiMapPin className="shrink-0 text-gray-700" size={20} />
            <div>
              <p className="font-semibold">koteswor,kathmandu</p>
              <p className="text-sm max-w-xs leading-relaxed">
                bagmati province, kathmandu, kushun marg, 44600
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BiPhoneCall className="shrink-0 text-gray-700" size={20} />
            <p className="text-sm font-normal">+977-9709155929</p>
          </div>

          <div className="flex items-center gap-3">
            <BiEnvelope className="shrink-0 text-gray-700" size={20} />
            <p className="text-sm font-normal">zodiraholidays@gmail.com</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <BiMapPin className="shrink-0 text-gray-700" size={20} />
            <div>
              <p className="font-semibold">Nepal</p>
              <p className="text-sm max-w-xs leading-relaxed">
                koteswor road , near tinkune road, zodira holidays, kathmandu,
                koteswor 44600
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BiBuilding className="shrink-0 text-gray-700" size={20} />
            <div className="text-sm">
              <p>zodira holidays</p>
              <p>Pvt.Ltd</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {/* Title + Icon */}
            <div className="flex items-center gap-2">
              <BiEditAlt className="text-gray-700" size={20} />
              <span className="text-sm font-semibold">Follow us on:</span>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start gap-4 mt-1 flex-wrap">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61577112700910#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-50 transition"
              >
                <FaFacebookF className="text-gray-800" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zodiraholidays/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-800 transition"
              >
                <FaInstagram className="text-white" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@zodira.holidays"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-50 transition"
              >
                <FaTiktok className="text-gray-800" />
              </a>

              {/* WhatsApp */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
