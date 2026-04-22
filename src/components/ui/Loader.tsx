import { motion } from "motion/react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-light">
      <div className="relative flex flex-col items-center">
        {/* Logo or Brand mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <img src="/gallery/logo.png" alt="Logo" width="120" height="40" className="h-10 w-auto" />
        </motion.div>

        {/* Animated Progress Bar */}
        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-primary"
          />
        </div>

        {/* Subtle Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-text-dark"
        >
          Loading Excellence
        </motion.p>
      </div>
    </div>
  );
};

export const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden bg-text-dark/5 rounded-xl ${className}`}>
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
};
