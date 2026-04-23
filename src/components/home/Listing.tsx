
import React from "react";
import { motion } from "motion/react";

const platforms = [
  {
    name: "Justdial Aligarh",
    logo: "https://play-lh.googleusercontent.com/F6SHkgLMR6vIfIKqs13pKKrPOkdkcACkVPougKAhI31C5XmbECB-WsTX36pRBbv-aMXQ=s300",
    link: "https://www.justdial.com/Aligarh/Web-World-Hub-Aligarh-Near-Chad-Masjid-Jamalpur-Koil-Hamdard-Nagar/"
  },
  {
    name: "Justdial Noida",
    logo: "https://play-lh.googleusercontent.com/F6SHkgLMR6vIfIKqs13pKKrPOkdkcACkVPougKAhI31C5XmbECB-WsTX36pRBbv-aMXQ=s300",
    link: "https://www.justdial.com/Greater-Noida/Web-World-Hub-Noida-Accher/"
  },
  {
    name: "IndiaMart Mumbai",
    logo: "https://th.bing.com/th/id/OIP.mu9Y1seikuRl1vWCcmBHGAHaG9?w=134&h=150&c=6&o=7&dpr=1.8&pid=1.7&rm=3",
    link: "https://www.indiamart.com/web-world-hub-mumbai/"
  },
  {
    name: "Justdial Delhi",
    logo: "https://play-lh.googleusercontent.com/F6SHkgLMR6vIfIKqs13pKKrPOkdkcACkVPougKAhI31C5XmbECB-WsTX36pRBbv-aMXQ=s300",
    link: "https://www.justdial.com/jdmart/Delhi/Web-World-Hub-Uttam-Nagar-Gurudwara-Road/"
  },
  {
    name: "Justdial Jaipur",
    logo: "https://play-lh.googleusercontent.com/F6SHkgLMR6vIfIKqs13pKKrPOkdkcACkVPougKAhI31C5XmbECB-WsTX36pRBbv-aMXQ=s300",
    link: "https://www.justdial.com/Jaipur/Web-World-Hub-Jaipur-Near-Jhule-Lal-Mandir-Sindhi-Colony/"
  },
];

export const Listing = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Our Presence Across <span className="text-primary">Platforms</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Trusted and listed on leading business platforms
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex overflow-hidden">
        
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...platforms, ...platforms].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[260px]"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center text-center">
                
                {/* Logo */}
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>

                {/* Small Tag */}
                <p className="text-xs text-gray-500 mt-1">
                  View Listing →
                </p>

              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};