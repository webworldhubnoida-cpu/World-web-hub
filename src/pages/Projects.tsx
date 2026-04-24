import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Filter, Layers } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { projects, categories } from "../constants/portfolio";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Featured Masterpieces" 
          subtitle="Recent Portfolio" 
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                filter === cat 
                  ? "gradient-bg text-white shadow-lg shadow-primary/30" 
                  : "glass text-text-dark hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, category, image, tech, desc, link }: any) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="group overflow-hidden p-0 border-transparent hover:border-primary/20 h-full flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          width="400"
          height="256"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <div className="flex gap-4 mb-4">
             {link && link !== "#" && (
               <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md flex items-center justify-center text-white transition-colors"
               >
                 <ExternalLink size={20} />
               </a>
             )}
             <button className="w-10 h-10 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md flex items-center justify-center text-white transition-colors">
               <Github size={20} />
             </button>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-text-dark/60 mb-4 line-clamp-2">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t: string) => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card>
  </motion.div>
);
