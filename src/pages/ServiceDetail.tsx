import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { services } from "../constants/services";
import { useModal } from "../components/ui/ModalContext";

export const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);
  const { openBookingModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-text-dark/60 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 lg:pt-32 bg-bg-light min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl text-white"
            >
              <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest mb-6">
                {service.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
                {service.title}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                {service.shortDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="glass p-12 rounded-[40px] shadow-2xl bg-white border border-black/5">
                <h2 className="text-3xl font-black text-text-dark mb-8">Service Overview</h2>
                <div className="prose prose-lg max-w-none text-text-dark/70 font-medium leading-loose mb-12">
                  <p>{service.longDesc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4 p-6 rounded-2xl bg-bg-light border border-black/5 group hover:border-primary/30 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-dark">{feature}</h4>
                        <p className="text-sm text-text-dark/50 mt-1">Enterprise-grade {feature.toLowerCase()} protocols.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* CTA Card */}
                <div className="glass gradient-bg p-10 rounded-[40px] text-white">
                  <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                  <p className="text-white/80 mb-8 font-medium">Ready to transform your business with our {service.title.toLowerCase()}?</p>
                  <Button variant="white" className="w-full h-14 text-lg font-bold" onClick={openBookingModal}>
                    {service.ctaText}
                  </Button>
                </div>

                {/* Other Services */}
                <div className="glass p-10 rounded-[40px] bg-white border border-black/5">
                  <h3 className="text-xl font-bold text-text-dark mb-6">Explore More</h3>
                  <div className="space-y-4">
                    {services.filter(s => s.id !== id).slice(0, 4).map((other) => (
                      <Link 
                        key={other.id} 
                        to={`/service/${other.id}`}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-bg-light transition-all group"
                      >
                        <span className="font-bold text-text-dark group-hover:text-primary transition-colors">{other.title}</span>
                        <ChevronRight size={18} className="text-text-dark/30 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
