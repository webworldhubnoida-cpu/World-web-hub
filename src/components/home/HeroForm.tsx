import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "../ui/Button";
import emailjs from "@emailjs/browser";

export const HeroForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
      to_email: "Info@webworldhub.in",
      form_source: "Hero Section Form"
    };

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your Service ID
      'YOUR_TEMPLATE_ID', // Replace with your Template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        message: ""
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[32px] shadow-2xl w-full max-w-md"
    >
      <div className="mb-6">
        <h3 className="text-xl font-black text-white tracking-tight">Quick Inquiry</h3>
        <p className="text-white/60 text-sm mt-1">Get a response within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-white/30" size={16} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="How can we help?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm resize-none"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 group"
          isLoading={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};
