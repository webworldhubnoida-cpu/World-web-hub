import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (like '+', '%', or '/7')
  const numberMatch = value.match(/(\d+)/);
  const suffix = value.replace(/(\d+)/, "");
  const target = numberMatch ? parseInt(numberMatch[0]) : 0;

  const spring = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });

  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toString() + suffix
  );

  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, target, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => setDisplay(latest));
  }, [displayValue]);

  return <span ref={ref}>{display}</span>;
};

const StatItem = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <h3 className="text-4xl md:text-5xl font-bold mb-2">
      <Counter value={value} />
    </h3>
    <p className="text-white/60 uppercase tracking-widest text-xs font-semibold">{label}</p>
  </motion.div>
);

export const StatsSection = () => (
  <section className="py-24 gradient-bg text-white relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-white blur-[100px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent blur-[120px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      <StatItem value="10+" label="Years Experience" delay={0.1} />
      <StatItem value="150+" label="Experts Team" delay={0.2} />
      <StatItem value="95%" label="Client Retention" delay={0.3} />
      <StatItem value="24/7" label="Support" delay={0.4} />
    </div>
  </section>
);
