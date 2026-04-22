import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Calendar, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "./Button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-text-dark/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-black text-text-dark tracking-tight">Book a Consultation</h2>
                  <p className="text-sm text-text-dark/50 font-medium mt-1">Fill in the details to get started.</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center text-text-dark/40 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-dark/40 ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dark/20" size={18} />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-bg-light border-none rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-dark/40 ml-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dark/20" size={18} />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-bg-light border-none rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-dark/40 ml-2">Preferred Service</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dark/20" size={18} />
                    <select className="w-full bg-bg-light border-none rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none">
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Digital Marketing</option>
                      <option>UI/UX Design</option>
                      <option>Branding & Strategy</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-dark/40 ml-2">Project Brief</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-text-dark/20" size={18} />
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-bg-light border-none rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                </div>

                <Button className="w-full h-14 rounded-2xl text-lg gap-3 mt-4" onClick={() => {
                  alert("Thank you! Our team will contact you shortly.");
                  onClose();
                }}>
                  Confirm Booking <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};