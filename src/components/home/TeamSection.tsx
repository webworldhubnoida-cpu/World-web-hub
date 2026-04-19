import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TeamMember } from "./HomeItems";
import { teamMembers } from "../../constants/team";

export const TeamSection = () => (
  <section 
    className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('/gallery/b1.jpg')",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-white/85 z-0" />

    <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
      <SectionHeading 
        title="Meet Our Experts" 
        subtitle="Our Team" 
      />
    </div>
    
    <div className="relative flex overflow-x-hidden z-10">
      <div className="animate-marquee flex gap-8 py-4 px-4 whitespace-nowrap">
        {/* First set of members */}
        {[...teamMembers, ...teamMembers].map((member, index) => (
          <div key={`${member.id}-${index}`} className="w-[300px] flex-shrink-0">
            <TeamMember 
              image={member.image} 
              name={member.name} 
              role={member.role} 
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
