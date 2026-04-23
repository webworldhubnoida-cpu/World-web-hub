import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

import { Link } from "react-router-dom";

export const AboutCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Card className="text-center group hover:border-primary/50 transition-all h-full bg-white/50 backdrop-blur-sm">
      <div className="w-16 h-16 mx-auto bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:gradient-primary group-hover:text-white transition-all duration-500">
        <Icon size={32} />
      </div>
      <h4 className="text-xl font-black mb-3 text-slate-900 tracking-tight">{title}</h4>
      <p className="text-sm text-slate-900/60 leading-relaxed font-medium">{desc}</p>
    </Card>
  </motion.div>
);

export const ServiceCard = ({ 
  image, 
  title, 
  desc, 
  id 
}: { 
  image: string; 
  title: string; 
  desc: string; 
  id: string;
  key?: string | number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="h-full"
  >
    <Card className="p-0 overflow-hidden group hover:border-primary/30 h-full flex flex-col bg-white">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          width="400"
          height="192"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={`/service/${id}`}>
            <Button variant="white" size="sm" className="rounded-full">Quick View</Button>
          </Link>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-black mb-3 group-hover:text-primary transition-colors text-slate-900 tracking-tight">{title}</h4>
        <p className="text-sm text-slate-900/60 mb-6 line-clamp-2 leading-relaxed flex-grow">
          {desc}
        </p>
        <Link to={`/service/${id}`} className="text-primary font-bold text-sm flex items-center gap-2 group/link mt-auto">
          Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  </motion.div>
);

export const ProjectCard = ({ image, title, category }: { image: string; title: string; category: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <Card className="p-0 overflow-hidden group border-none shadow-none hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden rounded-[32px]">
        <img 
          src={image} 
          alt={title} 
          width="600"
          height="256"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          referrerPolicy="no-referrer" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{category}</p>
          <h4 className="text-2xl font-black text-white mb-6 tracking-tight">{title}</h4>
          <Button size="sm" variant="primary" className="gap-2 w-fit rounded-full">View Case Study <ExternalLink size={16} /></Button>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const WhyUsCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card className="text-center group hover:bg-white transition-all h-full border-none shadow-none hover:shadow-xl bg-slate-50">
      <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:gradient-primary group-hover:text-white shadow-sm transition-all duration-500">
        <Icon size={32} />
      </div>
      <h4 className="text-xl font-black mb-3 text-slate-900 tracking-tight">{title}</h4>
      <p className="text-sm text-slate-900/60 leading-relaxed font-medium">{desc}</p>
    </Card>
  </motion.div>
);

export const PricingCard = ({ title, price, features, popular = false }: { title: string; price: string; features: string[]; popular?: boolean }) => (
  <div className="h-full">
    <Card className={`relative h-full flex flex-col transition-all duration-500 p-8 ${popular ? "bg-white border-primary shadow-2xl scale-100 md:scale-105 z-10" : "bg-slate-900/60 backdrop-blur-xl border-white/10 text-white shadow-xl hover:border-primary/40 transition-all duration-300"}`}>
      {popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest z-20 shadow-lg shadow-primary/20">Most Popular</span>}
      <div className="flex-grow">
        <h4 className={`text-xl font-black mb-2 tracking-tight ${popular ? "text-slate-900" : "text-black"}`}>{title}</h4>
        <div className="flex items-baseline gap-1 mb-8">
          <span className={`text-4xl font-black tracking-tighter ${popular ? "text-primary" : "text-black"}`}>{price}</span>
          {price !== "Custom" && <span className={`font-medium ${popular ? "text-slate-900/50" : "text-black/70"}`}>/mo</span>}
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((f) => (
            <li key={f} className={`flex items-center gap-3 text-sm font-bold ${popular ? "text-slate-900/70" : "text-black/90"}`}>
              <CheckCircle2 size={18} className={`${popular ? "text-primary" : "text-black"} shrink-0`} /> {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <Button 
          variant="primary" 
          className="w-full rounded-full py-4 shadow-lg shadow-primary/20"
          href="https://pmny.in/YIjJuNoJpFZP"
          target="_blank"
        >
          Get Started
        </Button>
      </div>
    </Card>
  </div>
);
