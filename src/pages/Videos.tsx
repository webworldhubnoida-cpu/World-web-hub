import { motion } from "motion/react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Play } from "lucide-react";

const videos = [
  {
    id: "qazuQldUm9Q",
    title: "Apne Business ko Brand Banayein!",
    description: "Professional Website Design by Web World Hub"
  },
  {
    id: "EeSEqYAXRdo",
    title: "Website Designing & Development",
    description: "B2B Portal Designing and Application Development"
  }
];

export const Videos = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Video Showcase" 
          subtitle="Watch Our Work in Action" 
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {videos.map((video) => (
            <motion.div 
              key={video.id}
              whileHover={{ y: -10 }}
              className="glass rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group"
            >
              <div className="aspect-[9/16] relative bg-black flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0`}
                  title={video.title}
                  className=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay Play Icon (Visible when not playing) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                   <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      <Play size={40} fill="currentColor" />
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-text-dark mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-text-dark/60 font-medium leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
