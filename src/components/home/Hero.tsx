import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { useModal } from "../ui/ModalContext";
import { HeroForm } from "./HeroForm";
const heroSlides = [

    {
    image: "https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg",
    title: "Powerful Mobile",
    highlight: "App Development",
    tag: "Android & iOS Experts",
    fontClass: "font-sans tracking-tight",
    bgClass: "bg-primary/5",
    accentColor: "text-primary"
  },
  {
    image: "https://images.pexels.com/photos/6956915/pexels-photo-6956915.jpeg",
    title: "Smart Online",
    highlight: "E-commerce Solutions",
    tag: "Sell Products Online",
    fontClass: "font-serif tracking-wide",
    bgClass: "bg-secondary/5",
    accentColor: "text-secondary"
  },
  {
    image: "https://images.pexels.com/photos/17771096/pexels-photo-17771096.jpeg",
    title: "Creative Unique",
    highlight: "Logo Design",
    tag: "Build Your Brand Identity",
    fontClass: "font-mono uppercase tracking-tight",
    bgClass: "bg-primary/5",
    accentColor: "text-primary"
  },
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
    bgClass: "bg-secondary/5",
    accentColor: "text-secondary"
  },
  {
    image: "/gallery/b6.jpg",
    title: "Modern Robust",
    highlight: "Cloud Architecture",
    tag: "Cloud Experts",
    fontClass: "font-mono tracking-tighter uppercase",
    bgClass: "bg-primary/5",
    accentColor: "text-primary"
  },
  {
    image: "https://wallpapers.com/images/hd/4k-social-media-5333-x-3000-wallpaper-gbskt9sxxqx0ex04.jpg",
    title: "SEO and Meta Ads",
    highlight: "Grow Your Business",
    tag: "Growth Partners",
    fontClass: "font-sans tracking-tight",
    bgClass: "bg-secondary/5",
    accentColor: "text-secondary"
  },

  // 🔥 New Slides


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
    <section className="relative w-full h-[calc(100vh-110px)] lg:h-[calc(100vh-135px)] overflow-hidden bg-bg-dark">
      {/* Static Background Gradient - Better for performance than infinite animations */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full z-1" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full z-1" />

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
              className="w-full h-full object-cover grayscale-[0.2]" 
              alt="background"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
            {/* Professional Overlay */}
            <div className="absolute inset-0 gradient-dark-hero opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl w-full lg:w-3/5">
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
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-bold tracking-widest uppercase mb-8 text-white/90`}
              >
                <span className="w-2 h-2 rounded-full gradient-primary animate-pulse" />
                {slide.tag}
              </motion.span>

              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`text-5xl md:text-[75px] lg:text-[85px] leading-[0.95] mb-8 font-black text-white tracking-tighter`}
              >
                {slide.title}<br />
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="gradient-text italic inline-block drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]"
                >
                  {slide.highlight}
                </motion.span>
              </motion.h1>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10 font-medium"
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
                  variant="primary"
                  className="px-8 h-14 md:px-10 md:h-16 rounded-full text-lg shadow-2xl relative overflow-hidden group" 
                  onClick={openBookingModal}
                >
                  Start Your Journey
                </Button>
                <button className="flex items-center gap-3 text-white font-bold group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-bg-dark transition-all duration-300"
                  >
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
                  </motion.div>
                  <span className="border-b border-white/30 group-hover:border-white transition-colors pb-1">Watch Showreel</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:block w-full lg:w-2/5 max-w-md">
          <HeroForm />
        </div>
      </div>
    </section>
  );
};
