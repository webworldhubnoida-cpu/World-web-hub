import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { GoogleTranslate } from "./GoogleTranslate";


const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const PinterestP = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.663.967-2.903 2.167-2.903 1.022 0 1.516.766 1.516 1.684 0 1.026-.653 2.559-.99 3.978-.283 1.189.592 2.159 1.763 2.159 2.117 0 3.744-2.233 3.744-5.454 0-2.852-2.05-4.846-4.977-4.846-3.391 0-5.381 2.544-5.381 5.171 0 1.024.394 2.123.886 2.72.098.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.21-.174.254-.402.148-1.503-.7-2.44-2.896-2.44-4.659 0-3.792 2.755-7.276 7.947-7.276 4.173 0 7.413 2.974 7.413 6.946 0 4.145-2.613 7.485-6.241 7.485-1.219 0-2.365-.634-2.757-1.383l-.752 2.863c-.272 1.037-1.011 2.337-1.503 3.136 1.125.347 2.316.535 3.548.535 6.621 0 11.988-5.367 11.988-11.987C23.991 5.367 18.638 0 12.017 0z"/>
  </svg>
);

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitor_count");
    const sessionActive = sessionStorage.getItem("visitor_session_active");

    let count = storedCount ? parseInt(storedCount, 10) : 12450; // Use a more realistic starting number

    if (!sessionActive) {
      count += 1;
      localStorage.setItem("visitor_count", count.toString());
      sessionStorage.setItem("visitor_session_active", "true");
    } else {
      // If session is active but count in state is 0, ensure it shows the stored count
      count = storedCount ? parseInt(storedCount, 10) : 12450;
    }

    setVisitorCount(count);
  }, []);

  return (
    <footer className="footer relative text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">

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
              className="h-25 bg-white rounded-full w-auto object-contain"
            />
          </Link>

          <p className="text-white/60 mb-6 leading-relaxed text-sm">
            Building scalable digital solutions for modern businesses. 
            We help brands grow with powerful technology and design.
          </p>

          <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 custom-scrollbar">
            <SocialIcon Icon={Facebook} href="https://www.facebook.com/webworldhubindia/" />
            <SocialIcon Icon={Twitter} href="https://x.com/webworldhub" />
            <SocialIcon Icon={Instagram} href="https://www.instagram.com/webworldhub" />
            <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/webworldhub/" />
            <SocialIcon Icon={Youtube} href="https://www.youtube.com/@webworldhub" />
            <SocialIcon Icon={WhatsAppIcon} href="https://wa.me/919971001036" />
            <SocialIcon Icon={PinterestP} href="https://in.pinterest.com/webworldhub/" />
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

             <div className="flex items-center  ">
              <span className="text-xs text-white/60 mr-2">Visitors:</span>
              <span className="text-sm text-white/60 font-bold">{visitorCount}</span>
            </div>
           
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
            <li className="pt-4 modern-translate-wrapper">
              <GoogleTranslate />
            </li>
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
Gurudwara Rd, Mohan Garden, Block F, Zaildar Enclave, Uttam Nagar, Delhi, 110059              </a>
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
              <br />
              <a href="tel:+918448623836" className="font-semibold text-white hover:text-primary">
                +91 8448623836
              </a>
              <br />
              <a href="tel:+918285927937" className="font-semibold text-white hover:text-primary">
                +91 8285927937
              </a>
              <br />  
              <a href="tel:+917428906556" className="font-semibold text-white hover:text-primary">
                +91 7428906556
              </a>
              <br />  
              <a href="tel:+917503023096" className="font-semibold text-white hover:text-primary">
                +91 7503023096
              </a>

           

            </li>
          

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 flex flex-col items-center gap-6">
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-white/40 text-sm">
              © 2015 World Web Hub. All rights reserved.
            </p>
          </div>
          <div className="text-white/30 text-[10px] md:text-xs font-medium tracking-widest uppercase flex items-center gap-2">
          <span>Design & Development By</span>
          <a 
            href="https://www.webworldhub.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-primary transition-colors font-black"
          >
            Web World Hub
          </a>
        </div>

          <div className="flex gap-6 text-sm text-white/40">
            <Link to="/WorkProcess" className="hover:text-white transition">Work Process</Link>
            <Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link>
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition">Terms&Conditions</Link>
          </div>
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
    className="w-8 h-8 shrink-0 rounded-lg bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
  >
    <Icon size={16} />
  </a>
);