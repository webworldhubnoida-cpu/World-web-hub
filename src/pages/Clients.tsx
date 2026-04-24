import { motion } from "motion/react";
import { Star, Quote, Globe } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";

const logos = [
  "TechCore", "EcoSolutions", "NexusGroup", "CloudWave", "SmartSystems", "PrimeLabs", "GlobalPulse", "VisionX"
];

const testimonials = [
  {
    name: "James Wilson",
    role: "CTO, TechCore",
    content: "World Web Hub has been instrumental in our digital transformation. Their attention to detail and technical expertise is unmatched.",
    image: "https://picsum.photos/seed/u1/100/100"
  },
  {
    name: "Aria Gupta",
    role: "CEO, EcoSolutions",
    content: "The team delivered our project ahead of schedule and exceeded all our expectations. A truly professional experience.",
    image: "https://picsum.photos/seed/u2/100/100"
  },
  {
    name: "Robert Fox",
    role: "Product Lead, NexusGroup",
    content: "Building our platform with World Web Hub was the best decision we made this year. High quality code and great communication.",
    image: "https://picsum.photos/seed/u3/100/100"
  }
];

export const Clients = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        <SectionHeading 
          title="The Brands That Trust Us" 
          subtitle="Our Clients" 
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass h-32 flex items-center justify-center rounded-3xl grayscale hover:grayscale-0 hover:border-primary/30 transition-all group"
            >
              <span className="text-2xl font-black text-text-dark/20 group-hover:text-primary transition-colors uppercase tracking-widest">{logo}</span>
            </motion.div>
          ))}
        </div>

        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Testimonials" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col relative pt-12">
                <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Quote size={32} />
                </div>
                
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-text-dark/70 text-lg leading-relaxed mb-8 flex-grow">
                  "{test.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-text-dark/5 pt-6">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold">{test.name}</h4>
                    <p className="text-xs text-text-dark/40 font-bold uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
