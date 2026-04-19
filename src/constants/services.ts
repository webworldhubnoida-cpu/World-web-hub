export interface Service {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  features: string[];
  ctaText: string;
}

export const services: Service[] = [
  {
    id: "data-center",
    title: "Data Center Services",
    category: "Infrastructure",
    shortDesc: "Next-generation data center solutions for high-performance computing.",
    longDesc: "Our Data Center services provide robust, scalable, and secure environments for your mission-critical applications. We offer state-of-the-art co-location, managed hosting, and hybrid cloud solutions designed to ensure maximum uptime and performance.",
    image: "https://picsum.photos/seed/datacenter/800/600",
    features: ["24/7 Monitoring", "N+1 Redundancy", "Biometric Security", "Disaster Recovery"],
    ctaText: "Explore Infrastructure"
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    category: "Hosting",
    shortDesc: "Fast, secure, and reliable hosting for websites of all sizes.",
    longDesc: "Experience lighting-fast load times and unparalleled reliability with our Web Hosting plans. From shared hosting for startups to dedicated servers for high-traffic enterprises, our infrastructure is built to scale with your business.",
    image: "https://picsum.photos/seed/hosting/800/600",
    features: ["SSD Storage", "Free SSL Certificate", "One-Click Installs", "99.9% Uptime Guarantee"],
    ctaText: "Start Hosting"
  },
  {
    id: "corporate-hosting",
    title: "Corporate Hosting",
    category: "Hosting",
    shortDesc: "Enterprise-grade hosting solutions for demanding corporate environments.",
    longDesc: "Corporate Hosting at World Web Hub is designed for businesses that require high security and dedicated resources. Our managed corporate environments include advanced security protocols, custom configurations, and priority expert support.",
    image: "https://picsum.photos/seed/corporate/800/600",
    features: ["Dedicated Resources", "Advanced Firewall", "Automated Backups", "Priority Support"],
    ctaText: "Get Corporate Plan"
  },
  {
    id: "app-development",
    title: "Applications Development",
    category: "Software",
    shortDesc: "Custom web and mobile applications tailored to your business needs.",
    longDesc: "We specialize in building bespoke applications that solve complex business challenges. Our development team uses modern frameworks to create scalable, maintainable, and user-friendly software solutions for web and mobile platforms.",
    image: "https://picsum.photos/seed/appdev/800/600",
    features: ["Custom Architecture", "API Integration", "Cloud-Native Design", "Agile Methodology"],
    ctaText: "View Solutions"
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Software",
    shortDesc: "Stunning, high-performance websites that drive conversion.",
    longDesc: "Our web development service focuses on creating fast, responsive, and SEO-friendly websites. We blend cutting-edge technology with user-centric design to ensure your online presence stands out and delivers results.",
    image: "https://picsum.photos/seed/webdev/800/600",
    features: ["Responsive Design", "Modern Tech Stack", "SEO Optimization", "Performance Tuning"],
    ctaText: "Build Your Website"
  },
  {
    id: "clustering-hosting",
    title: "Clustering Hosting",
    category: "Hosting",
    shortDesc: "High-availability hosting with load balancing and failover.",
    longDesc: "Our Clustering Hosting solutions distribute traffic across multiple servers to eliminate single points of failure. Perfect for high-availability requirements, it ensures your application remains online even during server maintenance or unexpected spikes.",
    image: "https://picsum.photos/seed/cluster/800/600",
    features: ["Load Balancing", "Automatic Failover", "Scalable Nodes", "Real-time Sync"],
    ctaText: "Inquire About Clustering"
  },
  {
    id: "ecommerce-website",
    title: "Ecommerce Website",
    category: "Solutions",
    shortDesc: "End-to-end e-commerce solutions to help you sell online globally.",
    longDesc: "We build powerful e-commerce platforms that provide seamless shopping experiences. From inventory management to secure payment processing, we provide all the tools you need to grow your retail business in the digital marketplace.",
    image: "https://picsum.photos/seed/ecommerce-srv/800/600",
    features: ["Shopping Cart", "Multiple Gateways", "Inventory Tracking", "Analytics Integration"],
    ctaText: "Open Your Store"
  },
  {
    id: "seo",
    title: "SEO Services",
    category: "Marketing",
    shortDesc: "Boost your search engine rankings and attract organic traffic.",
    longDesc: "Our Search Engine Optimization (SEO) strategies are designed to increase your visibility and drive high-quality traffic to your site. We focus on keyword research, technical SEO, and content optimization to improve your bottom line.",
    image: "https://picsum.photos/seed/seo-srv/800/600",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical Audits"],
    ctaText: "Improve Ranking"
  },
  {
    id: "logo-design",
    title: "Company Logo Design",
    category: "Branding",
    shortDesc: "Memorable brand identities that resonate with your audience.",
    longDesc: "A great brand starts with a great logo. Our designers work closely with you to create a visual identity that captures your company's essence and leaves a lasting impression on your customers.",
    image: "https://picsum.photos/seed/logo-design/800/600",
    features: ["Custom Concepts", "Vector Scaling", "Brand Style Guide", "Multiple Iterations"],
    ctaText: "Design Your Identity"
  }
];
