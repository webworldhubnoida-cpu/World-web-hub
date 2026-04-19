import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "./HomeCards";
import { services } from "../../constants/services";

export const ServicesPreview = () => (
  <section className="py-24 bg-white/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Our Specialized IT Services" 
        subtitle="Digital Expertise" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard 
            key={service.id}
            id={service.id}
            image={service.image} 
            title={service.title} 
            desc={service.shortDesc}
          />
        ))}
      </div>
    </div>
  </section>
);
