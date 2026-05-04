import React from "react";
import { 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter 
} from "lucide-react";

const PinterestP = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.663.967-2.903 2.167-2.903 1.022 0 1.516.766 1.516 1.684 0 1.026-.653 2.559-.99 3.978-.283 1.189.592 2.159 1.763 2.159 2.117 0 3.744-2.233 3.744-5.454 0-2.852-2.05-4.846-4.977-4.846-3.391 0-5.381 2.544-5.381 5.171 0 1.024.394 2.123.886 2.72.098.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.21-.174.254-.402.148-1.503-.7-2.44-2.896-2.44-4.659 0-3.792 2.755-7.276 7.947-7.276 4.173 0 7.413 2.974 7.413 6.946 0 4.145-2.613 7.485-6.241 7.485-1.219 0-2.365-.634-2.757-1.383l-.752 2.863c-.272 1.037-1.011 2.337-1.503 3.136 1.125.347 2.316.535 3.548.535 6.621 0 11.988-5.367 11.988-11.987C23.991 5.367 18.638 0 12.017 0z"/>
  </svg>
);

export const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-slate-950 to-slate-900 text-gray-200 text-[13px] hidden lg:block border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">

        {/* Left Section */}
        <div className="flex items-center gap-8">
          <a href="tel:+919971001036" className="flex items-center gap-2.5 hover:text-primary transition-colors">
            <Phone size={14} className="text-primary" />
            <span className="font-semibold tracking-tight">+91 9971001036</span>
          </a>

          <a href="mailto:info@webworldhub.in" className="flex items-center gap-2.5 hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" />
            <span className="font-semibold tracking-tight">info@webworldhub.in</span>
          </a>

          {/* Divider */}
          <div className="h-4 w-px bg-white/10"></div>

          {/* Business Info */}
          <div className="flex items-center gap-6 text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold opacity-60">GSTIN:</span>
              <span className="text-white font-bold tracking-wide">09ABYFM3139K1ZH</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold opacity-60">UDYAM:</span>
              <span className="text-white font-bold tracking-wide">UP-02-0005885</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-white font-bold tracking-wide">ISO 900:2015</span>
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <SocialIcon href="https://www.facebook.com/webworldhubindia/" Icon={Facebook} />
          <SocialIcon href="https://www.instagram.com/webworldhub" Icon={Instagram} />
          <SocialIcon href="https://www.linkedin.com/in/webworldhub/" Icon={Linkedin} />
          <SocialIcon href="https://www.youtube.com/@webworldhub" Icon={Youtube} />
          <SocialIcon href="https://in.pinterest.com/webworldhub/" Icon={PinterestP} />
          <SocialIcon href="https://x.com/webworldhub" Icon={Twitter} />
        </div>

      </div>
    </div>
  );
};

const SocialIcon = ({ href, Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300"
  >
    <Icon size={14} />
  </a>
);