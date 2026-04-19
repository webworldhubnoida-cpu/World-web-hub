import React from "react";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <h3 className="text-4xl md:text-5xl font-bold mb-2">{value}</h3>
    <p className="text-white/60 uppercase tracking-widest text-xs font-semibold">{label}</p>
  </div>
);

export const StatsSection = () => (
  <section className="py-20 gradient-bg text-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      <StatItem value="10+" label="Years Experience" />
      <StatItem value="150+" label="Experts Team" />
      <StatItem value="95%" label="Client Retention" />
      <StatItem value="24/7" label="Support" />
    </div>
  </section>
);
