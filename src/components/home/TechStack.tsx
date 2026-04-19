import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TechSkill } from "./HomeItems";
import { Layout, Database, Cloud, Zap } from "lucide-react";

export const TechStack = () => (
  <section className="py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Our Technology Arsenal" 
        subtitle="Tech Stack" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TechSkill title="Frontend" icon={<Layout size={24} />} skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]} />
        <TechSkill title="Backend" icon={<Database size={24} />} skills={["Node.js", "Go", "Python", "PostgreSQL"]} />
        <TechSkill title="Cloud" icon={<Cloud size={24} />} skills={["AWS", "Google Cloud", "Docker", "Kubernetes"]} />
        <TechSkill title="DevOps" icon={<Zap size={24} />} skills={["CI/CD", "Terraform", "Jenkins", "Security"]} />
      </div>
    </div>
  </section>
);
