import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Target, History } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        <SectionHeading title="Our Journey to Innovation" subtitle="About World Web Hub" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Empowering Businesses Through Advanced Technology</h3>
            <p className="text-lg text-text-dark/60 mb-6 leading-relaxed">
              Founded in 2016, World Web Hub started as a small group of passionate developers with a single mission: to provide world-class digital solutions that help businesses scale effortlessly.
            </p>
            <p className="text-lg text-text-dark/60 mb-8 leading-relaxed">
              Today, we are a global team of 150+ tech enthusiasts, designers, and strategists working together to push the boundaries of what's possible in the digital realm.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="text-primary" /> Innovation at our core
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="text-primary" /> Client-centric approach
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="text-primary" /> Agile methodology
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/gallery/who we are.jpeg"
              alt="Our Team"
              width="1200"
              height="800"
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-bg rounded-2xl z-0" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ValueCard 
            Icon={Users} 
            title="Our Culture" 
            desc="We foster an environment of continuous learning, creativity, and mutual respect among our global workforce."
          />
          <ValueCard 
            Icon={CheckCircle2} 
            title="Our Values" 
            desc="Integrity, innovation, and excellence are at the heart of everything we do for our clients."
          />
          <ValueCard 
            Icon={Award} 
            title="Our Promise" 
            desc="We promise to deliver exceptional results that exceed your expectations every single time."
          />
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/4174745/pexels-photo-4174745.jpeg"
              alt="Our Mission"
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl z-0" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Target size={16} />
              OUR MISSION
            </div>
            <h3 className="text-4xl font-bold mb-6">Democratizing Technology for Every Business</h3>
            <p className="text-xl text-text-dark/60 mb-6 leading-relaxed">
              To democratize high-end technology for businesses of all sizes, enabling them to compete in the global marketplace. We strive to break down technical barriers and provide tools that empower growth.
            </p>
            <p className="text-lg text-text-dark/60 leading-relaxed">
              Our mission is to ensure that innovation isn't just for the giants, but a tool for every visionary entrepreneur ready to make their mark.
            </p>
          </motion.div>
        </div>

        {/* Our Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
              <Award size={16} />
              OUR VISION
            </div>
            <h3 className="text-4xl font-bold mb-6">Setting the Global Standard for Excellence</h3>
            <p className="text-xl text-text-dark/60 mb-6 leading-relaxed">
              To be the most trusted technology partner worldwide, known for our integrity and groundbreaking solutions. We envision a future where digital transformation is seamless and universally accessible.
            </p>
            <p className="text-lg text-text-dark/60 leading-relaxed">
              We aim to redefine industry standards by consistently delivering products that aren't just functional, but revolutionary in their impact on business success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/gallery/b2.jpg"
              alt="Our Vision"
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-2xl z-0" />
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white/50 rounded-[40px] p-12 glass">
          <h3 className="text-3xl font-bold text-center mb-16">The History of Evolution</h3>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-2 md:justify-between">
            <TimelineItem year="2015" title="The Beginning" desc="Started with 3 developers in a co-working space." />
            <TimelineItem year="2018" title="Expansion" desc="Opened our second branch and hit 50+ staff." />
            <TimelineItem year="2021" title="Global Reach" desc="Started serving clients across 20+ countries." />
            <TimelineItem year="2024" title="Industry Leader" desc="Recognized as one of the fastest growing IT companies." />
            <TimelineItem year="2026" title="The Future" desc="Launching our new AI-driven innovation wing." />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <Card className="text-center">
    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
      <Icon size={32} />
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-text-dark/60 leading-relaxed">{desc}</p>
  </Card>
);

const TimelineItem = ({ year, title, desc }: { year: string; title: string; desc: string }) => (
  <div className="mb-10 md:mb-0 md:mt-10 relative md:w-1/5">
    <div className="absolute -left-[9px] md:left-1/2 md:-top-[9px] md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg-light" />
    <div className="ml-8 md:ml-0 md:text-center px-4">
      <span className="text-primary font-bold">{year}</span>
      <h5 className="font-bold text-lg mt-1">{title}</h5>
      <p className="text-sm text-text-dark/60 mt-2 italic">{desc}</p>
    </div>
  </div>
);
