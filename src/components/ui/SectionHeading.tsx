import React from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  white?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true, white = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-secondary font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 justify-center"
      >
        <span className="w-8 h-[1px] bg-secondary/30" />
        {subtitle}
        <span className="w-8 h-[1px] bg-secondary/30" />
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-black tracking-tight ${white ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </motion.h2>
      {centered && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1.5 w-24 gradient-primary mx-auto mt-6 rounded-full"
        />
      )}
    </div>
  );
};
