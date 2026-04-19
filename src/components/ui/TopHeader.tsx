import React from "react";
import { 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter, 
  Pin as Pinterest, 
  MessageCircle as Skype 
} from "lucide-react";

export const TopHeader = ({ scrolled }: { scrolled?: boolean }) => {
  return (
    <div className="bg-text-dark text-white/80 py-2 border-b border-white/5 hidden lg:block transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center text-[10px] uppercase font-black tracking-widest">
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          <a href="tel:+919971001036" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={12} className="text-primary" />
            <span>+91 9971001036</span>
          </a>
          <a href="mailto:info@webworldhub.in" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={12} className="text-primary" />
            <span>info@webworldhub.in</span>
          </a>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-3">
             <span className="flex gap-1"><span className="text-primary">GSTIN:</span> 09ABYFM3139K1ZH</span>
             <span className="flex gap-1"><span className="text-primary">UDYAM:</span> UP-02-0005885</span>
             <span className="flex gap-1"><span className="text-primary">UAM:</span> DL06E0024115</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SocialIcon href="https://www.facebook.com/webworldhubindia/" Icon={Facebook} />
          <SocialIcon href="https://www.instagram.com/webworldhub" Icon={Instagram} />
          <SocialIcon href="https://www.linkedin.com/in/webworldhub/" Icon={Linkedin} />
          <SocialIcon href="https://youtube.com/@webworldhub" Icon={Youtube} />
          <SocialIcon href="https://in.pinterest.com/webworldhub/" Icon={Pinterest} />
          <SocialIcon href="https://x.com/webworldhub" Icon={Twitter} />
          <SocialIcon href="https://join.skype.com/invite/qE9SRXgGbKvB" Icon={Skype} />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, Icon }: { href: string; Icon: any }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="hover:text-primary transition-all p-1 hover:scale-125 block"
  >
    <Icon size={14} />
  </a>
);
