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
      <div className={`transition-all duration-500 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
      }`}>
        <TopHeader scrolled={scrolled} />
      </div>
      <nav
        className={`transition-all duration-300 border-b border-primary/10 shadow-sm ${
          scrolled ? "py-2 bg-bg-light/80 backdrop-blur-lg" : "py-4 bg-bg-light"
        }`}
      >
      <div className="max-w-7xl mx-auto w-full px-6 h-[75px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="h-35 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src="/gallery/navbarlogo.png" 
              alt="World Web Hub" 
              width="150"
              height="40"
              className="h-full w-auto object-contain"
            />
          </div>
          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-widest transition-all relative py-2 group ${
                  location.pathname === link.path 
                    ? "text-primary" 
                    : "text-text-dark/70 hover:text-primary"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
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
              onClick={openBookingModal}
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-bg-light shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-primary/10">
                 <img src="/gallery/logo.png" alt="Logo" width="120" height="40" className="h-10 w-auto" />
                 <button onClick={() => setIsOpen(false)} className="p-2 text-text-dark">
                  <X size={28} />
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
                      className={`text-2xl font-bold tracking-tight ${
                        location.pathname === link.path ? "text-primary" : "text-text-dark"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button className="w-full" onClick={() => { setIsOpen(false); openBookingModal(); }}>
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
};
