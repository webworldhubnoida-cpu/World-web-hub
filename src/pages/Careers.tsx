import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const jobs = [
  {
    title: "Senior React Developer",
    location: "Remote / Silicon Valley",
    type: "Full-time",
    experience: "5+ Years",
    salary: "$120k - $160k"
  },
  {
    title: "UI/UX Product Designer",
    location: "Remote / London",
    type: "Full-time",
    experience: "3+ Years",
    salary: "$90k - $130k"
  },
  {
    title: "DevOps Engineer",
    location: "Hybrid / Bangalore",
    type: "Full-time",
    experience: "4+ Years",
    salary: "$100k - $140k"
  },
  {
    title: "Technical Content Writer",
    location: "Remote",
    type: "Contract",
    experience: "2+ Years",
    salary: "$50k - $80k"
  }
];

export const Careers = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        <SectionHeading 
          title="Join Our Global Mission" 
          subtitle="Careers at World Web Hub" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
           <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold mb-6 italic">Why Work With Us?</h3>
              <p className="text-text-dark/60 leading-relaxed mb-8">
                 We believe in empowering our team members to grow, innovate, and lead. Our culture is built on trust, transparency, and a shared passion for excellence.
              </p>
              <ul className="space-y-6">
                 <BenefitItem text="Work from anywhere in the world" />
                 <BenefitItem text="Comprensive health & wellness plans" />
                 <BenefitItem text="Continuous learning & certification grants" />
                 <BenefitItem text="Competitive salary & equity options" />
              </ul>
           </div>
           
           <div className="lg:col-span-2 space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:border-primary/30 transition-all group p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                       <div>
                          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h4>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-text-dark/40 font-bold uppercase tracking-wider">
                             <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                             <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                             <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.experience}</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="hidden md:block text-right">
                             <p className="text-xs text-text-dark/40 font-bold uppercase tracking-widest mb-1">Expectation</p>
                             <p className="font-bold text-primary">{job.salary}</p>
                          </div>
                          <Button className="group/btn">
                             Apply Now <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                       </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Internship Section */}
        <div className="gradient-bg rounded-[40px] p-12 text-white relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                 <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    <Star size={14} className="fill-white" /> Internships 2026
                 </div>
                 <h3 className="text-4xl font-bold mb-6">Start Your Career Journey With Us</h3>
                 <p className="text-lg text-white/80 leading-relaxed mb-8">
                    Are you a student or recent graduate looking to dive into the world of tech? Our internship programs offer real-world experience, mentorship, and a path to full-time roles.
                 </p>
                 <Button variant="white">View Internships</Button>
              </div>
              <div className="w-full md:w-1/3">
                 <div className="glass p-8 rounded-3xl text-center">
                    <p className="text-6xl font-bold mb-2">15+</p>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Open Intern Slots</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
      <Check size={14} strokeWidth={4} />
    </div>
    <span className="font-medium">{text}</span>
  </li>
);

const Check = ({ size, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
