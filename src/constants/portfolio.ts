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
  },
  {
    id: "gautam-bamboo",
    title: "Gautam Bamboo Chick Maker",
    category: "Business",
    image: "/gallery/bamboo.png",
    tech: ["Web Design", "B2C", "Local SEO"],
    desc: "Quality bamboo chick making services with a focus on durability and design.",
    link: "https://www.gautambamboochickmaker.in/"
  },
  {
    id: "mahadev-interior",
    title: "Mahadev All Interior Designer",
    category: "Creative",
    image: "/gallery/lux.png",
    tech: ["Portfolio", "UI/UX", "Interior"],
    desc: "Professional interior design services showcasing modern and elegant living spaces.",
    link: "https://www.mahadevallinteriordesigner.co.in/"
  },
  {
    id: "seaglobe-logistics",
    title: "Seaglobe Logistics Private Limited",
    category: "Logistics",
    image: "/gallery/sea.png",
    tech: ["Corporate", "Supply Chain", "B2B"],
    desc: "Global logistics and freight forwarding solutions for international trade.",
    link: "https://seaglobelogistics.com/index.html"
  },
  {
    id: "asr-international",
    title: "ASR International",
    category: "Business",
    image: "/gallery/asr.png",
    tech: ["Web Presence", "Corporate", "International"],
    desc: "Global business solutions and international trade services provider.",
    link: "http://goasr.in"
  },
  {
    id: "im-interior",
    title: "I M Interior Designer",
    category: "Creative",
    image: "/gallery/interr.png",
    tech: ["Showcase", "Interior Design", "Modern"],
    desc: "Innovative interior design solutions for residential and commercial projects.",
    link: "https://iminteriordesigner.com/"
  },
  {
    id: "instant-packers",
    title: "Instant Packers And Movers",
    category: "Logistics",
    image: "/gallery/trusted.png",
    tech: ["Relocation", "Logistics", "B2C"],
    desc: "Fast and reliable packing and moving services for safe transit of goods.",
    link: "http://instantpacker.com"
  },
  {
    id: "rapid-rise",
    title: "Rapid Rise Constructions",
    category: "Industrial",
    image: "/gallery/rapid.png",
    tech: ["Construction", "Engineering", "Industrial"],
    desc: "Modern construction and architectural solutions for high-rise projects.",
    link: "https://rapidriseconstruction.co.in/"
  },
  {
    id: "golden-leaf-canada",
    title: "Golden Leaf Catering Canada",
    category: "Catering",
    image: "/gallery/golden.png",
    tech: ["Food Services", "Events", "International"],
    desc: "Premium catering services in Canada specializing in diverse cuisines.",
    link: "http://goldenleafcatering.com/"
  },
  {
    id: "golden-leaf-india",
    title: "Golden Leaf Caterers",
    category: "Catering",
    image: "/gallery/golden.png",
    tech: ["Hospitality", "Wedding", "Events"],
    desc: "Leading catering services provider in India for weddings and corporate events.",
    link: "https://www.goldenleafcaterers.in/"
  },
  {
    id: "dr-khan-dental",
    title: "Dr Khan Dental Clinic",
    category: "Healthcare",
    image: "http://drlkhandentalclinic.com/favicon.ico",
    tech: ["Medical", "Healthcare", "Portfolio"],
    desc: "Professional dental care and advanced treatment services platform.",
    link: "http://drlkhandentalclinic.com"
  },
  {
    id: "metech-systems",
    title: "Metech Systems Hyderabad",
    category: "Technology",
    image: "/gallery/mtech.png",
    tech: ["IT Solutions", "Enterprise", "B2B"],
    desc: "Cutting-edge IT infrastructure and software solutions in Hyderabad.",
    link: "http://Metechsystems.co.in"
  }
];

export const categories = ["All", "Logistics", "Corporate", "Business", "Restaurant", "E-commerce", "Industrial", "Creative", "Catering", "Healthcare", "Technology", "React", "MERN"];
