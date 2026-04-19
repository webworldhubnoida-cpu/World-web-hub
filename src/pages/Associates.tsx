import { motion } from "motion/react";
import { Handshake, Globe, ExternalLink } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";

const associates = [
  {
    name: "Amazon Web Services",
    type: "Cloud Partner",
    desc: "Providing secure, scalable cloud infrastructure for our global enterprise clients.",
    image: "https://picsum.photos/seed/a1/200/200"
  },
  {
    name: "Google Cloud",
    type: "Platform Partner",
    desc: "Leveraging advanced AI and data analytics capabilities for intelligent solutions.",
    image: "https://picsum.photos/seed/a2/200/200"
  },
  {
    name: "Microsoft Azure",
    type: "Infrastructure Partner",
    desc: "Powering hybrid cloud management and enterprise-grade software solutions.",
    image: "https://picsum.photos/seed/a3/200/200"
  },
  {
    name: "Stripe",
    type: "Payments Partner",
    desc: "Enabling seamless global commerce and financial infrastructure for e-commerce.",
    image: "https://picsum.photos/seed/a4/200/200"
  }
];

export const Associates = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Collaborating with Global Leaders" 
          subtitle="Our Associates" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {associates.map((assoc, index) => (
            <motion.div
              key={assoc.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:border-primary/30 transition-all p-8">
                 <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-inner flex-shrink-0 group-hover:shadow-primary/10 transition-shadow overflow-hidden">
                       <img 
                          src={assoc.image} 
                          alt={assoc.name} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                          referrerPolicy="no-referrer"
                       />
                    </div>
                    <div>
                       <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{assoc.name}</h3>
                          <ExternalLink size={18} className="text-text-dark/20 group-hover:text-primary transition-colors cursor-pointer" />
                       </div>
                       <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">{assoc.type}</p>
                       <p className="text-text-dark/60 font-medium leading-relaxed">{assoc.desc}</p>
                    </div>
                 </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center glass p-16 rounded-[40px] relative overflow-hidden">
           <Handshake size={80} className="mx-auto text-primary/10 mb-8 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Interested in becoming a partner?</h2>
              <p className="text-text-dark/50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                 We're always looking to collaborate with forward-thinking companies. Join our network of associates and help us shape the digital landscape together.
              </p>
              <button className="gradient-bg text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                 Apply for Partnership
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
