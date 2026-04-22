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
      <img 
        src={image} 
        alt={title} 
        width="400"
        height="192"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" 
        referrerPolicy="no-referrer" 
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <p className="text-xs text-text-dark/50 font-medium mb-2">{date}</p>
      <h4 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{title}</h4>
      <button className="text-primary font-bold text-sm flex items-center gap-2">Read More <ArrowRight size={16} /></button>
    </div>
  </Card>
);

export const TestimonialCard = ({ quote, author, role, image }: { quote: string; author: string; role: string; image?: string }) => (
  <Card className="relative p-10 w-[320px] min-h-[500px] h-auto flex flex-col justify-between group hover:border-primary/50 transition-all duration-500 bg-white/80 backdrop-blur-sm whitespace-normal">
    <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
      <Layout size={80} />
    </div>
    
    <div className="relative z-10 mb-8">
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
      <p className="text-lg font-medium text-text-dark italic leading-relaxed">
        "{quote}"
      </p>
    </div>

    <div className="relative z-10 flex flex-col items-center text-center mt-auto pt-8 border-t border-primary/5">
      <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl mb-4 group-hover:scale-110 transition-transform duration-500">
        <img 
          src={image || `https://picsum.photos/seed/${author}/100/100`} 
          alt={author} 
          width="80"
          height="80"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <h4 className="font-black text-text-dark text-lg break-words px-2">{author}</h4>
        <p className="text-xs text-primary font-black uppercase tracking-widest mt-1 break-words px-2">{role}</p>
      </div>
    </div>
  </Card>
);

export const AssociateCard = ({ name, image }: { name: string; image: string; key?: string | number }) => (
  <Card className="flex flex-col items-center gap-4 min-w-[220px] hover:border-primary/50 transition-all cursor-default select-none py-8 px-6 text-center">
    <div className="w-full h-24 rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center border border-primary/5 shrink-0 mb-2 p-4">
      <img
        src={image}
        alt={name}
        width="150"
        height="64"
        className="max-w-full max-h-full object-contain"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col items-center">
      <h4 className="font-bold text-text-dark tracking-tight text-sm uppercase">{name}</h4>
      <p className="text-[9px] text-text-dark/40 uppercase font-black tracking-widest leading-none mt-2">Verified Partner</p>
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

export const TeamMember = ({ name, role, image, alt }: { name: string; role: string; image: string; alt?: string }) => (
  <Card className="group text-center p-0 overflow-hidden h-full">
    <div className="relative h-72 overflow-hidden mb-6">
      <img 
        src={image} 
        alt={alt || name} 
        width="300"
        height="288"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
        <div className="flex gap-4">
          {/* Social icons could go here */}
        </div>
      </div>
    </div>
    <div className="p-6 pt-0">
      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-sm text-text-dark/60 font-bold uppercase tracking-widest mt-1">{role}</p>
    </div>
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
