import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { BranchItem } from "./HomeItems";

export const GlobalPresence = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Our Global Presence" 
        subtitle="Local Reach, Global Scale" 
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        <BranchItem id="new-york" city="New York" />
        <BranchItem id="london" city="London" />
        <BranchItem id="dubai" city="Dubai" />
        <BranchItem id="singapore" city="Singapore" />
        <BranchItem id="mumbai" city="Mumbai" />
      </div>
    </div>
  </section>
);
