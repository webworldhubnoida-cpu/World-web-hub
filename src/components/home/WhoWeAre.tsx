import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { Activity, Zap, ArrowRight, Globe } from "lucide-react";
import { Button } from "../ui/Button";

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const WhoWeAre = () => (
  <section 
    className="relative min-h-screen flex items-center py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b8.jpg')",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/85 z-0" />

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-4">
          We Offer Services To Improve Your Business
        </h2>
        <div className="flex items-center justify-center gap-1 text-primary mb-4">
          <div className="h-[3px] w-8 bg-primary rounded-full" />
          <Activity size={24} className="animate-pulse" />
          <div className="h-[3px] w-8 bg-primary rounded-full" />
        </div>
        <p className="text-text-dark/40 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Branding, Marketing, Leads Generation, Sales, Scale everything became easy if you make Digital platforms your True Friend.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mb-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark">Who We Are</h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-1 h-1.5 bg-primary rounded-full" 
            />
          </div>
          
          <p className="text-base md:text-lg text-text-dark/70 mb-6 leading-relaxed font-normal">
            <span className="font-bold text-text-dark">World Web Hub</span>, is a branding agency helping businesses to grow exponentially through various digital services including Brand Identity Designing, Packaging Designing, Website Designing, Digital Marketing, Social Media Management and all other related online services.
          </p>

          <h4 className="text-lg md:text-xl font-bold text-text-dark mb-6 border-l-4 border-primary pl-4">
            You have many reasons to connect with us:
          </h4>

          <motion.div 
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8"
          >
            {[
              { label: "4.7 Star Google Ratings", icon: "⭐" },
              { label: "Trusted By 10000+ Clients", icon: "🤝" },
              { label: "Expert Designing Team", icon: "🎨" },
              { label: "Seamless communication", icon: "💬" },
              { label: "12 Years of Experience", icon: "⏳" },
              { label: "Clear time frame for delivery", icon: "📅" }
            ].map((item) => (
              <motion.div 
                key={item.label} 
                variants={listItemVariants}
                className="flex items-center gap-3 group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all shadow-md">
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={12} className="text-white" />
                  </motion.div>
                </div>
                <span className="font-bold text-text-dark/90 text-sm md:text-base tracking-tight group-hover:text-primary transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <Button className="px-8 h-12 text-base">Contact Us Now</Button>
            <div className="hidden md:flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.img 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-4 border-white shadow-lg" 
                  alt="User" 
                />
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="w-10 h-10 rounded-full border-4 border-white bg-bg-light shadow-lg flex items-center justify-center text-[10px] font-bold"
              >
                +10k
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 rounded-[30px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] border-4 border-white max-w-[500px] mx-auto"
          >
            <img
              src="/gallery/who we are.jpeg"
              alt="Digital Solutions"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 blur-[60px] rounded-full z-0" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 blur-[60px] rounded-full z-0" 
          />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-16 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl z-20 cursor-pointer hover:bg-blue-700 transition-colors"
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
