import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { AssociateCard } from "./HomeItems";

const associates = [
  { name: "GoDaddy", domain: "godaddy.com" },
  { name: "Resellerclub", domain: "resellerclub.com" },
  { name: "Google My Business", domain: "google.com" },
  { name: "Hostinger", domain: "hostinger.com" },
  { name: "Neonet", domain: "neonet.no" },
  { name: "Google Ads", domain: "ads.google.com" },
  { name: "Google", domain: "google.com" },
  { name: "Google AdSense", domain: "google.com" },
  { name: "Facebook", domain: "facebook.com" },
  { name: "Twitter", domain: "twitter.com" },
  { name: "Instagram", domain: "instagram.com" },
  { name: "Youtube", domain: "youtube.com" },
  { name: "LinkedIn", domain: "linkedin.com" },
  { name: "Pinterest", domain: "pinterest.com" },
  { name: "Just Dial", domain: "justdial.com" },
  { name: "IndiaMart", domain: "indiamart.com" },
  { name: "Trade India", domain: "tradeindia.com" },
  { name: "ExporterIndia", domain: "exporterindia.com" },
  { name: "Sulekha", domain: "sulekha.com" },
  { name: "Yellow Page", domain: "yellowpages.com" },
  { name: "Alibaba", domain: "alibaba.com" },
];

export const AssociatesMarquee = () => (
  <section className="py-24 bg-bg-light overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <SectionHeading 
        title="Our Strategic Global Partners" 
        subtitle="Associates" 
      />
    </div>
    
    <div className="relative flex overflow-x-hidden group">
      <motion.div
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap py-4"
      >
        {[...associates, ...associates].map((item, idx) => (
          <AssociateCard key={`${item.name}-${idx}`} name={item.name} domain={item.domain} />
        ))}
      </motion.div>
    </div>
  </section>
);
