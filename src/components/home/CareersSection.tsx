import React from "react";
import { Button } from "../ui/Button";

export const CareersSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass gradient-bg p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Global Team</h2>
          <p className="text-lg text-white/80 max-w-xl">We're always looking for talented individuals to help us build the next generation of digital solutions.</p>
        </div>
        <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">View Openings</Button>
      </div>
    </div>
  </section>
);
