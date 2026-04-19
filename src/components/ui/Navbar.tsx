import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./Button";
import { TopHeader } from "./TopHeader";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className={`transition-all duration-500 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
      }`}>
        <TopHeader scrolled={scrolled} />
      </div>
      <nav
        className={`transition-all duration-300 bg-bg-light border-b border-primary/10 shadow-sm ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
      <div className="max-w-7xl mx-auto w-full px-6 h-[75px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="h-35 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src="/gallery/logo.png" 
              alt="World Web Hub" 
              className="h-full w-auto object-contain"
            />
          </div>
          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-widest transition-all hover:text-primary ${
                  location.pathname === link.path 
                    ? "text-primary" 
                    : "text-text-dark/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-text-dark/10 pl-10">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl transition-all text-text-dark/60 hover:bg-primary/5 hover:text-primary"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button 
              variant="primary" 
              size="sm" 
              className="px-6 rounded-full shadow-none hover:shadow-lg"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-text-dark hover:bg-primary/10 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-dark p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-light/95 backdrop-blur-2xl border-b border-primary/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? "text-primary" : "text-text-dark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={() => setIsOpen(false)}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
};
