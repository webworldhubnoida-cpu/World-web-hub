import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { AboutCard } from "./HomeCards";
import { Target, Eye, Heart } from "lucide-react";

export const AboutHighlights = () => (
  <section className="py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Vision, Mission & Our Core Values" 
        subtitle="The World Web Hub Ethos" 
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AboutCard 
          Icon={Target}
          title="Our Mission"
          desc="To empower every business with scalable, innovative, and human-centric software solutions that drive real-world impact."
        />
        <AboutCard 
          Icon={Eye}
          title="Our Vision"
          desc="To be the global benchmark for excellence in digital transformation, fostering growth through cutting-edge technology."
        />
        <AboutCard 
          Icon={Heart}
          title="Our Values"
          desc="Integrity, innovation, and inclusivity define our culture. We build with passion and support with dedication."
        />
      </div>
    </div>
  </section>
);
