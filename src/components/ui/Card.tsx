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
        y: -12, 
        boxShadow: "0 25px 50px rgba(30, 58, 138, 0.15)",
        borderColor: "transparent",
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
      } : {}}
      className={`glass rounded-[32px] p-8 border border-white/40 transition-all duration-500 relative group overflow-hidden ${className}`}
      onClick={onClick}
    >
      {hoverEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 p-[1px] gradient-primary rounded-[32px] mask-gradient" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
