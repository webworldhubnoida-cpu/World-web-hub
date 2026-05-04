import { motion } from "motion/react";
import { Zap, Terminal } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { services } from "../constants/services";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Digital Solutions for Success" 
          subtitle="Our Services" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-primary/50 transition-colors p-0 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-text-dark/60 mb-6 leading-relaxed flex-grow">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-dark/80 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/service/${service.id}`}>
                    <Button variant="ghost" className="w-full group/btn">
                      Learn More <Zap size={18} className="ml-2 group-hover/btn:fill-primary" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Section */}
        <div className="mt-32 glass rounded-[40px] p-12 text-center overflow-hidden relative">
          <div className="relative z-10">
            <SectionHeading 
              title="Powered by Modern Tech Stack" 
              subtitle="The Core Foundation" 
            />
            <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-40 grayscale hover:grayscale-0 transition-all">
              <TechIcon Icon={Terminal} name="TypeScript" />
              <TechIcon Icon={Terminal} name="React" />
              <TechIcon Icon={Terminal} name="Node.js" />
              <TechIcon Icon={Terminal} name="Python" />
              <TechIcon Icon={Terminal} name="Next.js" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute top-10 left-10 text-8xl font-black">SERVICES</div>
             <div className="absolute bottom-10 right-10 text-8xl font-black">SOLUTIONS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechIcon = ({ Icon, name }: { Icon: any; name: string }) => (
  <div className="flex flex-col items-center gap-2">
    <Icon size={48} />
    <span className="text-xs font-bold uppercase tracking-widest">{name}</span>
  </div>
);
