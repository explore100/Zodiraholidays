import React from 'react';
import { FaPlane, FaShieldAlt, FaClock } from 'react-icons/fa';

const WhyBookWithUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-50 to-purple-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">Why Book With Us?</h2>
      <p className="text-gray-500 mb-12 max-w-xl mx-auto">
        Experience hassle-free international travel booking
      </p>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 justify-center">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm mx-auto">
          <FaPlane className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
          <p className="text-gray-500 text-sm">
            Access to flights from major airlines worldwide, connecting you to every corner of the globe
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm mx-auto">
          <FaShieldAlt className="text-black text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Booking</h3>
          <p className="text-gray-500 text-sm">
            Your personal and payment information is protected with industry-leading security measures
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-sm mx-auto">
          <FaClock className="text-black text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
          <p className="text-gray-500 text-sm">
            Our dedicated support team is available around the clock to assist you with your travel needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;
