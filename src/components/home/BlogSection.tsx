import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { BlogCard } from "./HomeItems";

export const BlogSection = () => (
  <section className="py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Latest Tech Insights" 
        subtitle="Our Blog" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard image="https://picsum.photos/seed/blog1/800/600" title="The Future of AI in Fintech" date="March 15, 2024" />
        <BlogCard image="https://picsum.photos/seed/blog2/800/600" title="Scaling React Apps in 2024" date="March 12, 2024" />
        <BlogCard image="https://picsum.photos/seed/blog3/800/600" title="Cybersecurity Best Practices" date="March 10, 2024" />
      </div>
    </div>
  </section>
);
