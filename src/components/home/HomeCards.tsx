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
    <Card className="text-center group hover:border-primary/50 transition-all h-full">
      <div className="w-16 h-16 mx-auto bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-all">
        <Icon size={32} />
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-sm text-text-dark/60 leading-relaxed font-medium">{desc}</p>
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
    <Card className="p-0 overflow-hidden group hover:border-primary/30 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={`/service/${id}`}>
            <Button variant="white" size="sm">Quick View</Button>
          </Link>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-sm text-text-dark/60 mb-6 line-clamp-2 leading-relaxed flex-grow">
          {desc}
        </p>
        <Link to={`/service/${id}`} className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
          Learn More <ArrowRight size={18} />
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
    <Card className="p-0 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <Button size="sm" className="gap-2">View Case Study <ExternalLink size={16} /></Button>
        </div>
      </div>
      <div className="p-6">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{category}</p>
        <h4 className="text-xl font-bold">{title}</h4>
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
    <Card className="text-center group hover:bg-white transition-all h-full">
      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
        <Icon size={32} />
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-sm text-text-dark/60 leading-relaxed font-medium">{desc}</p>
    </Card>
  </motion.div>
);

export const PricingCard = ({ title, price, features, popular = false }: { title: string; price: string; features: string[]; popular?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: popular ? 0.9 : 0.95 }}
    whileInView={{ opacity: 1, scale: popular ? 1.05 : 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Card className={`relative ${popular ? "border-primary shadow-2xl" : ""}`}>
      {popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">Most Popular</span>}
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-extrabold">{price}</span>
        {price !== "Custom" && <span className="text-text-dark/50 font-medium">/mo</span>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm font-medium text-text-dark/70">
            <CheckCircle2 size={18} className="text-primary shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <Button variant={popular ? "primary" : "outline"} className="w-full">Get Started</Button>
    </Card>
  </motion.div>
);
