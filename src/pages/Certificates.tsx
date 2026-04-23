import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FileText, Download, Eye } from "lucide-react";
import { FadeIn, FadeInStagger } from "../components/ui/FadeIn";

const certificates = [
  {
    id: "udyam",
    title: "UDYAM Certificate",
    number: "UP-02-0005885",
    image: "/gallery/udyam-cert.jpg", // Placeholder path, user can replace
    file: "/documents/udyam-certificate.pdf",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "gst",
    title: "GST Registration",
    number: "09ABYFM3139K1ZH",
    image: "/gallery/gst-cert.jpg", // Placeholder path, user can replace
    file: "/documents/gst-certificate.pdf",
    color: "from-emerald-600 to-teal-600"
  }
];

export const Certificates = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Official Certifications" 
          subtitle="Compliance & Registrations" 
          centered
        />

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {certificates.map((cert) => (
            <FadeIn>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full"
              >
                {/* Certificate Preview Header */}
                <div className={`h-48 bg-gradient-to-br ${cert.color} relative flex items-center justify-center p-8`}>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                  <FileText size={80} className="text-white/20 absolute -right-4 -bottom-4 rotate-12" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{cert.title}</h3>
                    <p className="text-white/80 font-mono text-sm tracking-widest">{cert.number}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Official registration certificate for World Web Hub, verifying our legal status and compliance with government regulations.
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
            All certificates are issued by the Government of India. For any verification or queries regarding our registrations, please contact our legal department at <a href="mailto:info@webworldhub.in" className="text-primary font-bold">info@webworldhub.in</a>
          </p>
        </FadeIn>
      </div>
    </div>
  );
};
