import { motion } from "motion/react";
import { Check, Shield, Zap, Globe, Cpu, Headphones, Clock, Star } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PricingSection } from "../components/home/PricingSection";
import { Button } from "../components/ui/Button";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Scale your business globally with our localized SEO and international server infrastructure."
  },
  {
    icon: Shield,
    title: "High Security",
    desc: "Enterprise-grade protection with SSL, firewalls, and regular security audits for all plans."
  },
  {
    icon: Cpu,
    title: "Tech Support",
    desc: "Dedicated technical assistance to ensure your platform runs smoothly 24/7 without downtime."
  }
];

const faqs = [
  {
    q: "How long does it take to complete a project?",
    a: "Standard websites typically take 1-2 weeks, while complex e-commerce or business portals may take 4-8 weeks depending on requirements."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide 1 month of free maintenance for all projects and offer yearly maintenance packages for long-term support."
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can upgrade from a basic to a dynamic or e-commerce website at any time by paying the difference."
  }
];

export const Pricing = () => {
  return (
    <div className="pt-24 bg-bg-light">
      {/* Hero Section for Pricing */}
      <div className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"/>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary text-xs font-black uppercase tracking-widest border border-primary/30 mb-6 inline-block">
              Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              Invest in Your Brand's Future <span className="text-transparent bg-clip-text font-bold text-5xl"></span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
              We offer premium digital solutions tailored to your budget. Choose a plan that fits your current needs and scale as you grow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Pricing Section Component */}
      <PricingSection />

      {/* Why Choose Us / Additional Content */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Beyond Just Pricing" 
            subtitle="The Web World Hub Advantage" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-[2.5rem] border-slate-100 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={30} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-text-dark/60 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading 
            title="Common Questions" 
            subtitle="FAQ" 
            centered
          />
          
          <div className="mt-16 space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 glass rounded-3xl border-white shadow-sm"
              >
                <h4 className="text-xl font-black mb-3 text-text-dark uppercase tracking-tight flex items-center gap-3">
                  <span className="text-primary">Q.</span> {faq.q}
                </h4>
                <p className="text-text-dark/60 font-medium leading-relaxed pl-8">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gradient-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"/>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
                Ready to Start Your <br/>Digital Transformation?
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Button variant="secondary" size="lg" className="rounded-full px-12 py-6 text-xl">
                  Get a Free Quote
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-12 py-6 text-xl border-white text-white hover:bg-white hover:text-primary">
                  Speak with Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
