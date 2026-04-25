import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { motion } from "motion/react";
import { ShieldCheck, FileText, Banknote, RefreshCcw, XCircle } from "lucide-react";

export const RefundPolicy = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-6 font-sans">
        <SectionHeading 
          title="Refund Policy" 
          subtitle="Transparency in our services" 
          centered
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-slate-100 mt-12"
        >
          <div className="flex items-center gap-4 mb-8 text-primary">
            <Banknote size={32} />
            <h2 className="text-2xl font-black tracking-tight">Our Commitment to Fairness</h2>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                1. General Policy
              </h3>
              <p>
                At Web World Hub, we believe in maintaining transparency and fairness in all our services. All payments made are subject to this refund policy. By purchasing our services, you agree to the terms mentioned here.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <XCircle className="text-red-500" size={20} />
                2. Non-Refundable Conditions
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advance payments are non-refundable once the project has started.</li>
                <li>This includes planning, design, and development work already initiated.</li>
                <li>Third-party costs such as domain registration, hosting, or premium licenses are non-refundable.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <RefreshCcw className="text-orange-500" size={20} />
                3. Cancellation Before Work Starts
              </h3>
              <p>
                If a project is canceled before any work begins, a partial refund may be considered depending on consultation or administrative efforts already expended. Any such refund will be at the sole discretion of Web World Hub management.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-slate-400" size={20} />
                4. No Refund After Delivery
              </h3>
              <p>No refunds will be issued after:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Final project delivery and handover.</li>
                <li>Final design approval by the client.</li>
                <li>Completion of the development phase.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-green-500" size={20} />
                5. Service Dissatisfaction
              </h3>
              <p>
                If you are not satisfied with our service, we will revise and improve the work based on the agreed project scope. Refunds will not be issued in such cases as we are committed to delivering the best possible outcome through iterations.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h3>
              <p>
                If you have any questions regarding our Refund Policy, please reach out to us:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl space-y-2">
                <p className="font-semibold text-slate-900">Email: info@webworldhub.in</p>
                <p className="font-semibold text-slate-900">Phone: +91 9971001036</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
