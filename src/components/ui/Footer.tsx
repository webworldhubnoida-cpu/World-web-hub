import React from "react";
import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-text-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white">
              <Globe size={24} />
            </div>
            <span className="text-2xl font-bold">World Web Hub</span>
          </Link>
          <p className="text-white/60 mb-6 leading-relaxed">
            Building scalable digital solutions for the next generation of enterprises. 
            Empowering businesses through innovative technology and design.
          </p>
          <div className="flex gap-4">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Linkedin} />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Our Services</FooterLink>
            <FooterLink to="/projects">Portfolio</FooterLink>
            <FooterLink to="/tech-stack">Tech Stack</FooterLink>
            <FooterLink to="/case-studies">Case Studies</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <FooterLink to="/team">Our Team</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/clients">Clients</FooterLink>
            <FooterLink to="/branches">Branches</FooterLink>
            <FooterLink to="/faq">FAQs</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-white/60">
            <li>
              <a href="https://www.google.com/maps/place/Web+World+Hub+Aligarh/@27.9294953,78.0854794,16z" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                House No. 4/1089 HAMDARD NAGAR (B NEAR CHAD MASJID JAMALPUR KOIL, Aligarh, Uttar Pradesh 202001
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <a href="mailto:Info@webworldhub.in" className="hover:text-primary transition-colors">Info@webworldhub.in</a>
              <a href="mailto:Info@webworldhub.co.in" className="hover:text-primary transition-colors text-xs">Info@webworldhub.co.in</a>
              <a href="mailto:Info@webworldhub.com" className="hover:text-primary transition-colors text-xs">Info@webworldhub.com</a>
              <a href="mailto:Webworldhub@gmail.com" className="hover:text-primary transition-colors text-xs">Webworldhub@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919971001036" className="hover:text-primary transition-colors font-bold">+91 9971001036</a>
            </li>
          </ul>
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">
          © 2026 World Web Hub. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-white/40">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-white/60 hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <Link to="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:-translate-y-1">
    <Icon size={18} />
  </Link>
);
