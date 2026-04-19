import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Facebook } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Let's Start a Conversation" 
          subtitle="Contact Us" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            <ContactInfo 
              Icon={Mail} 
              title="Email Us" 
              detail="hello@worldwebhub.com" 
              subtitle="Our team typically responds in 2 hours."
            />
            <ContactInfo 
              Icon={Phone} 
              title="Call Us" 
              detail="+1 (555) 000-1111" 
              subtitle="Mon-Fri from 9am to 6pm PST."
            />
            <ContactInfo 
              Icon={MapPin} 
              title="Visit Us" 
              detail="123 Tech Avenue, Silicon Valley, CA" 
              subtitle="Book an appointment for personal demo."
            />

            <div className="pt-8">
              <h4 className="font-bold mb-4">Follow Our Socials</h4>
              <div className="flex gap-4">
                <SocialLink Icon={Linkedin} />
                <SocialLink Icon={Twitter} />
                <SocialLink Icon={Facebook} />
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <Card className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-dark/60">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border border-text-dark/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-dark/60">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white border border-text-dark/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-text-dark/60">Subject</label>
                  <select className="w-full bg-white border border-text-dark/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors appearance-none">
                    <option>Web Development Inquiry</option>
                    <option>Mobile App Project</option>
                    <option>UI/UX Design Quote</option>
                    <option>Other / General</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-text-dark/60">Your Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-text-dark/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <Button className="w-full gap-2 py-5 text-lg">
                  <Send size={20} /> Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-96 glass rounded-full overflow-hidden relative shadow-2xl">
           <img 
              src="https://picsum.photos/seed/map/1200/400" 
              alt="Map" 
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-8 rounded-3xl text-center max-w-sm">
                 <MapPin className="text-primary w-12 h-12 mx-auto mb-4" />
                 <h4 className="text-xl font-bold mb-2">Our Silicon Valley HQ</h4>
                 <p className="text-sm text-text-dark/60 leading-relaxed font-medium">123 Tech Avenue, Silicon Valley, CA 94025, United States</p>
                 <Button variant="outline" size="sm" className="mt-6">Open in Google Maps</Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ Icon, title, detail, subtitle }: any) => (
  <div className="flex gap-6 p-6 glass rounded-2xl border-transparent hover:border-primary/20 transition-all group">
    <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:rotate-12 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-primary font-bold">{detail}</p>
      <p className="text-xs text-text-dark/40 mt-1">{subtitle}</p>
    </div>
  </div>
);

const SocialLink = ({ Icon }: any) => (
  <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
    <Icon size={20} />
  </button>
);
