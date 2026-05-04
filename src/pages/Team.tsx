import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { teamMembers } from "../constants/team";

export const Team = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const total = teamMembers.length;

  // responsive cards
  const getVisible = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visible, setVisible] = useState(getVisible());

  useEffect(() => {
    const resize = () => setVisible(getVisible());
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // auto slide
  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [pause, total]);

  const translateX = -(index * (100 / visible));

  return (
    <div
      className="pt-12 pb-24"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        <SectionHeading
          title="The Brilliant Minds at World Web Hub"
          subtitle="Full Team"
        />

        {/* 🔥 SLIDER WRAPPER */}
        <div className="relative">

          {/* SLIDER */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `${translateX}%` }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full sm:w-1/2 lg:w-1/4 px-3 flex-shrink-0"
                >
                  <Card className="group overflow-hidden">

                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition">
                        <SocialIcon />
                      </div>
                    </div>

                    <div className="p-5 text-center">
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-primary text-xs mt-2">
                        {member.role}
                      </p>
                    </div>

                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* 🔥 ARROWS OUTSIDE (FIXED) */}

        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + total) % total)
          }
          className="absolute left-0 top-[55%] -translate-y-1/2 z-[999] bg-black text-white p-4 rounded-full shadow-2xl"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() =>
            setIndex((prev) => (prev + 1) % total)
          }
          className="absolute right-0 top-[55%] -translate-y-1/2 z-[999] bg-black text-white p-4 rounded-full shadow-2xl"
        >
          <ChevronRight size={28} />
        </button>

      </div>
    </div>
  );
};

const SocialIcon = () => (
  <>
    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">in</div>
    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">tw</div>
    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">@</div>
  </>
);