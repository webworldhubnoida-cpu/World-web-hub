import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./Button";
import { TopHeader } from "./TopHeader";
import { useModal } from "./ModalContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Our Projects", path: "/projects" },
  { name: "Video", path: "/videos" },
  { name: "Gallery", path: "/gallery" },
  { name: "Pricing", path: "/pricing" },
  { name: "Branches", path: "/branches" }, //hello
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openBookingModal } = useModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Header */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <TopHeader />
      </div>

      {/* Navbar */}
      <nav
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "py-2 bg-white/90 backdrop-blur-xl shadow-lg"
            : "py-4 bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/gallery/navbarlogo.png" className="h-35 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button onClick={openBookingModal}>
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-screen w-[80%] bg-white z-50 p-6 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}

              <Button onClick={openBookingModal}>
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};