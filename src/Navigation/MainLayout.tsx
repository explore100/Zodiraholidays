import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SubscribeForm from "../Layout/Subscribe";
import Footer from "../Layout/Footer";
import zodiraiconsImg from "../assets/zodiicons.png";
import ScrollToTop from "../Layout/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/AboutUs", label: "About" },
    { to: "/Tour", label: "Tour" },
    { to: "/Package", label: "Package" },
    { to: "/Contact", label: "Contact" },
    { to: "/testimonials", label: "Testimonials"},
    
  ];

  return (
    <>
    <ScrollToTop/>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm rounded-xl ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-20 md:h-24 ">
          {/* Larger Logo without affecting layout */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src={zodiraiconsImg}
              alt="Zodira Holidays"
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-contain"
            />

            {/* Tagline visible on all screen sizes */}
            <div className="leading-tight text-left">
              <p className="text-sm md:text-base font-medium text-gray-700">
                Every <span className="text-[#FFB800] font-bold">DREAM</span>{" "}
                destination
                <br />
                begins <span className="text-[#FFB800] font-bold">WITH US</span>
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-lg font-semibold text-gray-800">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black border-b-2 border-black pb-1"
                        : "hover:text-black transition"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/BookNow"
              className="bg-yellow-500 text-white px-6 py-2 rounded-full text-base font-medium hover:bg-yellow-700 transition"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold text-gray-800">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/BookNow"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition"
              >
                Book Now
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-24 md:pt-28 min-h-screen bg-[#f9fafb]">
        <Outlet />
      </main>
      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/9709155929"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 
             bg-green-500 text-white w-14 h-14 rounded-full 
             flex items-center justify-center shadow-xl
             animate-pulse hover:scale-110 transition-transform"
>
  <FaWhatsapp size={32} />
</a>



      <SubscribeForm />
      <Footer />
    </>
  );
};

export default MainLayout;
