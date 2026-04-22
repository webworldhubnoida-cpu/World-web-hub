import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { useModal } from "../ui/ModalContext";

export const CtaSection = () => {
  const { openBookingModal } = useModal();
  
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass gradient-bg p-12 rounded-[40px] text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful companies already using our solutions to grow their digital presence.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="white" onClick={openBookingModal}>
                Book a Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/services">
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-20 -mt-20 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-3xl -ml-20 -mb-20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
