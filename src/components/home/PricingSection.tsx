import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { PricingCard } from "./HomeCards";

export const PricingSection = () => (
  <section 
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b1.jpg')",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/90 z-0" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading 
        title="Plans for Every Scale" 
        subtitle="Pricing" 
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard title="Startup" price="$499" features={["Basic Web App", "5 Pages", "Standard Support"]} />
        <PricingCard title="Business" price="$1499" features={["Custom Software", "15 Pages", "Priority Support"]} popular />
        <PricingCard title="Enterprise" price="Custom" features={["Full Scale Platform", "Unlimited Pages", "24/7 Support"]} />
      </div>
    </div>
  </section>
);
