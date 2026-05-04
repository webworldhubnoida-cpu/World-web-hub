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
  },
  {
    id: "kLg1rfThJHg",
    title: "Work Process",
    description: "Watch Our Work Process"
  },
  {
    id: "Vzu96S6aA1k",
    title: "Work Process",
    description: "Watch Our Work Process"
  }
];

export const Videos = () => {
  return (
    <div className="pt-20 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading 
          title="Our Video Showcase" 
          subtitle="Watch Our Work in Action" 
          centered
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group border"
            >

              {/* VIDEO */}
              <div className="aspect-video relative bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition">
                  <div className="w-14 h-14 bg-black/40 backdrop-blur rounded-full flex items-center justify-center">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-base font-bold text-text-dark line-clamp-2 group-hover:text-primary transition">
                  {video.title}
                </h3>
                <p className="text-sm text-text-dark/60 mt-1 line-clamp-2">
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