import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { motion } from "motion/react";
import { Scale, Gavel, AlertCircle } from "lucide-react";

export const TermsConditions = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-6 font-sans">
        <SectionHeading 
          title="Terms & Conditions" 
          subtitle="Our service agreement" 
          centered
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-slate-100 mt-12"
        >
          <div className="flex items-center gap-4 mb-8 text-secondary">
            <Scale size={32} />
            <h2 className="text-2xl font-black tracking-tight">Standard Terms</h2>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Provision of Services</h3>
              <p>
                World Web Hub is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which World Web Hub provides may change from time to time without prior notice to you.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Use of Services</h3>
              <p>
                You agree to use the services only for purposes that are permitted by the Terms and any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h3>
              <p>
                The site and its original content, features, and functionality are owned by World Web Hub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h3>
              <p>
                World Web Hub and its components are offered for informational purposes; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
