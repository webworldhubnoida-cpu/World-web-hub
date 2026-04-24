import React from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, MessageSquare } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Live Chat Button */}
      <motion.button
        onClick={() => {
          const tawk = (window as any).Tawk_API;
          if (tawk && typeof tawk.maximize === 'function') {
            tawk.maximize();
          } else if (tawk && typeof tawk.toggle === 'function') {
            tawk.toggle();
          } else {
            // Fallback for when Tawk is still loading
            const tawkScript = document.querySelector('script[src*="tawk.to"]');
            if (!tawkScript) {
              console.error("Tawk.to script not found");
            } else {
              alert("Chat is initializing... Please try again in a few seconds.");
            }
          }
        }}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/30 group relative"
      >
        <MessageSquare size={26} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          Live Chat
        </span>
        <motion.span 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          className="absolute inset-0 rounded-full bg-indigo-600 -z-10"
        />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919971001036"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group relative"
      >
        <MessageCircle size={30} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          WhatsApp Us
        </span>
        <motion.span 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
        />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919971001036"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 gradient-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 group relative"
      >
        <Phone size={26} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">
          Call Now
        </span>
        <motion.span 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 rounded-full bg-primary -z-10"
        />
      </motion.a>
    </div>
  );
};
