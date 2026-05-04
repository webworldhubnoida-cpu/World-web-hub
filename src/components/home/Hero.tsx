import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { useModal } from "../ui/ModalContext";
import { HeroForm } from "./HeroForm";

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg",
    title: "Powerful Mobile",
    highlight: "App Development",
    tag: "Android & iOS Experts",
  },
  {
    image: "https://images.pexels.com/photos/6956915/pexels-photo-6956915.jpeg",
    title: "Smart Online",
    highlight: "E-commerce Solutions",
    tag: "Sell Products Online",
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
    <section className="relative w-full min-h-screen pt-[140px] lg:pt-[160px] overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="text-center lg:text-left max-w-xl w-full">
          <span className="text-blue-400 text-sm">{slide.tag}</span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight">
            {slide.title}
            <br />
            <span className="text-blue-500">{slide.highlight}</span>
          </h1>

          <p className="text-gray-300 mt-4">
            Elevating your digital presence with innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Button onClick={openBookingModal}>
              Start Your Journey
            </Button>

            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Watch Showreel
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg mt-10 lg:mt-0">
            <HeroForm />
          </div>
        </div>

      </div>
    </section>
  );
};