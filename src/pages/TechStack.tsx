import { motion } from "motion/react";
import { Terminal, Database, Cloud, Layout, Cpu, Globe, Wrench, Briefcase } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";

const stacks = [
  {
    category: "Frontend",
    icon: Layout,
    tools: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 100 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    category: "Backend",
    icon: Terminal,
    tools: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 95 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Go", level: 70 }
    ]
  },
  {
    category: "Database",
    icon: Database,
    tools: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma", level: 85 }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Cloud,
    tools: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 85 },
      { name: "Git", level: 95 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 90 }
    ]
  }
];

export const TechStack = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Cutting-Edge Toolkit" 
          subtitle="Technology Stack" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <stack.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{stack.category}</h3>
                </div>
                
                <div className="space-y-6">
                  {stack.tools.map(tool => (
                    <div key={tool.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                        <span>{tool.name}</span>
                        <span className="text-primary">{tool.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full gradient-bg rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
