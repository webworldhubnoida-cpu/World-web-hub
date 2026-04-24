import { motion, useReducedMotion } from "motion/react";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
  staggerChildren?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  viewportAmount = 0.1,
  staggerChildren = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: shouldReduceMotion ? 0 : direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({
  children,
  className = "",
  staggerStep = 0.1,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerStep?: number;
  delay?: number;
}) => {
  return (
    <FadeIn
      direction="none"
      staggerChildren={staggerStep}
      delay={delay}
      className={className}
    >
      {children}
    </FadeIn>
  );
};
