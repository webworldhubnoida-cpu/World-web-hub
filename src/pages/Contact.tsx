import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { GoogleTranslate } from "../components/ui/GoogleTranslate";

export const Contact = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Select Service",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.message) {
      alert("Please fill Name, Phone & Message");
      return;
    }

    const text = `*New Inquiry from Web World Hub*%0A%0A
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Service: ${formData.service}
Message: ${formData.message}`;

    window.open(`https://wa.me/919971001036?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white pt-24">

      <div className="max-w-[1200px] mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Let’s Build Something <span className="gradient-text">Great</span>
          </h1>
          <p className="text-slate-600 mt-3">
            Tell us about your project and we’ll respond quickly.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            <ContactInfo Icon={Mail} title="Email" detail="Info@webworldhub.in" />

            {/* PHONES */}
            <div className="mb-6">
              <p className="text-sm text-slate-500 mb-3">Phone</p>

              <div className="space-y-3">
                <PhoneItem label="Main" number="+919971001036" />
                <PhoneItem label="Secondary" number="+918448623836" />
                <PhoneItem label="Customer Care" number="+918285927937" />
                <PhoneItem label="Finance" number="+917428906556" />
                <PhoneItem label="Rare Use" number="+917503023096" />
              </div>
            </div>

            <ContactInfo 
              Icon={MapPin} 
              title="Location" 
              detail="Uttam Nagar, Delhi - 110059" 
            />

            {/* SOCIAL */}
            <div className="mt-8">
              <p className="font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <SocialLink Icon={Linkedin} />
                <SocialLink Icon={Twitter} />
                <SocialLink Icon={Facebook} />
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <Card className="p-8 rounded-3xl shadow-xl border">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="input-style" />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input-style" />
              </div>

              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-style" />

              <select name="service" value={formData.service} onChange={handleChange} className="input-style">
                <option>Select Service</option>
                <option>Website Development</option>
                <option>App Development</option>
                <option>SEO / Marketing</option>
                <option>Custom Software</option>
              </select>

              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Message..." className="input-style" />

              <Button className="w-full py-4 flex justify-center items-center gap-2">
                <Send size={18} /> Send Message
              </Button>

            </form>
          </Card>

        </div>

        {/* MAPS */}
        {isContactPage && (
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <MapCard title="Aligarh Branch" url="https://www.google.com/maps/embed?pb=!1m18!..." />
            <MapCard title="Delhi Office" url="https://www.google.com/maps/embed?pb=!1m18!..." />
          </div>
        )}

        {/* TRANSLATE */}
        <div className="mt-16 text-center">
          <GoogleTranslate id="translate" />
        </div>

      </div>
    </div>
  );
};

/* COMPONENTS */

const PhoneItem = ({ label, number }) => (
  <a href={`tel:${number}`} className="flex justify-between bg-slate-50 px-4 py-3 rounded-xl hover:bg-primary/10">
    <span>{label}</span>
    <span className="font-semibold">{number}</span>
  </a>
);

const ContactInfo = ({ Icon, title, detail }) => (
  <div className="flex items-center gap-3 mb-4">
    <Icon size={18} />
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ Icon }) => (
  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white">
    <Icon size={18} />
  </button>
);

const MapCard = ({ title, url }) => (
  <Card className="rounded-xl overflow-hidden">
    <div className="p-3 font-semibold">{title}</div>
    <iframe src={url} className="w-full h-60 border-0" title={title} />
  </Card>
);