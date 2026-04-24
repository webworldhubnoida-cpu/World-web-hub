import { motion } from "motion/react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Image as ImageIcon, Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/gallery/a.jpeg", title: "Corporate Excellence", category: "Web Design" },
  { src: "/gallery/b.jpeg", title: "Modern Architecture", category: "Industrial" },
  { src: "/gallery/c.jpeg", title: "Digital Strategy", category: "Business" },
  { src: "/gallery/d.jpeg", title: "Creative Workspace", category: "Corporate" },
  { src: "/gallery/e.jpeg", title: "Mobile Innovation", category: "App Dev" },
  { src: "/gallery/f.jpeg", title: "Cloud Solutions", category: "Tech Stack" },
  { src: "/gallery/g.jpeg", title: "Global Logistics", category: "Logistics" },
  { src: "/gallery/h.jpeg", title: "Marketing Insights", category: "Marketing" },
  { src: "/gallery/i.jpeg", title: "Contact Support", category: "Support" },
];

export const Gallery = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Visual Experience" 
          subtitle="Our Work Gallery" 
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-80 glass rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3 border border-white/30">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
                    <ImageIcon size={16} />
                    <span>View Project</span>
                  </div>
                </div>
              </div>

              {/* Icon Top Right */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                <Maximize2 size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
