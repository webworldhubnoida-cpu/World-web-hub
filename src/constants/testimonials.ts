export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "World Web Hub transformed our legacy systems into a modern SaaS platform. Their expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechNova",
    image: "https://picsum.photos/seed/t1/100/100"
  },
  {
    id: "2",
    quote: "The agile approach and constant communication made the development process smooth and efficient.",
    author: "David Miller",
    role: "CTO, LuxeMart",
    image: "https://picsum.photos/seed/t2/100/100"
  },
  {
    id: "3",
    quote: "Innovative designs and robust backend. They are true partners in our growth journey.",
    author: "Elena Rodriguez",
    role: "Product Manager, VitalCare",
    image: "https://picsum.photos/seed/t3/100/100"
  },
  {
    id: "4",
    quote: "Their data center services are world-class. We haven't had a single second of downtime since migrating.",
    author: "Rajesh Kumar",
    role: "IT Director, Global Finserve",
    image: "https://picsum.photos/seed/t4/100/100"
  },
  {
    id: "5",
    quote: "The SEO results were visible within months. Our organic traffic has grown by 300%.",
    author: "Amit Sharma",
    role: "Marketing Head, FabStay",
    image: "https://picsum.photos/seed/t5/100/100"
  },
  {
    id: "6",
    quote: "Excellent app development team. They understood our requirements perfectly and delivered ahead of schedule.",
    author: "Priya Das",
    role: "Founder, GreenRoot",
    image: "https://picsum.photos/seed/t6/100/100"
  },
  {
    id: "7",
    quote: "Professional, reliable, and highly creative. The company logo they designed for us is perfect.",
    author: "Sophie Anderson",
    role: "Director, Visionary Arts",
    image: "https://picsum.photos/seed/t7/100/100"
  },
  {
    id: "8",
    quote: "The best hosting experience we've had in a decade. Reliable, fast, and great support.",
    author: "Johnathan Wick",
    role: "Webmaster, NewsGlobe",
    image: "https://picsum.photos/seed/t8/100/100"
  }
];
