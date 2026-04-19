import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQItem } from "./HomeItems";

export const FaqSection = () => (
  <section 
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b1.jpg')",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/85 z-0" />

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <SectionHeading 
        title="Frequently Asked Questions" 
        subtitle="Support" 
      />
      <div className="mt-12 space-y-4">
        <FAQItem question="What industries do you work with?" answer="We specialize in Fintech, Healthcare, E-commerce, and SaaS, but our experts can adapt to any industry." />
        <FAQItem question="How long does a typical project take?" answer="A standard web project takes 4-8 weeks, while complex platforms may take 3-6 months." />
        <FAQItem question="Do you offer ongoing maintenance?" answer="Yes, we provide 24/7 maintenance and support packages tailored to your needs." />
      </div>
    </div>
  </section>
);
