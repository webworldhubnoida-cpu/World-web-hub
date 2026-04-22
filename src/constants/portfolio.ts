export interface ProjectType {
  id: number | string;
  title: string;
  category: string;
  image: string;
  tech: string[];
  desc: string;
  link?: string;
}

export const projects: ProjectType[] = [
  {
    id: "electrichouse",
    title: "Electric House",
    category: "Corporate",
    image: "https://picsum.photos/seed/electric/800/600",
    tech: ["Web Design", "Responsive", "SEO"],
    desc: "Complete digital identity and web presence for a leading electrical equipment provider.",
    link: "https://electrichouse.in/"
  },
  {
    id: "starlink-packers",
    title: "Starlink Packers & Movers",
    category: "Logistics",
    image: "https://picsum.photos/seed/packers/800/600",
    tech: ["Booking System", "UI/UX", "SEO"],
    desc: "A robust lead generation and booking platform for domestic and international relocation services.",
    link: "https://starlinkpackersmovers.com/"
  },
  {
    id: "vertizontal-global",
    title: "Vertizontal Global",
    category: "Business",
    image: "https://picsum.photos/seed/vertizontal/800/600",
    tech: ["Corporate Site", "Strategy", "CMS"],
    desc: "Strategic excellence and innovative business solutions platform for global enterprises.",
    link: "https://vertizontalglobal.in/"
  },
  {
    id: "darjeeling-food",
    title: "Darjeeling Food Point",
    category: "Restaurant",
    image: "https://picsum.photos/seed/food/800/600",
    tech: ["Food Menu", "Local SEO", "Mobile First"],
    desc: "Mouth-watering digital presence for Aligarh's favorite fast food destination.",
    link: "https://darjeelingfoodpoint.in/"
  },
  {
    id: "apnacola",
    title: "Apna Cola",
    category: "E-commerce",
    image: "https://picsum.photos/seed/cola/800/600",
    tech: ["Product Showcase", "Branding", "E-commerce"],
    desc: "Vibrant and refreshing digital showcase for a regional beverage brand.",
    link: "https://apnacola.com/"
  },
  {
    id: "transhome-packers",
    title: "Trans Home Packers & Movers",
    category: "Logistics",
    image: "https://picsum.photos/seed/moving/800/600",
    tech: ["Lead Gen", "Maps", "Responsive"],
    desc: "Trusted relocation services platform with real-time tracking and safe moving solutions.",
    link: "https://transhomepackersmovers.in/"
  },
  {
    id: "nassa-elevators",
    title: "Nassa Elevators",
    category: "Industrial",
    image: "https://picsum.photos/seed/elevator/800/600",
    tech: ["Catalog", "Corporate", "B2B"],
    desc: "Industrial-grade website for leading elevator manufacturing and maintenance services.",
    link: "https://nassaelevators.com/"
  },
  {
    id: "eco-dashboard",
    title: "Eco-Friendly Dashboard",
    category: "React",
    image: "https://picsum.photos/seed/p1/800/600",
    tech: ["React", "Tailwind", "D3.js"],
    desc: "A real-time monitoring dashboard for eco-conscious households.",
    link: "#"
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet v3",
    category: "MERN",
    image: "https://picsum.photos/seed/p2/800/600",
    tech: ["Node.js", "Express", "MongoDB", "Web3"],
    desc: "Secure cryptocurrency wallet with multi-chain support.",
    link: "#"
  }
];

export const categories = ["All", "Logistics", "Corporate", "Business", "Restaurant", "E-commerce", "Industrial", "React", "MERN"];
