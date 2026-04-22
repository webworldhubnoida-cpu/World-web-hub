import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { PricingCard } from "./HomeCards";
import { FadeIn, FadeInStagger } from "../ui/FadeIn";

export const PricingSection = () => (
  <section 
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b1.jpg')"
    }}
  >
    <div className="absolute inset-0 bg-white/90 z-0" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      
      <SectionHeading 
        title="Flexible Pricing for Every Business" 
        subtitle="Our Plans & Services" 
      />

      {/* 🔥 Website Packages */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Website Packages</h3>
      </FadeIn>
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard 
          title="Basic Website" 
          price="₹7,999" 
          features={[
            "5 Pages Website",
            "Responsive Design",
            "Basic SEO",
            "Contact Form"
          ]} 
        />
        <PricingCard 
          title="Dynamic Website" 
          price="₹16,999" 
          features={[
            "Admin Panel",
            "Dynamic Content",
            "Advanced UI",
            "SEO Optimized"
          ]} 
          popular 
        />
        <PricingCard 
          title="E-Commerce" 
          price="₹25,999" 
          features={[
            "Product Management",
            "Cart & Checkout",
            "Payment Gateway",
            "Order Tracking"
          ]} 
        />
      </FadeInStagger>

      {/* 🚀 Business Portals */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Business Portals</h3>
      </FadeIn>
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <PricingCard 
          title="B2B Portal" 
          price="Starting ₹50K" 
          features={[
            "Vendor Management",
            "Bulk Orders",
            "Custom Dashboard",
            "Scalable System"
          ]} 
        />
        <PricingCard 
          title="B2C Portal" 
          price="Starting ₹50K" 
          features={[
            "Customer Accounts",
            "Product Listings",
            "Payment Integration",
            "Analytics Dashboard"
          ]} 
        />
      </FadeInStagger>

      {/* ⚙️ Software Solutions */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Software Solutions</h3>
      </FadeIn>
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard title="Billing Software" price="Custom" features={["Invoice System", "GST Ready", "Reports"]} />
        <PricingCard title="Inventory Management" price="Custom" features={["Stock Tracking", "Alerts", "Reports"]} />
        <PricingCard title="HRMS" price="Custom" features={["Employee Management", "Payroll", "Attendance"]} />
        <PricingCard title="CMS" price="Custom" features={["Content Control", "User Roles", "Dashboard"]} />
        <PricingCard title="Custom Application" price="Custom" features={["Web/App Dev", "API Integration", "Scalable"]} />
        <PricingCard title="Custom Software" price="Custom" features={["Enterprise Grade", "Secure", "High Performance"]} />
      </FadeInStagger>

      {/* 📈 Marketing Services */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Marketing Services</h3>
      </FadeIn>
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <PricingCard title="SEO" price="Custom" features={["On-Page SEO", "Off-Page SEO", "Ranking Boost"]} />
        <PricingCard title="SMO" price="Custom" features={["Social Growth", "Content Strategy", "Engagement"]} />
        <PricingCard title="Google My Business" price="Custom" features={["Profile Setup", "Optimization", "Ranking"]} />
        <PricingCard title="Google Ads" price="Custom" features={["Campaign Setup", "Leads", "Optimization"]} />
        <PricingCard title="Social Media Ads" price="Custom" features={["Facebook/Instagram Ads", "Targeting", "ROI Focus"]} />
        <PricingCard title="Google AdSense" price="Custom" features={["Setup", "Approval Help", "Monetization"]} />
      </FadeInStagger>

      {/* 🎨 Creative Services */}
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Creative Services</h3>
      </FadeIn>
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard title="Logo Design (2D/3D)" price="Custom" features={["Brand Identity", "Creative Concepts", "Revisions"]} />
        <PricingCard title="Graphic Design" price="Custom" features={["Social Posts", "Banners", "Ads"]} />
        <PricingCard title="Video Editing" price="Custom" features={["Reels/Ads", "Transitions", "Professional Output"]} />
      </FadeInStagger>

    </div>
  </section>
);