import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const PinterestP = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.663.967-2.903 2.167-2.903 1.022 0 1.516.766 1.516 1.684 0 1.026-.653 2.559-.99 3.978-.283 1.189.592 2.159 1.763 2.159 2.117 0 3.744-2.233 3.744-5.454 0-2.852-2.05-4.846-4.977-4.846-3.391 0-5.381 2.544-5.381 5.171 0 1.024.394 2.123.886 2.72.098.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.21-.174.254-.402.148-1.503-.7-2.44-2.896-2.44-4.659 0-3.792 2.755-7.276 7.947-7.276 4.173 0 7.413 2.974 7.413 6.946 0 4.145-2.613 7.485-6.241 7.485-1.219 0-2.365-.634-2.757-1.383l-.752 2.863c-.272 1.037-1.011 2.337-1.503 3.136 1.125.347 2.316.535 3.548.535 6.621 0 11.988-5.367 11.988-11.987C23.991 5.367 18.638 0 12.017 0z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">

      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />

      {/* ✨ Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <Link to="/" className="flex items-center mb-6">
            <img 
              src="/gallery/footer logo.png" 
              alt="World Web Hub" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-white/60 mb-6 leading-relaxed text-sm">
            Building scalable digital solutions for modern businesses. 
            We help brands grow with powerful technology and design.
          </p>

          <div className="flex flex-wrap gap-3">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={PinterestP} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Our Services</FooterLink>
            <FooterLink to="/projects">Portfolio</FooterLink>
            <FooterLink to="/tech-stack">Tech Stack</FooterLink>
            <FooterLink to="/certificates">Certificates</FooterLink>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-3">
            <FooterLink to="/team">Our Team</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/clients">Clients</FooterLink>
            <FooterLink to="/branches">Branches</FooterLink>
            <FooterLink to="/faq">FAQs</FooterLink>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-white/60 text-sm">

            <li>
              <a 
                href="https://www.google.com/maps/place/Web+World+Hub+Aligarh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                House No. 4/1089 HAMDARD NAGAR (B NEAR CHAD MASJID JAMALPUR KOIL, Aligarh, Uttar Pradesh 202001
              </a>
            </li>

            <li className="flex flex-col gap-1">
              <a href="mailto:info@webworldhub.in" className="hover:text-white transition">
                info@webworldhub.in
              </a>
              <a href="mailto:webworldhub@gmail.com" className="text-xs hover:text-white transition">
                webworldhub@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+919971001036" className="font-semibold text-white hover:text-primary">
                +91 9971001036
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-white/40 text-sm">
          © 2026 World Web Hub. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/40">
          <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition">Terms</Link>
          <Link to="#" className="hover:text-white transition">Cookies</Link>
        </div>

      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ Icon, href = "#" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
  >
    <Icon size={18} />
  </a>
);