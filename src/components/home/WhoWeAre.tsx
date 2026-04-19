import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { Activity, Zap, ArrowRight, Globe } from "lucide-react";
import { Button } from "../ui/Button";

export const WhoWeAre = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-4">
          We Offer Services To Improve Your Business
        </h2>
        <div className="flex items-center justify-center gap-1 text-primary mb-6">
          <div className="h-[3px] w-8 bg-primary rounded-full" />
          <Activity size={28} className="animate-pulse" />
          <div className="h-[3px] w-8 bg-primary rounded-full" />
        </div>
        <p className="text-text-dark/40 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
          Branding, Marketing, Leads Generation, Sales, Scale everything became easy if you make Digital platforms your True Friend.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-8">
            <h3 className="text-3xl font-extrabold text-text-dark">Who We Are</h3>
            <div className="mt-2 w-20 h-1.5 bg-primary rounded-full" />
          </div>
          
          <p className="text-lg text-text-dark/70 mb-8 leading-relaxed font-normal">
            <span className="font-bold text-text-dark">World Web Hub</span>, is a branding agency helping businesses to grow exponentially through various digital services including Brand Identity Designing, Packaging Designing, Website Designing, Digital Marketing, Social Media Management and all other related online services.
          </p>

          <h4 className="text-xl font-bold text-text-dark mb-8 border-l-4 border-primary pl-4">
            You have many reasons to connect with us:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
            {[
              { label: "4.7 Star Google Ratings", icon: "⭐" },
              { label: "Trusted By 10000+ Clients", icon: "🤝" },
              { label: "Expert Designing Team", icon: "🎨" },
              { label: "Seamless communication", icon: "💬" },
              { label: "12 Years of Experience", icon: "⏳" },
              { label: "Clear time frame for delivery", icon: "📅" }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={14} className="text-white" />
                  </motion.div>
                </div>
                <span className="font-bold text-text-dark/90 text-base tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <Button className="px-10 h-14 text-lg">Contact Us Now</Button>
            <div className="hidden md:flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="User" />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-bg-light shadow-lg flex items-center justify-center text-xs font-bold">+10k</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] border-8 border-white">
            <img
              src="/gallery/who we are.jpeg"
              alt="Digital Solutions"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[80px] rounded-full z-0" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 blur-[80px] rounded-full z-0" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-6 top-20 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl z-20 cursor-pointer hover:bg-blue-700 transition-colors"
          >
            <div className="relative">
              <Globe size={28} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);
