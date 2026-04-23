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

      {/* 🚀 Business Portals */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-10 text-gray-800 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-green-500" />
          Business Portals
        </h3>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <PricingCard 
          title="B2B Portal" 
          price="Starting ₹50K" 
          features={["Vendor Management","Bulk Orders","Dashboard","Scalable System"]} 
        />
        <PricingCard 
          title="B2C Portal" 
          price="Starting ₹50K" 
          features={["Customer Accounts","Product Listings","Payment Integration","Analytics Dashboard"]} 
        />
      </FadeInStagger>

      {/* ⚙️ Software Solutions */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-10 text-gray-800 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-green-500" />
          Software Solutions
        </h3>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard title="Billing Software" price="Custom" features={["Invoice System","GST Ready","Reports"]} />
        <PricingCard title="Inventory Management" price="Custom" features={["Stock Tracking","Alerts","Reports"]} />
        <PricingCard title="HRMS" price="Custom" features={["Employee Management","Payroll","Attendance"]} />
        <PricingCard title="CMS" price="Custom" features={["Content Control","User Roles","Dashboard"]} />
        <PricingCard title="Custom Application" price="Custom" features={["Web/App Dev","API Integration","Scalable"]} />
        <PricingCard title="Custom Software" price="Custom" features={["Enterprise Grade","Secure","High Performance"]} />
      </FadeInStagger>

      {/* 📈 Marketing Services */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-10 text-gray-800 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-green-500" />
          Marketing Services
        </h3>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard title="SEO" price="Custom" features={["On-Page SEO","Off-Page SEO","Ranking Boost"]} />
        <PricingCard title="SMO" price="Custom" features={["Social Growth","Content Strategy","Engagement"]} />
        <PricingCard title="Google My Business" price="Custom" features={["Profile Setup","Optimization","Ranking"]} />
        <PricingCard title="Google Ads" price="Custom" features={["Campaign Setup","Leads","Optimization"]} />
        <PricingCard title="Social Media Ads" price="Custom" features={["Facebook/Instagram Ads","Targeting","ROI Focus"]} />
        <PricingCard title="Google AdSense" price="Custom" features={["Setup","Approval Help","Monetization"]} />
      </FadeInStagger>

      {/* 🎨 Creative Services */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-10 text-gray-800 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-gradient-to-r from-blue-600 to-green-500" />
          Creative Services
        </h3>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard title="Logo Design (2D/3D)" price="Custom" features={["Brand Identity","Creative Concepts","Revisions"]} />
        <PricingCard title="Graphic Design" price="Custom" features={["Social Posts","Banners","Ads"]} />
        <PricingCard title="Video Editing" price="Custom" features={["Reels/Ads","Transitions","Professional Output"]} />
      </FadeInStagger>

    </div>
  </section>
);