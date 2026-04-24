import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export const Contact = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-100 to-white flex flex-col items-center">
      
      <div className="max-w-[1300px] mx-auto px-6 w-full py-16">

        {/* 🔥 Header */}
        <div className="text-center mb-14">
          <p className="hero-tag">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Let’s Build Something <span className="gradient-text">Great</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Tell us about your project and we’ll get back within a few hours.
          </p>
        </div>

        {/* 🔥 Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between">
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <ContactInfo 
                Icon={Mail} 
                title="Email" 
                detail="Info@webworldhub.in" 
              />
              <ContactInfo 
                Icon={Phone} 
                title="Phone" 
                detail="+91 9971001036" 
              />
              <ContactInfo 
                Icon={MapPin} 
                title="Location" 
                detail="Gurudwara Rd, Mohan Garden, Block F, Zaildar Enclave, Uttam Nagar, Delhi, 110059" 
              />
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <SocialLink Icon={Linkedin} />
                <SocialLink Icon={Twitter} />
                <SocialLink Icon={Facebook} />
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <Card className="p-10 rounded-3xl shadow-2xl border border-slate-200">
              
              <form className="space-y-6">
                
                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="input-style"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="input-style"
                  />
                </div>

                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="input-style"
                />

                <select className="input-style">
                  <option>Select Service</option>
                  <option>Website Development</option>
                  <option>App Development</option>
                  <option>SEO / Marketing</option>
                  <option>Custom Software</option>
                </select>

                <textarea 
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="input-style resize-none"
                />

                <Button className="w-full py-5 text-lg gap-2">
                  <Send size={18} /> Send Message
                </Button>

              </form>

            </Card>
          </div>

        </div>

        {/* 🔥 Maps Section - Only shown on /contact route */}
        {isContactPage && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Our <span className="gradient-text">Locations</span></h2>
              <p className="text-slate-600 mt-2">Find us at our various branches across India</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MapCard 
                title="Aligarh Branch (Head Office)" 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.234!2d78.07!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbfaad3289a529a98!2sWeb+World+Hub+Aligarh!5e0!3m2!1sen!2sin!4v1" 
              />
              <MapCard 
                title="Jamalpur Branch" 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5!2d78.08!3d27.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78d52d481b951485!2sWeb+World+Hub+Jamalpur!5e0!3m2!1sen!2sin!4v1" 
              />
              <MapCard 
                title="Delhi Office" 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.13!2d77.04!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0536687b3337%3A0xb63e89bf61ca8770!2sWeb+World+Hub!5e0!3m2!1sen!2sin!4v1" 
              />
              <MapCard 
                title="Kanpur Branch" 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.2!2d80.38!3d26.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4136b5e564f3%3A0x39b345c0d53ef088!2sWeb+World+Hub+Kanpur!5e0!3m2!1sen!2sin!4v1" 
              />
              <MapCard 
                title="Mohaan Unnao Branch" 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5!2d80.67!3d26.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c03cfc5583e33%3A0xcf505d80c6637888!2sWeb+World+Hub+Mohaan+Unnao!5e0!3m2!1sen!2sin!4v1" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MapCard = ({ title, url }: { title: string; url: string }) => (
  <Card className="overflow-hidden p-0 rounded-3xl shadow-lg border border-slate-200 group">
    <div className="p-4 bg-white border-b border-slate-100">
      <h4 className="font-bold text-slate-800">{title}</h4>
    </div>
    <div className="h-[300px] w-full">
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className=" transition-all duration-500"
      />
    </div>
  </Card>
);

const ContactInfo = ({ Icon, title, detail }: any) => (
  <div className="flex items-center gap-4 mb-5">
    <div className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="font-semibold">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ Icon }: any) => (
  <button className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition">
    <Icon size={18} />
  </button>
);