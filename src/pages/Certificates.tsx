import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FileText, Download, Eye } from "lucide-react";
import { FadeIn, FadeInStagger } from "../components/ui/FadeIn";

const certificates = [
  {
    id: "udyam1",
    title: "UDYAM Certificate (Primary)",
    number: "UP-02-0005885",
    image: "/gallery/udyam-cert.jpg",
    file: "/gallery/udyam1.pdf",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "udyam2",
    title: "UDYAM Certificate (Secondary)",
    number: "UP-02-000XXXX", // replace with actual
    image: "/gallery/udyam-cert-2.jpg",
    file: "/gallery/udyam2.pdf",
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: "udyog",
    title: "UDYOG Registration",
    number: "UDYOG-XXXXXXX", // replace with actual
    image: "/gallery/udyog-cert.jpg",
    file: "/gallery/udyog.pdf",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "webworldhub",
    title: "Web World Hub Certificate",
    number: "WWH-2024-001", // replace if needed
    image: "/gallery/webworldhub-cert.jpg",
    file: "/gallery/web.pdf",
    color: "from-pink-600 to-rose-600"
  },
  {
    id: "gst",
    title: "GST Registration",
    number: "09ABYFM3139K1ZH",
    image: "/gallery/gst-cert.jpg",
    file: "/gallery/gst.pdf",
    color: "from-emerald-600 to-teal-600"
  }
];

export const Certificates = () => {
  return (
    <div className="pt-12 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Official Certifications" 
          subtitle="Compliance & Registrations" 
          centered
        />

        {/* Grid updated to support more cards */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {certificates.map((cert) => (
            <FadeIn key={cert.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full"
              >
                {/* Header */}
                <div className={`h-48 bg-gradient-to-br ${cert.color} relative flex items-center justify-center p-8`}>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                  <FileText size={80} className="text-white/20 absolute -right-4 -bottom-4 rotate-12" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 font-mono text-sm tracking-widest">
                      {cert.number}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Official registration certificate verifying our business identity and compliance with government regulations.
                  </p>

                  <div className="mt-auto flex flex-wrap gap-4">
                    <Button 
                      variant="primary" 
                      className="flex-1 rounded-full gap-2"
                      href={cert.file}
                      target="_blank"
                    >
                      <Eye size={18} />
                      View
                    </Button>

                    <Button 
                      variant="outline" 
                      className="flex-1 rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                      href={cert.file}
                      download
                    >
                      <Download size={18} />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </FadeInStagger>

        {/* Info Box */}
        <FadeIn className="mt-16 p-8 rounded-[32px] bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-slate-500 text-sm">
            All certificates are issued by the Government of India. For verification or queries, contact us at{" "}
            <a href="mailto:info@webworldhub.in" className="text-primary font-bold">
              info@webworldhub.in
            </a>
          </p>
        </FadeIn>
      </div>
    </div>
  );
};