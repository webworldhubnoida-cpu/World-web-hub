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
    image: "/gallery/electric.png",
    tech: ["Web Design", "Responsive", "SEO"],
    desc: "Complete digital identity and web presence for a leading electrical equipment provider.",
    link: "https://electrichouse.in/"
  },
  {
    id: "starlink-packers",
    title: "Starlink Packers & Movers",
    category: "Logistics",
    image: "/gallery/star.png",
    tech: ["Booking System", "UI/UX", "SEO"],
    desc: "A robust lead generation and booking platform for domestic and international relocation services.",
    link: "https://starlinkpackersmovers.com/"
  },
  {
    id: "vertizontal-global",
    title: "Vertizontal Global",
    category: "Business",
    image: "/gallery/V.png",
    tech: ["Corporate Site", "Strategy", "CMS"],
    desc: "Strategic excellence and innovative business solutions platform for global enterprises.",
    link: "https://vertizontalglobal.in/"
  },
  {
    id: "darjeeling-food",
    title: "Darjeeling Food Point",
    category: "Restaurant",
    image: "/gallery/food.png",
    tech: ["Food Menu", "Local SEO", "Mobile First"],
    desc: "Mouth-watering digital presence for Aligarh's favorite fast food destination.",
    link: "https://darjeelingfoodpoint.in/"
  },
  {
    id: "apnacola",
    title: "Apna Cola",
    category: "E-commerce",
    image: "/gallery/apnacola.png",
    tech: ["Product Showcase", "Branding", "E-commerce"],
    desc: "Vibrant and refreshing digital showcase for a regional beverage brand.",
    link: "https://apnacola.com/"
  },
  {
    id: "transhome-packers",
    title: "Trans Home Packers & Movers",
    category: "Logistics",
    image: "/gallery/transhome.png",
    tech: ["Lead Gen", "Maps", "Responsive"],
    desc: "Trusted relocation services platform with real-time tracking and safe moving solutions.",
    link: "https://transhomepackersmovers.in/"
  },
  {
    id: "nassa-elevators",
    title: "Nassa Elevators",
    category: "Industrial",
    image: "/gallery/nassa.png",
    tech: ["Catalog", "Corporate", "B2B"],
    desc: "Industrial-grade website for leading elevator manufacturing and maintenance services.",
    link: "https://nassaelevators.com/"
  }
];

export const categories = ["All", "Logistics", "Corporate", "Business", "Restaurant", "E-commerce", "Industrial", "React", "MERN"];
