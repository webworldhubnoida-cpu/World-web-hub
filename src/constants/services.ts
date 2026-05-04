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
    id: "website-design-development",
    title: "Website Design & Development",
    category: "Software",
    shortDesc: "Modern, responsive websites tailored to your business goals.",
    longDesc: "We create visually appealing and high-performing websites that enhance your online presence. Our team focuses on user experience, responsiveness, and performance to ensure your website delivers results and engages your audience effectively.",
    image: "https://wallpaperaccess.com/full/2109962.jpg",
    features: ["Responsive Design", "UI/UX Focused", "SEO Friendly", "Fast Performance"],
    ctaText: "Build Your Website"
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Website Development",
    category: "Solutions",
    shortDesc: "Powerful e-commerce platforms to grow your online business.",
    longDesc: "We develop scalable and secure e-commerce websites with seamless user experiences. From product management to payment integration, our solutions help you sell online efficiently and grow your digital business.",
    image: "https://cdn2.vectorstock.com/i/1000x1000/46/26/e-commerce-website-page-background-vector-25124626.jpg",
    features: ["Secure Payments", "Shopping Cart", "Inventory Management", "Mobile Optimized"],
    ctaText: "Start Selling Online"
  },
  {
    id: "mobile-app-development",
    title: "Mobile Application Development",
    category: "Software",
    shortDesc: "Custom mobile apps for Android and iOS platforms.",
    longDesc: "Our mobile app development services deliver intuitive, high-performance applications tailored to your business needs. We build scalable apps with modern technologies that provide seamless user experiences.",
    image: "https://wallpapercave.com/wp/wp9517070.jpg",
    features: ["Cross Platform", "User-Friendly UI", "High Performance", "API Integration"],
    ctaText: "Build Your App"
  },
  {
    id: "seo-services",
    title: "SEO (Search Engine Optimization)",
    category: "Marketing",
    shortDesc: "Improve your website ranking and drive organic traffic.",
    longDesc: "Our SEO services help your website rank higher on search engines. We use proven strategies like keyword research, technical SEO, and content optimization to boost your visibility and attract quality traffic.",
    image: "https://png.pngtree.com/thumb_back/fw800/background/20241007/pngtree-search-engine-optimization-raising-chart-background-image_16335862.jpg",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    ctaText: "Boost Your Ranking"
  },
  {
    id: "smo-services",
    title: "SMO (Social Media Optimization)",
    category: "Marketing",
    shortDesc: "Grow your brand presence across social media platforms.",
    longDesc: "We optimize your social media profiles and strategies to increase engagement and brand awareness. Our SMO services help you connect with your audience and build a strong online community.",
    image: "https://aiidm.in/wp-content/uploads/2024/10/Untitled-design-4-2.jpg",
    features: ["Profile Optimization", "Content Strategy", "Audience Engagement", "Analytics Tracking"],
    ctaText: "Grow Your Audience"
  },
  {
    id: "google-ads",
    title: "Google Ads / Online Advertising",
    category: "Marketing",
    shortDesc: "Targeted advertising campaigns to maximize ROI.",
    longDesc: "We create and manage high-performing Google Ads campaigns that drive traffic and conversions. Our data-driven approach ensures you get the best return on your advertising investment.",
    image: "https://tse2.mm.bing.net/th/id/OIP.ovHr9RTP88o3ak7Uc5ewegHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
    features: ["PPC Campaigns", "Keyword Targeting", "Ad Optimization", "Conversion Tracking"],
    ctaText: "Start Advertising"
  },
  {
    id: "gmb-setup",
    title: "Google My Business Setup & Optimization",
    category: "Marketing",
    shortDesc: "Improve your local visibility and attract nearby customers.",
    longDesc: "We set up and optimize your Google My Business profile to enhance your local search presence. This helps your business appear in local searches, maps, and attract more customers.",
    image: "https://ethicalchamp.com/wp-content/uploads/2025/05/Googe-My-Buisness.jpg",
    features: ["Profile Setup", "Local SEO", "Review Management", "Map Visibility"],
    ctaText: "Optimize Your Business"
  },
  {
    id: "logo-graphic-design",
    title: "Logo Design & Graphic Designing",
    category: "Branding",
    shortDesc: "Creative designs that build a strong brand identity.",
    longDesc: "Our design services help create visually appealing logos and graphics that represent your brand. We focus on creativity and consistency to make your brand stand out.",
    image: "https://tse2.mm.bing.net/th/id/OIP.EzuNx0ddHjCg9PXhDZhJuwHaE8?w=626&h=418&rs=1&pid=ImgDetMain&o=7&rm=3",
    features: ["Custom Logo", "Brand Identity", "Creative Graphics", "Multiple Revisions"],
    ctaText: "Design Your Brand"
  },
  {
  id: "custom-software-development",
  title: "Custom Software Development",
  category: "Software",
  shortDesc: "Business software solutions tailored to automate and scale your operations.",
  longDesc: "We build powerful custom software solutions designed to streamline your business processes. From billing systems to CRM and HRMS platforms, our solutions are scalable, secure, and tailored to your exact business requirements.",
  image: "https://images.pexels.com/photos/36706460/pexels-photo-36706460.jpeg",
  features: [
    "Billing Software",
    "Inventory Management",
    "CRM Systems",
    "HRMS Solutions",
    "CMS Development",
    "Custom Dashboards"
  ],
  ctaText: "Build Your Software"
}
];