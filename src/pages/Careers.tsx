import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const jobs = [
  {
    title: "Senior React Developer",
    location: "Remote / India",
    type: "Full-time",
    experience: "2-4 Years",
    salary: "₹22,000 - ₹25,000 / month"
  },
  {
    title: "UI/UX Product Designer",
    location: "Remote / India",
    type: "Full-time",
    experience: "1-3 Years",
    salary: "₹20,000 - ₹24,000 / month"
  },
  {
    title: "DevOps Engineer",
    location: "Hybrid / India",
    type: "Full-time",
    experience: "2-4 Years",
    salary: "₹23,000 - ₹25,000 / month"
  },
  {
    title: "Technical Content Writer",
    location: "Remote",
    type: "Contract",
    experience: "1-2 Years",
    salary: "₹18,000 - ₹22,000 / month"
  }
];

export const Careers = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Heading */}
        <SectionHeading 
          title="Join Our Global Mission" 
          subtitle="Careers at World Web Hub" 
        />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-6 italic">
              Why Work With Us?
            </h3>

            <p className="text-gray-500 leading-relaxed mb-8">
              We believe in empowering our team members to grow, innovate, and lead. 
              Our culture is built on trust, transparency, and excellence.
            </p>

            <ul className="space-y-5">
              <BenefitItem text="Work from anywhere in India" />
              <BenefitItem text="Flexible working hours" />
              <BenefitItem text="Learning & growth support" />
              <BenefitItem text="Performance-based incentives" />
            </ul>
          </div>

          {/* RIGHT SIDE JOBS */}
          <div className="lg:col-span-2 space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group p-6 hover:border-primary/30 transition">

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    {/* JOB INFO */}
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-primary transition">
                        {job.title}
                      </h4>

                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} /> {job.experience}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-6">
                      
                      {/* SALARY */}
                      <div className="text-right hidden md:block">
                        <p className="text-xs text-gray-400 uppercase mb-1">
                          Salary
                        </p>
                        <p className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {job.salary}
                        </p>
                      </div>

                      {/* BUTTON */}
                      <Button className="flex items-center gap-2">
                        Apply <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INTERNSHIP SECTION */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs uppercase mb-5">
                <Star size={14} /> Internships 2026
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Start Your Career Journey With Us
              </h3>

              <p className="text-white/80 mb-6">
                Gain real-world experience, mentorship, and a chance to grow into a full-time role.
              </p>

              <Button variant="white">View Internships</Button>
            </div>

            <div className="text-center bg-white/10 p-8 rounded-2xl">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-sm uppercase text-white/70 mt-2">
                Open Positions
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

/* BENEFITS */
const BenefitItem = ({ text }) => (
  <li className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
      ✔
    </div>
    <span>{text}</span>
  </li>
);