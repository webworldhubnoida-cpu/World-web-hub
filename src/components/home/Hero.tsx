import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { useModal } from "../ui/ModalContext";

const heroSlides = [
  {
    image: "/gallery/b5.jpg",
    title: "Building Scalable",
    highlight: "Digital Solutions",
    tag: "IT Solutions Provider",
    fontClass: "font-sans tracking-tight",
    bgClass: "bg-primary/5",
    accentColor: "text-primary"
  },
  {
    image: "/gallery/b2.jpg",
    title: "Designing Future",
    highlight: "Brand Experiences",
    tag: "Creative Agency",
    fontClass: "font-serif italic tracking-wide",
    bgClass: "bg-accent/5",
    accentColor: "text-accent"
  },
  {
    image: "/gallery/b6.jpg",
    title: "Modern Robust",
    highlight: "Cloud Architecture",
    tag: "Cloud Experts",
    fontClass: "font-mono tracking-tighter uppercase",
    bgClass: "bg-secondary/5",
    accentColor: "text-secondary"
  },
  {
    image: "https://wallpapers.com/images/hd/4k-social-media-5333-x-3000-wallpaper-gbskt9sxxqx0ex04.jpg",
    title: "SEO and Meta ads",
    highlight: "grow your business",
    tag: "IT Solutions Provider",
    fontClass: "font-sans tracking-tight",
    bgClass: "bg-primary/5",
    accentColor: "text-primary"
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openBookingModal } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-110px)] lg:h-[calc(100vh-135px)] overflow-hidden bg-text-dark mt-[110px] lg:mt-[135px]">
      {/* Static Background Gradient - Better for performance than infinite animations */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full z-1" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full z-1" />

      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="absolute inset-0"
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover" 
              alt="background"
              referrerPolicy="no-referrer"
              loading="eager"
              {...({ fetchpriority: "high" } as any)}
            />
            {/* Professional Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-text-dark via-text-dark/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 via-transparent to-transparent opacity-60" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.19, 1, 0.22, 1],
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                },
                exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
              }}
              className="flex flex-col items-start"
            >
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold tracking-widest uppercase mb-8 text-white`}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {slide.tag}
              </motion.span>

              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`text-6xl md:text-[85px] leading-[0.95] mb-8 font-black text-white tracking-tighter`}
              >
                {slide.title}<br />
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-primary italic inline-block"
                >
                  {slide.highlight}
                </motion.span>
              </motion.h1>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-xl text-white/70 max-w-xl leading-relaxed mb-12 font-medium"
              >
                Elevating your digital presence through world-class engineering, strategic design, and innovative cloud solutions.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-wrap gap-6 items-center"
              >
                <Button 
                  size="lg" 
                  className="px-10 h-16 rounded-full text-lg shadow-2xl shadow-primary/30 relative overflow-hidden group" 
                  onClick={openBookingModal}
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"
                  />
                </Button>
                <button className="flex items-center gap-3 text-white font-bold group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-text-dark transition-all duration-300"
                  >
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
                  </motion.div>
                  <span className="border-b border-white/30 group-hover:border-white transition-colors pb-1">Watch Showreel</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Professional Navigation Indicators */}
     
      </div>
    </section>
  );
};
