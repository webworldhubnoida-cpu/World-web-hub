import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/Button";
import { branches } from "../constants/branches";

export const BranchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const branch = branches.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!branch) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Branch Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 lg:pt-32 bg-bg-light min-h-screen">
      <section className="relative h-[50vh] overflow-hidden">
    
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 uppercase tracking-tighter">
              {branch.city}
            </h1>
            <p className="text-2xl text-white/80 font-bold tracking-widest uppercase">
              {branch.country}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="glass p-10 rounded-[40px] bg-white">
                <h2 className="text-3xl font-black mb-8">Branch Office Details</h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Address</h4>
                      <p className="text-text-dark/60 font-medium">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-text-dark/60 font-medium">{branch.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-text-dark/60 font-medium">{branch.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <p className="text-text-dark/60 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-black/5">
                  <Button className="w-full h-14 text-lg font-bold group" variant="primary">
                    Book a Visit <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-black mb-6">About this Branch</h3>
                <p className="text-xl text-text-dark/70 font-medium leading-relaxed">
                  {branch.description}
                </p>
              </div>

              <div className="glass h-[400px] rounded-[40px] overflow-hidden border border-black/5 shadow-2xl">
                {/* Mock Map View */}
                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin size={48} className="mx-auto text-primary mb-4" />
                    <p className="font-bold text-text-dark/40 uppercase tracking-widest">Interactive Map View</p>
                    <a href={branch.mapUrl} target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline mt-4 inline-block">
                      Open in Google Maps
                    </a>
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
