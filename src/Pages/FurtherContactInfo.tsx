import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: <Phone size={28} className="text-white" />,
    title: "Call Us",
    info: "+977-9709155929",
    bgColor: "bg-indigo-400",
  },
  {
    icon: <Mail size={28} className="text-white" />,
    title: "Email Us",
    info: "zodiraholidays@gmail.com",
    bgColor: "bg-yellow-600",
  },
  {
    icon: <MessageCircle size={28} className="text-white" />,
    title: "WhatsApp",
    info: "+977-9709155929",
    bgColor: "bg-teal-500",
  },
];

const ContactUs: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Have questions? Need further information? Reach out to us anytime!
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${method.bgColor}`}
            >
              <div className="mb-5">{method.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-white mb-4">{method.info}</p>
              <a
                href={
                  method.title === "WhatsApp"
                    ? `https://wa.me/${method.info.replace(/\D/g, "")}`
                    : method.title === "Email Us"
                    ? `mailto:${method.info}`
                    : `tel:${method.info}`
                }
                className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
