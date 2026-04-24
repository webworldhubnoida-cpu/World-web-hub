import { motion } from "motion/react";
import { Globe, Shield, Cpu } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PricingSection } from "../components/home/PricingSection";
import { Button } from "../components/ui/Button";

const paymentLink = "https://pmny.in/YIjJuNoJpFZP";

/* FEATURES */
const features = [
  { icon: Globe, title: "Global Reach", desc: "Scale your business globally." },
  { icon: Shield, title: "High Security", desc: "Secure & protected systems." },
  { icon: Cpu, title: "Tech Support", desc: "24/7 expert support." }
];

/* FAQ */
const faqs = [
  { q: "How long does it take?", a: "1-2 weeks basic, 4-8 weeks complex." },
  { q: "Support included?", a: "Yes, 1 month free support." },
  { q: "Upgrade possible?", a: "Yes anytime." }
];

/* PLANS */
const plans = [

  { title: "B2B Portal", price: "Starts ₹50K" },
  { title: "B2C Portal", price: "Starts ₹50K" }
];

/* SERVICES */
const services = [
  { title: "Billing Software", icon: "💳" },
  { title: "Inventory", icon: "📦" },
  { title: "HRMS", icon: "👨‍💼" },
  { title: "CMS", icon: "📝" },
  { title: "Application", icon: "📱" },
  { title: "Software", icon: "💻" },
  { title: "SEO", icon: "🚀" },
  { title: "SMO", icon: "📣" },
  { title: "Google My Business", icon: "📍" },
  { title: "Google Ads", icon: "🎯" },
  { title: "Social Media Ads", icon: "📊" },
  { title: "Google AdSense", icon: "💰" },
  { title: "Payment Gateway", icon: "💸" },
  { title: "Logo Design", icon: "🎨" },
  { title: "Graphic Design", icon: "🖌️" },
  { title: "Video Editing", icon: "🎬" }
];

export const Pricing = () => {
  return (
    <div className="bg-bg-light">

      {/* HERO */}
      <div className="py-20 bg-slate-900 text-white text-center">
        <h1 className="text-5xl font-black mb-4">Pricing Plans</h1>
        <p className="text-white/60">Choose your plan & pay instantly</p>
      </div>

      <PricingSection />

      {/* PLANS */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Plans" subtitle="Pricing" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {plans.map((plan, i) => (
              <motion.div key={i} className="p-10 border rounded-3xl shadow">
                <h3 className="text-xl font-black mb-3">{plan.title}</h3>
                <p className="text-3xl text-primary font-bold mb-6">{plan.price}</p>

                <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-full">
                    Pay Now
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Services" subtitle="All Solutions" centered />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
            {services.map((service, i) => (
              <motion.div key={i} className="p-6 bg-white rounded-2xl shadow text-center">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold mb-4">{service.title}</h3>

                <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-full text-sm">
                    Get Service
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="py-24 bg-white text-center">
        <SectionHeading title="Why Choose Us" subtitle="Advantage" centered />
        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto px-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded-2xl">
              <f.icon className="mx-auto mb-3" size={30} />
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="FAQ" subtitle="Questions" centered />

          <div className="space-y-6 mt-10">
            {faqs.map((f, i) => (
              <div key={i} className="p-5 bg-white rounded-xl shadow">
                <h4 className="font-bold">{f.q}</h4>
                <p className="text-gray-500">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center">
        <h2 className="text-4xl font-black mb-6">Start Now</h2>

        <div className="flex justify-center gap-6">
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button>Pay & Get Started</Button>
          </a>

          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Talk to Expert</Button>
          </a>
        </div>
      </div>

    </div>
  );
};