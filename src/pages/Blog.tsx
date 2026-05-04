import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const posts = [
  {
    title: "The Future of Web Development in 2026",
    excerpt: "Exploring new trends like AI-integrated IDEs, automated testing, and the rise of edge computing.",
    date: "March 15, 2026",
    author: "Alex Johnson",
    image: "https://picsum.photos/seed/b1/800/600",
    category: "Technology"
  },
  {
    title: "Mastering UI/UX: Design Systems for Scale",
    excerpt: "How to build and maintain a consistent design language across large-scale enterprise applications.",
    date: "April 02, 2026",
    author: "Michael Ross",
    image: "https://picsum.photos/seed/b2/800/600",
    category: "Design"
  },
  {
    title: "Securing Your Cloud Infrastructure",
    excerpt: "A comprehensive guide to protecting your data and users in an increasingly complex digital landscape.",
    date: "May 10, 2026",
    author: "Sarah Chen",
    image: "https://picsum.photos/seed/b3/800/600",
    category: "Security"
  }
];

export const Blog = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Insights & Innovation" 
          subtitle="Our Blog" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group p-0 overflow-hidden h-full flex flex-col hover:border-primary/30 transition-colors">
                <div className="relative overflow-hidden h-60">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-text-dark/40 font-bold mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-text-dark/60 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-primary flex items-center gap-2 group/btn">
                      Read More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
