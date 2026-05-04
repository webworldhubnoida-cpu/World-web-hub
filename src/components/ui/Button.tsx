import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "premium" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  target,
  rel,
  download,
  isLoading,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "gradient-primary text-white shadow-lg shadow-primary/25 rounded-[16px] relative overflow-hidden",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25 rounded-[16px]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-[16px]",
    ghost: "bg-transparent text-primary hover:bg-primary/10 rounded-[12px]",
    white: "bg-white text-primary hover:bg-white/90 shadow-xl rounded-[16px] relative overflow-hidden",
    premium: "gradient-premium text-black font-bold shadow-lg shadow-highlight/25 rounded-[16px] relative overflow-hidden",
    accent: "gradient-accent text-white shadow-lg shadow-accent/25 rounded-[16px] relative overflow-hidden",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <div className="relative flex items-center justify-center gap-2">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Loader2 className="w-5 h-5 animate-spin text-current" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      
      {(variant === "primary" || variant === "white" || variant === "premium" || variant === "accent" || variant === "secondary") && !isLoading && (
        <motion.div
          initial={{ x: "-100%", skewX: -15 }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-white/20 z-0 pointer-events-none"
        />
      )}
    </div>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        download={download}
        className={classes}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={!isLoading ? { scale: 1.05, y: -2 } : {}}
      whileTap={!isLoading ? { scale: 0.95 } : {}}
      className={classes}
      disabled={isLoading}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};
