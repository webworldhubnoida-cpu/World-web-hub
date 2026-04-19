import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { WhyUsCard } from "./HomeCards";
import { Users, Zap, TrendingUp, Headset } from "lucide-react";

export const WhyUs = () => (
  <section className="py-24 bg-bg-light relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading 
        title="Why Choose World Web Hub?" 
        subtitle="The HUB Advantage" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <WhyUsCard 
          Icon={Users} 
          title="Expert Team"
          desc="150+ tech specialists with deep industry knowledge."
        />
        <WhyUsCard 
          Icon={Zap} 
          title="Agile Process"
          desc="Faster delivery cycles without compromising on quality."
        />
        <WhyUsCard 
          Icon={TrendingUp} 
          title="Scalable Tech"
          desc="Future-proof solutions built to grow with your business."
        />
        <WhyUsCard 
          Icon={Headset} 
          title="24/7 Support"
          desc="Dedicated assistance whenever you need it most."
        />
      </div>
    </div>
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
  </section>
);
