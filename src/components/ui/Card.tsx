import React from "react";
import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card = ({ children, className = "", hoverEffect = true, onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { 
        y: -10, 
        boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)",
        borderColor: "rgba(124, 58, 237, 0.4)",
        transition: { duration: 0.3, ease: "easeOut" } 
      } : {}}
      className={`glass rounded-3xl p-8 border border-white/40 transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
