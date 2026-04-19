import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";

const heroSlides = [
  {
    image: "https://wallpaperaccess.com/full/5673719.jpg",
    title: "Building Scalable",
    highlight: "Digital Solutions",
    tag: "IT Solutions Provider",
    fontClass: "font-sans tracking-tight",
    bgClass: "bg-primary/5",
    accentColor: "text-primary"
  },
  {
    image: "https://img.freepik.com/premium-photo/digital-retail-dreamscape-augmented-reality-bliss_462685-3015.jpg",
    title: "Designing Future",
    highlight: "Brand Experiences",
    tag: "Creative Agency",
    fontClass: "font-serif italic tracking-wide",
    bgClass: "bg-accent/5",
    accentColor: "text-accent"
  },
  {
    image: "https://wallpaperbat.com/img/134453002-robust-cloud-security-strategy-in-2024.jpg",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className={`relative min-h-screen flex items-center pt-24 lg:pt-32 transition-colors duration-1000 ${slide.bgClass}`}>
      <div className="absolute inset-0 z-0 opacity-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover" 
              alt="background"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-light/80 via-transparent to-bg-light" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="relative min-h-[400px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className={`inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-xs font-black tracking-widest uppercase mb-6 ${slide.accentColor}`}>
                {slide.tag}
              </span>
              <h1 className={`text-5xl md:text-[80px] leading-[1.1] mb-6 ${slide.fontClass} text-text-dark max-w-4xl`}>
                {slide.title}<br />
                <span className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}>
                  {slide.highlight}
                </span>
              </h1>
              <p className="text-xl text-text-dark/70 max-w-[700px] leading-relaxed mb-10 font-medium">
                We empower businesses with cutting-edge software development, cloud infrastructure, and modern design thinking.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="px-12 h-16 translate-y-0 hover:-translate-y-1 transition-transform shadow-xl">
                  Start a Project
                </Button>
                <Button variant="outline" size="lg" className="px-12 h-16 translate-y-0 hover:-translate-y-1 transition-transform bg-white/50 backdrop-blur-sm">
                  Our Portfolio
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="mt-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? "w-16 bg-primary" : "w-4 bg-primary/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
