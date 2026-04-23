import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "./HomeCards";
import { services } from "../../constants/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ServicesPreview = () => (
  <section 
    className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/gallery/b3.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/90 z-0" />

    <div className="relative z-10  flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Specialized IT Services" 
          subtitle="Digital Expertise" 
        />
      </div>

      {/* Full height slider */}
      <div className="relative flex-1 overflow-hidden mt-0">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 h-full items-center"
        >
          {[...services, ...services].map((service, idx) => (
            <div key={idx} className="min-w-[300px] h-full flex items-center">
              <ServiceCard 
                id={service.id}
                image={service.image} 
                title={service.title} 
                desc={service.shortDesc}
              />
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  </section>
);