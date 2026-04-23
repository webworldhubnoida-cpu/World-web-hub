import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQItem } from "./HomeItems";

const faqs = [
  {
    question: "What industries do you work with?",
    answer: "We specialize in Fintech, Healthcare, E-commerce, and SaaS, but our experts can adapt to any industry.",
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard web project takes 4-8 weeks, while complex platforms may take 3-6 months.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, we provide 24/7 maintenance and support packages tailored to your needs.",
  },
];

export const FaqSection = () => (
  <section 
    className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/gallery/b3.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/85 z-0" />

    {/* ❌ removed max-w + px */}
    <div className="relative z-10 w-full">
      <SectionHeading 
        title="Frequently Asked Questions" 
        subtitle="Support" 
      />

      <div className="relative overflow-hidden mt-12">
        {/* Optional gradient edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 px-0"
        >
          {[...faqs, ...faqs].map((faq, idx) => (
            <div key={idx} className="min-w-[350px]">
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);