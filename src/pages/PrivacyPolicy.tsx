import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { motion } from "motion/react";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export const PrivacyPolicy = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-6 font-sans">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="How we protect your data" 
          centered
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-slate-100 mt-12"
        >
          <div className="flex items-center gap-4 mb-8 text-primary">
            <ShieldCheck size={32} />
            <h2 className="text-2xl font-black tracking-tight">Your Privacy Matters</h2>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Information Collection</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact our support team. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you about your account and our services, and to personalize your experience.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Cookies and Tracking</h3>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@webworldhub.in.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
