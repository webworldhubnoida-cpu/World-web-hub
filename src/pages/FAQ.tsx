import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timeline depends on complexity, but most web development projects take 4-12 weeks from strategy to launch. We provide detailed timelines during our initial consultation."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes! We provide ongoing maintenance, security updates, and performance monitoring through our monthly support plans to ensure your digital product stays top-notch."
  },
  {
    q: "Can you help with app store submissions?",
    a: "Absolutely. Our mobile development service includes handling the entire submission process for both iOS App Store and Google Play Store."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank transfers, and common digital payment platforms. For large projects, we typically use a milestone-based payment structure."
  },
  {
    q: "Do I own the source code after completion?",
    a: "Yes, upon final payment, you receive full ownership of the source code and all intellectual property associated with your specific project."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title="Common Questions Answered" 
          subtitle="Support & FAQ" 
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-0 border-transparent overflow-hidden">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="text-lg font-bold text-text-dark">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"}`}>
                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-text-dark/60 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass p-12 text-center rounded-[40px] border-primary/20">
          <MessageCircle className="mx-auto text-primary w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-text-dark/60 mb-8 max-w-lg mx-auto font-medium leading-relaxed">
            Our support team is always here to help. Reach out to us directly for any specific inquiries you might have.
          </p>
          <Button size="lg">Contact Support Team</Button>
        </div>
      </div>
    </div>
  );
};
