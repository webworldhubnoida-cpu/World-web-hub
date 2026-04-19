import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "./HomeItems";
import { testimonials } from "../../constants/testimonials";

export const TestimonialsSection = () => (
  <section className="py-24 bg-bg-light overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <SectionHeading 
        title="What Our Clients Say" 
        subtitle="Testimonials" 
      />
    </div>

    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee-slow flex gap-8 py-4 px-4 whitespace-nowrap">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div key={`${t.id}-${index}`} className="flex-shrink-0">
            <TestimonialCard 
              quote={t.quote} 
              author={t.author} 
              role={t.role} 
              image={t.image}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
