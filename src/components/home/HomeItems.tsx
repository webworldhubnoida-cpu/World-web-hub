import React, { useState } from "react";
import { motion } from "motion/react";
import { Zap, Layout, Globe, ArrowRight } from "lucide-react";
import { Card } from "../ui/Card";

import { Link } from "react-router-dom";

export const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="overflow-hidden p-0 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="p-6 flex items-center justify-between">
        <h4 className="font-bold text-lg">{question}</h4>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <Zap size={20} className="text-primary" />
        </div>
      </div>
      {isOpen && (
        <div className="px-6 pb-6 text-text-dark/60 leading-relaxed font-medium">
          {answer}
        </div>
      )}
    </Card>
  );
};

export const TechSkill = ({ title, icon, skills }: { title: string; icon: any; skills: string[] }) => (
  <Card className="hover:border-primary/30 transition-all">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-bg-light rounded-full text-xs font-semibold text-text-dark/70">
          {skill}
        </span>
      ))}
    </div>
  </Card>
);

export const BlogCard = ({ image, title, date }: { image: string; title: string; date: string }) => (
  <Card className="p-0 overflow-hidden group h-full">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
    </div>
    <div className="p-6">
      <p className="text-xs text-text-dark/50 font-medium mb-2">{date}</p>
      <h4 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{title}</h4>
      <button className="text-primary font-bold text-sm flex items-center gap-2">Read More <ArrowRight size={16} /></button>
    </div>
  </Card>
);

export const TestimonialCard = ({ quote, author, role, image }: { quote: string; author: string; role: string; image?: string }) => (
  <Card className="relative p-8 h-full min-w-[350px] md:min-w-[450px] flex flex-col justify-between group hover:border-primary/50 transition-all duration-500">
    <div className="absolute top-6 right-8 text-primary/10">
      <Layout size={60} />
    </div>
    <p className="relative z-10 text-lg font-medium text-text-dark italic mb-8 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
        <img 
          src={image || `https://picsum.photos/seed/${author}/100/100`} 
          alt={author} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h4 className="font-black text-text-dark">{author}</h4>
        <p className="text-xs text-text-dark/50 font-black uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </Card>
);

export const AssociateCard = ({ name, domain }: { name: string; domain: string; key?: string | number }) => (
  <Card className="flex items-center gap-4 min-w-[280px] hover:border-primary/50 transition-all cursor-default select-none py-4 px-6">
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center border border-primary/5 shrink-0">
      <img
        src={`https://picsum.photos/seed/${name}/100/100`}
        alt={name}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex flex-col">
      <h4 className="font-bold text-text-dark tracking-tight">{name}</h4>
      <p className="text-[10px] text-text-dark/40 uppercase font-black tracking-widest leading-none mt-1">{domain}</p>
    </div>
  </Card>
);

export const TimelineItem = ({ year, title, desc }: { year: string; title: string; desc: string }) => (
  <div className="mb-10 md:mb-0 md:mt-10 relative md:w-1/5">
    <div className="absolute -left-[9px] md:left-1/2 md:-top-[9px] md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg-light" />
    <div className="ml-8 md:ml-0 md:text-center px-4">
      <span className="text-primary font-bold">{year}</span>
      <h5 className="font-bold text-lg mt-1">{title}</h5>
      <p className="text-sm text-text-dark/60 mt-2 italic">{desc}</p>
    </div>
  </div>
);

export const TeamMember = ({ image, name, role }: { image: string; name: string; role: string }) => (
  <Card className="group text-center">
    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
      <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
    </div>
    <h4 className="text-lg font-bold">{name}</h4>
    <p className="text-sm text-text-dark/60 font-medium">{role}</p>
  </Card>
);

export const BranchItem = ({ city, id }: { city: string; id: string }) => (
  <Link to={`/branch/${id}`} className="block">
    <div className="glass p-4 rounded-2xl flex items-center gap-4 hover:border-primary/30 transition-all group h-full">
      <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
        <Globe size={20} />
      </div>
      <span className="font-bold text-text-dark tracking-tight">{city}</span>
    </div>
  </Link>
);
