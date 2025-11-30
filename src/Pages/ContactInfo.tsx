import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

const ContactInfo: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 text-gray-900 font-sans">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold mb-2 leading-tight">
        We’d love to hear from you
      </h2>
      <p className="text-gray-600 mb-10 text-base max-w-lg">
        Need something cleared up? Here are our most frequently asked questions.
      </p>

      {/* Contact Items */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-12">
        {/* Email */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="p-3 rounded-lg bg-rose-100 text-rose-500 mb-4">
            <HiOutlineMail size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-gray-700 mb-1 text-sm text-center sm:text-left max-w-xs">
            Our friendly team is here to help.
          </p>
          <a
            
            className="text-indigo-600 hover:underline font-medium text-sm"
          >
            zodiraholidays@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="p-3 rounded-lg bg-purple-100 text-purple-500 mb-4">
            <IoCallOutline size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-gray-700 mb-1 text-sm text-center sm:text-left max-w-xs">
            Everyday 24 hours we are availble for your service
          </p>
          <a
           
            className="text-indigo-600 hover:underline font-medium text-sm"
          >
            +977- 9709155929
          </a>
        </div>

        {/* Office */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="p-3 rounded-lg bg-green-100 text-green-500 mb-4">
            <GoLocation size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-1">Office</h3>
          <p className="text-gray-700 mb-1 text-sm text-center sm:text-left max-w-xs">
            Come say hello at our office HQ.
          </p>
          <address className="not-italic text-indigo-600 hover:underline font-medium text-sm cursor-pointer text-center sm:text-left">
            kushun marg, koteswor, kathmandu
            <br />
            bagmati province, Nepal 44600
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
