import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineItem } from "./HomeItems";

export const EvolutionTimeline = () => (
  <section className="py-24 bg-bg-light relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="The History of Evolution" 
        subtitle="Our Journey" 
      />
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-2 md:justify-between mt-20">
        <TimelineItem year="2016" title="The Beginning" desc="Started with 3 developers in a co-working space." />
        <TimelineItem year="2018" title="Expansion" desc="Opened our second branch and hit 50+ staff." />
        <TimelineItem year="2021" title="Global Reach" desc="Started serving clients across 20+ countries." />
        <TimelineItem year="2024" title="Industry Leader" desc="Recognized as one of the fastest growing IT companies." />
        <TimelineItem year="2026" title="The Future" desc="Launching our new AI-driven innovation wing." />
      </div>
    </div>
  </section>
);
