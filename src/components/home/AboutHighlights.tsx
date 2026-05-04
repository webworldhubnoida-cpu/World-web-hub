import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { AboutCard } from "./HomeCards";
import { Target, Eye, Heart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const AboutHighlights = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading 
        title="Vision, Mission & Our Core Values" 
        subtitle="The World Web Hub Ethos" 
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <AboutCard 
          Icon={Target}
          title="Our Mission"
          desc="To empower every business with scalable, innovative, and human-centric software solutions that drive real-world impact."
        />
        <AboutCard 
          Icon={Eye}
          title="Our Vision"
          desc="To be the global benchmark for excellence in digital transformation, fostering growth through cutting-edge technology."
        />
        <AboutCard 
          Icon={Heart}
          title="Our Values"
          desc="Integrity, innovation, and inclusivity define our culture. We build with passion and support with dedication."
        />
      </motion.div>
    </div>
  </section>
);
