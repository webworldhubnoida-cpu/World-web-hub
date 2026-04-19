import { motion } from "motion/react";
import { TrendingUp, Users, Zap, Award, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";

const studies = [
  {
    title: "Healthcare Platform Transformation",
    problem: "Outdated legacy system causing 30% patient dropout due to poor UX.",
    solution: "Complete React-based redesign with automated scheduling and EMR integration.",
    results: ["50% increase in bookings", "40% reduction in admin time", "9.5/10 User rating"],
    tech: ["Next.js", "Firebase", "Twilio"]
  },
  {
    title: "EcoCommerce Scale-up",
    problem: "Inability to handle peak traffic during sales, leading to revenue loss.",
    solution: "Microservices architecture migration with headless commerce integration.",
    results: ["Zero downtime during Black Friday", "200% traffic capacity increase", "15% conversion lift"],
    tech: ["Node.js", "Docker", "AWS", "Shopify API"]
  }
];

export const CaseStudies = () => {
  return (
    <div className="pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Turning Challenges into Triumphs" 
          subtitle="Case Studies" 
        />

        <div className="space-y-16">
          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                   <div className="p-10 md:p-12">
                      <h3 className="text-3xl font-bold mb-8 group-hover:text-primary">{study.title}</h3>
                      
                      <div className="space-y-8">
                         <div>
                            <h4 className="flex items-center gap-2 font-bold text-red-500 uppercase tracking-widest text-xs mb-3">
                               <TrendingUp size={16} /> The Problem
                            </h4>
                            <p className="text-text-dark/70 leading-relaxed font-medium">{study.problem}</p>
                         </div>
                         
                         <div>
                            <h4 className="flex items-center gap-2 font-bold text-green-500 uppercase tracking-widest text-xs mb-3">
                               <Zap size={16} /> Our Solution
                            </h4>
                            <p className="text-text-dark/70 leading-relaxed font-medium">{study.solution}</p>
                         </div>

                         <div className="flex flex-wrap gap-2 pt-4">
                            {study.tech.map(t => (
                              <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md">
                                 {t}
                              </span>
                            ))}
                         </div>
                      </div>
                   </div>
                   
                   <div className="p-10 md:p-12 gradient-bg text-white flex flex-col justify-center">
                      <h4 className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs mb-8">
                         <Award size={16} /> Key Results
                      </h4>
                      <div className="space-y-8">
                         {study.results.map(res => (
                           <div key={res} className="flex items-center gap-6">
                              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                 <CheckCircle2 size={24} />
                              </div>
                              <p className="text-xl font-bold">{res}</p>
                           </div>
                         ))}
                      </div>
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
