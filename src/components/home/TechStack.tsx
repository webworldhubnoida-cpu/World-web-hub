import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TechSkill } from "./HomeItems";
import { Layout, Database, Cloud, Zap } from "lucide-react";

export const TechStack = () => (
  <section className="py-14 bg-bg-light">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeading 
        title="Our Technology Arsenal" 
        subtitle="Tech Stack" 
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        <TechSkill 
          title="Frontend" 
          icon={<Layout size={18} />} 
          skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]} 
        />
        <TechSkill 
          title="Backend" 
          icon={<Database size={18} />} 
          skills={["Node.js", "Go", "Python", "PostgreSQL"]} 
        />
        <TechSkill 
          title="Cloud" 
          icon={<Cloud size={18} />} 
          skills={["AWS", "Google Cloud", "Docker", "Kubernetes"]} 
        />
        <TechSkill 
          title="DevOps" 
          icon={<Zap size={18} />} 
          skills={["CI/CD", "Terraform", "Jenkins", "Security"]} 
        />
      </div>
    </div>
  </section>
);
