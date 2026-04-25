import { motion } from "motion/react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center pointer-events-none">
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-bg-light/50 backdrop-blur-sm overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ 
            x: ["-100%", "-30%", "-10%", "0%"],
          }}
          transition={{
            duration: 10,
            times: [0, 0.2, 0.7, 1],
            ease: "easeOut",
          }}
          className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
        />
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>

      {/* Center Feedback (Subtle) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative w-12 h-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-2 border-primary/20 border-t-primary rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border-2 border-secondary/20 border-b-secondary rounded-full"
            />
          </div>
          <motion.p
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary"
          >
            Web World Hub
          </motion.p>
        </div>
      </motion.div>

      {/* Backdrop Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/40 backdrop-blur-md -z-10"
      />
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
