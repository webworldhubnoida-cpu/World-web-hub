import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "./HomeItems";
import { testimonials } from "../../constants/testimonials";

export const TestimonialsSection = () => (
  <section 
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b3.jpg')"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/90 z-0" />

    <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
      <SectionHeading 
        title="What Our Clients Say" 
        subtitle="Testimonials" 
      />
    </div>

    <div className="relative flex overflow-x-hidden z-10 pause-on-hover">
      <div className="animate-marquee-slow flex items-stretch gap-12 py-8 px-4 whitespace-nowrap">
        {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
          <div key={`${t.id}-${index}`} className="flex-shrink-0 flex">
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
