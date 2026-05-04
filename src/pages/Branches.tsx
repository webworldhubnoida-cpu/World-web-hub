import { motion } from "motion/react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { branches } from "../constants/branches";
import { Link } from "react-router-dom";

export const Branches = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Growing Network in India" 
          subtitle="All Branches" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }}
            >
              <Card className="p-0 overflow-hidden h-full flex flex-col group hover:border-primary/50 transition-colors">
            
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{branch.city}</h3>
                      <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                        {branch.country}
                      </span>
                   </div>
                   <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex gap-4 items-start">
                         <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><MapPin size={16} /></div>
                         <p className="text-sm font-medium text-text-dark/70 leading-relaxed">{branch.address}</p>
                      </div>
                      <div className="flex gap-4 items-center">
                         <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><Mail size={16} /></div>
                         <p className="text-sm font-medium text-text-dark/70">{branch.email}</p>
                      </div>
                   </div>
                   <div className="flex flex-col gap-3">
                     <Button 
                       variant="outline" 
                       href="tel:+919971001036"
                       className="w-full gap-2"
                     >
                       <Phone size={18} />Call Us
                     </Button>
                     <Link to={`/branch/${branch.id}`} className="w-full">
                      <Button variant="primary" className="w-full gap-2">
                          View Branch <ExternalLink size={18} />
                      </Button>
                     </Link>
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
