import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Mail, MessageSquare, Send, Phone, Briefcase } from "lucide-react";
import { Button } from "../ui/Button";
import emailjs from "@emailjs/browser";
import { services } from "../../constants/services";

export const HeroForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.message || !formData.phone) {
      alert("Please fill in your name, phone, and message.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone_number: formData.phone,
      service_interested: formData.service || "Not Specified",
      message: formData.message,
      to_email: "Webworldhub@gmail.com",
      form_source: "Hero Section Form"
    };

    emailjs.send(
      'service_c6g8mym',
      'template_7nh7hbc',
      templateParams,
      'bd_XTReiuJzk2AE6e'
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
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
        <div className="grid grid-cols-1 gap-4">
          {/* Full Name */}
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

          {/* Phone Number */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Email Address */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address (Optional)"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm"
              disabled={isSubmitting}
            />
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white/80 placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm appearance-none"
              disabled={isSubmitting}
            >
              <option value="" className="bg-slate-900 text-white">Select a Service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title} className="bg-slate-900 text-white">
                  {service.title}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 text-white/30" size={16} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            placeholder="How can we help?"
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-primary/40 transition-all text-sm resize-none"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 group"
          isLoading={isSubmitting}
        >
          Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </motion.div>
  );
};
