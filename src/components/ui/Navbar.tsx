import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./Button";
import { TopHeader } from "./TopHeader";
import { useModal } from "./ModalContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Branches", path: "/branches" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const { openBookingModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Top Header */}
      <div className={`transition-all duration-500 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
      }`}>
        <TopHeader scrolled={scrolled} />
      </div>

      {/* Navbar */}
      <nav
        className={`transition-all duration-300 border-b border-white/10 ${
          scrolled 
            ? "py-2 bg-white/80 backdrop-blur-xl shadow-lg" 
            : "py-4 bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/gallery/navbarlogo.png" 
              alt="World Web Hub" 
              className="h-35 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium relative transition-colors ${
                    location.pathname === link.path 
                      ? "text-primary" 
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-green-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">

              {/* Dark Mode */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}
              <Button 
                size="sm"
                className="px-5 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md hover:shadow-lg transition-all"
                onClick={openBookingModal}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md bg-gray-100"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col"
              >
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <img src="/gallery/navbarlogo.png" className="h-8" />
                  <button onClick={() => setIsOpen(false)}>
                    <X size={26} />
                  </button>
                </div>

                <div className="flex flex-col p-8 gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium ${
                          location.pathname === link.path 
                            ? "text-primary" 
                            : "text-gray-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <Button
                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-500 text-white"
                    onClick={() => { setIsOpen(false); openBookingModal(); }}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};