import React from "react";
import { Hero } from "../components/home/Hero";
import { AboutHighlights } from "../components/home/AboutHighlights";
import { WhoWeAre } from "../components/home/WhoWeAre";
import { EvolutionTimeline } from "../components/home/EvolutionTimeline";
import { TechStack } from "../components/home/TechStack";
import { Portfolio } from "../components/home/Portfolio";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { WhyUs } from "../components/home/WhyUs";
import { TeamSection } from "../components/home/TeamSection";
import { PricingSection } from "../components/home/PricingSection";
import { FaqSection } from "../components/home/FaqSection";
import { BlogSection } from "../components/home/BlogSection";
import { CareersSection } from "../components/home/CareersSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { GlobalPresence } from "../components/home/GlobalPresence";
import { AssociatesMarquee } from "../components/home/AssociatesMarquee";
import { StatsSection } from "../components/home/StatsSection";
import { CtaSection } from "../components/home/CtaSection";
import { Contact } from "./Contact";
import { FadeIn } from "../components/ui/FadeIn";
import {Listing} from "../components/home/Listing";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FadeIn><WhoWeAre /></FadeIn>
      <FadeIn><AboutHighlights /></FadeIn>
      
      <FadeIn><EvolutionTimeline /></FadeIn>
      <StatsSection />
      <AssociatesMarquee />
      <FadeIn><ServicesPreview /></FadeIn>

      <FadeIn><TechStack /></FadeIn>
      <Portfolio />
      <TeamSection />
      <PricingSection />
      <Listing />
      <FadeIn><FaqSection /></FadeIn>
      <FadeIn><BlogSection /></FadeIn>
      <FadeIn><CareersSection /></FadeIn>
      <FadeIn><TestimonialsSection /></FadeIn>
      <FadeIn><Contact/></FadeIn>     
      <FadeIn><CtaSection /></FadeIn>
    </div>
  );
};
