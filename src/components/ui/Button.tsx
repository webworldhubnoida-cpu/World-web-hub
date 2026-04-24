import { motion } from "motion/react";
import React from "react";

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
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
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
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {(variant === "primary" || variant === "white" || variant === "premium" || variant === "accent" || variant === "secondary") && (
        <motion.div
          initial={{ x: "-100%", skewX: -15 }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-white/20 z-0"
        />
      )}
    </>
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
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};
