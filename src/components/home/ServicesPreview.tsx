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
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b3.jpg')",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/90 z-0" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading 
        title="Our Specialized IT Services" 
        subtitle="Digital Expertise" 
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <ServiceCard 
            key={service.id}
            id={service.id}
            image={service.image} 
            title={service.title} 
            desc={service.shortDesc}
          />
        ))}
      </motion.div>
    </div>
  </section>
);
