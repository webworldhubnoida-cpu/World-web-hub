import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { AssociateCard } from "./HomeItems";

const associates = [
  { name: "GoDaddy", image: "https://logos.hunter.io/godaddy.com" },
  { name: "Resellerclub", image: "https://logos.hunter.io/resellerclub.com" },
  { name: "Google My Business", image: "https://th.bing.com/th/id/OIP.ZyeNiRtdZJluzHa44rbayAHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Hostinger", image: "https://logos.hunter.io/hostinger.com" },
  { name: "Neonet", image: "https://www.visa.com.mx/dam/VCOM/regional/lac/SPA/Default/Products/visa-direct/neonet-logo-800x450.jpg" },
  { name: "Google Ads", image: "https://th.bing.com/th/id/OIP.VppzUut7CxEyvfrChOPw6wHaEn?w=281&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Google", image: "https://logos.hunter.io/google.com" },
  { name: "Google AdSense", image: "https://th.bing.com/th/id/OIP.KIyNKuTOsjIRDVy5p3P5qgHaHa?w=155&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Facebook", image: "https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png" },
  { name: "Twitter", image: "https://logos.hunter.io/twitter.com" },
  { name: "Instagram", image: "https://logos.hunter.io/instagram.com" },
  { name: "Youtube", image: "https://logos.hunter.io/youtube.com" },
  { name: "LinkedIn", image: "https://logos.hunter.io/linkedin.com" },
  { name: "Pinterest", image: "https://logos.hunter.io/pinterest.com" },
  { name: "Just Dial", image: "https://logos.hunter.io/justdial.com" },
  { name: "IndiaMart", image: "https://logos.hunter.io/indiamart.com" },
  { name: "Trade India", image: "https://logos.hunter.io/tradeindia.com" },
  { name: "ExporterIndia", image: "https://th.bing.com/th/id/OIP.dMpPKsoqO3psuxCmfuC9NAHaCD?w=333&h=95&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Sulekha", image: "https://logos.hunter.io/sulekha.com" },
  { name: "Yellow Page", image: "https://th.bing.com/th/id/OIP.Yrwh5Xu0zj4ALKBCGdL3ugHaEH?w=318&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Alibaba", image: "https://logos.hunter.io/alibaba.com" },
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
        initial={{ x: 0 }}
        whileInView={{
          x: [0, "-50%"],
        }}
        viewport={{ once: false }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
        className="flex gap-8 whitespace-nowrap py-4 cursor-pointer"
      >
        {[...associates, ...associates].map((item, idx) => (
          <motion.div
            key={`${item.name}-${idx}`}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <AssociateCard name={item.name} image={item.image} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
