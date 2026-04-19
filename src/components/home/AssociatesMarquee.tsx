import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { AssociateCard } from "./HomeItems";

const associates = [
  { name: "GoDaddy", image: "https://logo.clearbit.com/godaddy.com" },
  { name: "Resellerclub", image: "https://logo.clearbit.com/resellerclub.com" },
  { name: "Google My Business", image: "https://logo.clearbit.com/google.com" },
  { name: "Hostinger", image: "https://logo.clearbit.com/hostinger.com" },
  { name: "Neonet", image: "https://logo.clearbit.com/neonet.no" },
  { name: "Google Ads", image: "https://logo.clearbit.com/ads.google.com" },
  { name: "Google", image: "https://logo.clearbit.com/google.com" },
  { name: "Google AdSense", image: "https://logo.clearbit.com/google.com" },
  { name: "Facebook", image: "https://logo.clearbit.com/facebook.com" },
  { name: "Twitter", image: "https://logo.clearbit.com/twitter.com" },
  { name: "Instagram", image: "https://logo.clearbit.com/instagram.com" },
  { name: "Youtube", image: "https://logo.clearbit.com/youtube.com" },
  { name: "LinkedIn", image: "https://logo.clearbit.com/linkedin.com" },
  { name: "Pinterest", image: "https://logo.clearbit.com/pinterest.com" },
  { name: "Just Dial", image: "https://logo.clearbit.com/justdial.com" },
  { name: "IndiaMart", image: "https://logo.clearbit.com/indiamart.com" },
  { name: "Trade India", image: "https://logo.clearbit.com/tradeindia.com" },
  { name: "ExporterIndia", image: "https://logo.clearbit.com/exporterindia.com" },
  { name: "Sulekha", image: "https://logo.clearbit.com/sulekha.com" },
  { name: "Yellow Page", image: "https://logo.clearbit.com/yellowpages.com" },
  { name: "Alibaba", image: "https://logo.clearbit.com/alibaba.com" },
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
          <AssociateCard key={`${item.name}-${idx}`} name={item.name} image={item.image} />
        ))}
      </motion.div>
    </div>
  </section>
);
