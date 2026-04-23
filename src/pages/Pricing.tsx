import { motion } from "motion/react";
import { Check, Zap, Rocket, Building } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const plans = [
  {
    icon: Rocket,
    name: "Startup",
    price: "$2,999",
    tagline: "Perfect for new ventures",
    features: [
      "Custom UI Design",
      "5 Responsive Pages",
      "Basic SEO Setup",
      "1 Monthly Maintenance",
      "Email Support"
    ],
    recommended: false
  },
  {
    icon: Zap,
    name: "Business",
    price: "$5,999",
    tagline: "Best for growing companies",
    features: [
      "Everything in Startup",
      "Advanced Interactions",
      "CMS Integration",
      "Full SEO Strategy",
      "Priority Support",
      "Analytics Dashboard"
    ],
    recommended: true
  },
  {
    icon: Building,
    name: "Enterprise",
    price: "Custom",
    tagline: "Tailored for large scale",
    features: [
      "Everything in Business",
      "Full-Stack Development",
      "DevOps & Security",
      "Dedicated Project Manager",
      "24/7 Priority Support",
      "SLA Guarantee"
    ],
    recommended: false
  }
];

export const Pricing = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Flexible Plans for Every Stage" 
          subtitle="Simple Pricing" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col p-8 ${plan.recommended ? "border-primary shadow-2xl shadow-primary/20 scale-105" : "border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full z-10 shadow-lg shadow-primary/20">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${plan.recommended ? "gradient-primary text-white shadow-lg shadow-primary/20" : "bg-primary/5 text-primary"}`}>
                    <plan.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-slate-900/60 mt-1 font-bold uppercase tracking-wider">{plan.tagline}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-black tracking-tighter text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-900/40 text-lg ml-2 font-bold tracking-tight">/ project</span>}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-900/70">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button variant={plan.recommended ? "primary" : "outline"} className="w-full rounded-full py-4">
                  Choose Plan
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
             <h4 className="text-2xl font-bold mb-2">Need a tailored solution?</h4>
             <p className="text-text-dark/60 font-medium">If our standard plans don't fit your specific needs, we can create a completely customized package for your enterprise.</p>
          </div>
          <Button variant="secondary" size="lg">Contact for Quote</Button>
        </div>
      </div>
    </div>
  );
};
