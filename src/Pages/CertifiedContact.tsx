import React from "react";
import { FiCheckCircle, FiShield, FiGlobe } from "react-icons/fi";

const CertifiedServiceSection: React.FC = () => {
  return (
    <div className="w-full py-12 px-6 bg-gray-600 text-white text-center">
      {/* Title & subtitle */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-normal mb-4">
          Certified Service, Trusted Worldwide
        </h2>
        <p className="text-base max-w-2xl mx-auto leading-relaxed">
          We pride ourselves on quick responses, absolute confidentiality, and
          world-class service from the first message to your final destination.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-6 mb-12">
        <div className="flex-1 bg-sky-700 rounded-lg p-6 cursor-default">
          <div className="mb-4 flex justify-center text-sky-300">
            <FiCheckCircle size={40} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-sky-300">
            Quick Response
          </h3>
          <p className="text-sm">
            Professional team responds within minutes, 24/7
          </p>
        </div>

        <div className="flex-1 bg-sky-700 rounded-lg p-6 cursor-default">
          <div className="mb-4 flex justify-center text-sky-300">
            <FiShield size={40} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-sky-300">
            Absolute Confidentiality
          </h3>
          <p className="text-sm">
            Military-grade privacy protection for all communications
          </p>
        </div>

        <div className="flex-1 bg-sky-700 rounded-lg p-6 cursor-default">
          <div className="mb-4 flex justify-center text-sky-300">
            <FiGlobe size={40} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-sky-300">
            World-Class Service
          </h3>
          <p className="text-sm">
            International standards of luxury and excellence
          </p>
        </div>
      </div>

      {/* Footer box */}
      <div className="max-w-6xl mx-auto bg-sky-700 rounded-lg py-4 px-6 font-semibold text-sky-300 border border-sky-600">
        Experience the pinnacle of personalized service.
        <br />
        <span className="text-white font-normal">
          Contact VipMyConcierge today.
        </span>
      </div>
    </div>
  );
};

export default CertifiedServiceSection;
