import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { PricingCard } from "./HomeCards";
import { FadeIn, FadeInStagger } from "../ui/FadeIn";

export const PricingSection = () => (
  <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-green-50">

    {/* 🌈 Soft Glow Background */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      
      <SectionHeading 
        title="Flexible Pricing for Every Business" 
        subtitle="Our Plans & Services" 
      />

      {/* 🔥 Website Packages */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-10 text-gray-800 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-green-500" />
          Website Packages
        </h3>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard 
          title="Basic Website" 
          price="₹7,999" 
          features={["5 Pages Website","Responsive Design","Basic SEO","Contact Form"]} 
        />
        <PricingCard 
          title="Dynamic Website" 
          price="₹16,999" 
          features={["Admin Panel","Dynamic Content","Advanced UI","SEO Optimized"]} 
          popular 
        />
        <PricingCard 
          title="E-Commerce" 
          price="₹25,999" 
          features={["Product Management","Cart & Checkout","Payment Gateway","Order Tracking"]} 
        />
      </FadeInStagger>

     

    </div>
  </section>
);