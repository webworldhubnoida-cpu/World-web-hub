import { motion } from "motion/react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { teamMembers } from "../constants/team";

export const Team = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="The Brilliant Minds at World Web Hub" 
          subtitle="Full Team" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
            >
              <Card className="group border-transparent hover:border-primary/30 p-0 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 p-6 translate-y-full group-hover:translate-y-0 duration-300">
                    <div className="flex gap-4">
                      <SocialIcon Icon={Linkedin} />
                      <SocialIcon Icon={Twitter} />
                      <SocialIcon Icon={Mail} />
                    </div>
                  </div>
                </div>
                <div className="p-8 text-center flex flex-col flex-grow">
                  <h4 className="text-xl font-black mb-1 leading-tight">{member.name}</h4>
                  <p className="text-primary font-black text-[10px] tracking-widest uppercase mb-4 mt-auto">{member.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ Icon }: any) => (
  <button className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-primary rounded-xl backdrop-blur-md flex items-center justify-center transition-all">
    <Icon size={18} />
  </button>
);
