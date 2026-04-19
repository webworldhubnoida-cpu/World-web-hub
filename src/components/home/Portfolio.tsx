import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./HomeCards";
import { Button } from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Portfolio = () => (
  <section 
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b1.jpg')",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/90 z-0" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Our Portfolio" 
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <ProjectCard 
          image="https://picsum.photos/seed/fintech/800/600"
          title="Nova Bank"
          category="Fintech"
        />
        <ProjectCard 
          image="https://picsum.photos/seed/ecommerce/800/600"
          title="Luxe Mart"
          category="E-commerce"
        />
        <ProjectCard 
          image="https://picsum.photos/seed/health/800/600"
          title="Vital Care"
          category="Healthcare"
        />
      </motion.div>
      <div className="text-center mt-12">
        <Button variant="outline">View All Projects</Button>
      </div>
    </div>
  </section>
);
