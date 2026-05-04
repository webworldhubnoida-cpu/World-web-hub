import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.4)" 
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-28 z-40 w-14 h-14 gradient-bg text-white rounded-full shadow-2xl flex items-center justify-center transition-all group"
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp size={24} />
          </motion.div>
          
          {/* Ripple effect on hover */}
          <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-700" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
