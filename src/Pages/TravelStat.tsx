import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlinePicture,
  AiOutlineEnvironment,
  AiOutlineSchedule,
} from "react-icons/ai";
import { MdGroup, MdTour, MdOutlineAudioFile, MdOutlineLan } from "react-icons/md";
import { RiMapPinUserLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

const TravelStats: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-center text-gray-900">
      {/* Header */}
      <h1 className="mb-2 text-lg md:text-xl font-normal">
        Travel more, but <strong>6x</strong> easier.
      </h1>
      <p className="mb-12 text-base md:text-lg text-gray-500 italic">
        Save hours with <em>our local experts and curated plans.</em>
      </p>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-between mb-8 border-t border-b border-gray-300 py-5">
        <StatItem title="98%" subtitle="Travelers trust Guiders to explore Edinburgh like a local" />
        <StatItem title="200+" subtitle="Custom travel plans for solo, couple, and group adventures" />
        <StatItem title="150+" subtitle="Certified local guides ready to assist your journey" />
        <StatItem title="4.9+" subtitle="Average rating from travelers worldwide" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 text-gray-600 text-sm md:text-base">
        <Tag icon={<AiOutlineClockCircle />} text="Morning to Night Itineraries" />
        <Tag icon={<RiMapPinUserLine />} text="Local Experience" />
        <Tag icon={<MdTour />} text="Night Tours" />
        <Tag icon={<FaRegCalendarAlt />} text="Custom Trip Plans" />
        <Tag icon={<MdGroup />} text="Walking Tours" />
        <Tag icon={<AiOutlineSchedule />} text="Flexible Scheduling" />
        <Tag icon={<AiOutlinePicture />} text="Photography Spots" />
        <Tag icon={<MdOutlineAudioFile />} text="Audio Guide Support" />
        <Tag icon={<AiOutlineEnvironment />} text="Nature & Hidden Gems" />
        <Tag icon={<MdOutlineLan />} text="Historical Landmarks" />
      </div>
    </div>
  );
};

type StatItemProps = {
  title: string;
  subtitle: string;
};

const StatItem: React.FC<StatItemProps> = ({ title, subtitle }) => (
  <div className="flex-1 border-r border-gray-300 last:border-r-0 px-3 mb-6 md:mb-0 text-left min-w-[200px]">
    <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
    <p className="mt-1 text-xs md:text-sm text-gray-600">{subtitle}</p>
  </div>
);

type TagProps = {
  icon: React.ReactNode;
  text: string;
};

const Tag: React.FC<TagProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-1 rounded-full border border-gray-300 px-3 py-1.5 whitespace-nowrap">
    <span className="text-lg flex items-center">{icon}</span>
    <span>{text}</span>
  </div>
);

export default TravelStats;
