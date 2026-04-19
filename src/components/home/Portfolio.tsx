import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./HomeCards";
import { Button } from "../ui/Button";

export const Portfolio = () => (
  <section className="py-24 bg-white/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Our Portfolio" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          image="https://picsum.photos/seed/fintech/800/600"
          title="Nova Bank"
          category="Fintech"
        />
        <ProjectCard 
          image="https://picsum.photos/seed/ecommerce/800/600"
          title="Luxe Mart"
          category="E-commerce"
        />
        <ProjectCard 
          image="https://picsum.photos/seed/health/800/600"
          title="Vital Care"
          category="Healthcare"
        />
      </div>
      <div className="text-center mt-12">
        <Button variant="outline">View All Projects</Button>
      </div>
    </div>
  </section>
);
