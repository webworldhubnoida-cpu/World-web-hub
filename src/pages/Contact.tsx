import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Facebook } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export const Contact = () => {
  return (
    <div 
      className="relative pt-32 pb-24 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/gallery/b9.jpg')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/90 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              detail="Info@webworldhub.in" 
              href="mailto:Info@webworldhub.in"
              subtitle="Our team typically responds in 2 hours."
            />
            <ContactInfo 
              Icon={Phone} 
              title="Call Us" 
              detail="+91 9971001036" 
              href="tel:+919971001036"
              subtitle="Mon-Fri from 9am to 6pm PST."
            />
            <ContactInfo 
              Icon={MapPin} 
              title="Visit Us" 
              detail="Web World Hub, Aligarh, UP" 
              href="https://www.google.com/maps/place/Web+World+Hub+Aligarh/@27.9294953,78.0854794,16z"
              subtitle="House No. 4/1089 HAMDARD NAGAR (B NEAR CHAD MASJID JAMALPUR KOIL, Aligarh, Uttar Pradesh 202001"
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

        {/* Google Map Section */}
        <div className="mt-24 h-[500px] glass rounded-[2.5rem] overflow-hidden relative shadow-2xl border-8 border-white">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.6186414761014!2d78.083290715028!3d27.929495282692015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a52b6591e75d%3A0xbfaad3289a529a98!2sWeb%20World%20Hub%20Aligarh!5e0!3m2!1sen!2sin!4v1713512345678!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full "
           ></iframe>
           <div className="absolute bottom-8 left-8 pointer-events-none">
              <div className="glass p-6 rounded-3xl shadow-xl border border-white/20">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold">Aligarh Office</h4>
                       <p className="text-sm text-text-dark/60 font-medium">NHouse No. 4/1089 HAMDARD NAGAR (B NEAR CHAD MASJID JAMALPUR KOIL, Aligarh, Uttar Pradesh 202001</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ Icon, title, detail, subtitle, href }: any) => (
  <div className="flex gap-6 p-6 glass rounded-2xl border-transparent hover:border-primary/20 transition-all group">
    <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:rotate-12 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      {href ? (
        <a href={href} className="text-primary font-bold hover:underline">{detail}</a>
      ) : (
        <p className="text-primary font-bold">{detail}</p>
      )}
      <p className="text-xs text-text-dark/40 mt-1">{subtitle}</p>
    </div>
  </div>
);

const SocialLink = ({ Icon }: any) => (
  <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
    <Icon size={20} />
  </button>
);
