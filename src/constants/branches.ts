export interface Branch {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  description: string;
}

export const branches: Branch[] = [
  // Rajasthan
  {
    id: "jaipur",
    city: "Jaipur",
    country: "India",
    address: "World Web Hub Tower, Malviya Nagar, Jaipur, Rajasthan 302017",
    phone: "+91 141 234 5678",
    email: "jaipur@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Our Pink City office specializes in customer experience design and heritage brand digitalization."
  },
  // Telangana
  {
    id: "hyderabad",
    city: "Hyderabad",
    country: "India",
    address: "Hitech City, Phase 2, Hyderabad, Telangana 500081",
    phone: "+91 40 1234 5678",
    email: "hyderabad@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Located in India's pharma and tech hub, focusing on database management and biotechnology software."
  },
  // Tamil Nadu
  {
    id: "chennai",
    city: "Chennai",
    country: "India",
    address: "Old Mahabalipuram Rd, Thoraipakkam, Chennai, Tamil Nadu 600097",
    phone: "+91 44 1234 5678",
    email: "chennai@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Our SaaS and deep-tech center in the enterprise corridor of Chennai."
  },
  // Goa
  {
    id: "goa",
    city: "Goa",
    country: "India",
    address: "Panjim IT Park, Altinho, Panaji, Goa 403001",
    phone: "+91 832 123 4567",
    email: "goa@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Our creative hub where technology meets lifestyle innovation."
  },
  // Maharashtra
  {
    id: "mumbai",
    city: "Mumbai",
    country: "India",
    address: "BKC, G Block, Mumbai, Maharashtra 400051",
    phone: "+91 22 1234 5678",
    email: "mumbai@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "The primary Indian headquarters handling high-frequency trading and fintech core development."
  },
  {
    id: "jalgaon",
    city: "Jalgaon",
    country: "India",
    address: "MIDC Area, Jalgaon, Maharashtra 425001",
    phone: "+91 257 123 4567",
    email: "jalgaon@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Specializing in agricultural technology and rural commerce platforms."
  },
  // West Bengal
  {
    id: "kolkata",
    city: "Kolkata",
    country: "India",
    address: "Salt Lake Sector V, Kolkata, West Bengal 700091",
    phone: "+91 33 1234 5678",
    email: "kolkata@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Focusing on data science and logistics optimization for the East Indian market."
  },
  // Bihar
  {
    id: "patna",
    city: "Patna",
    country: "India",
    address: "Fraser Road, Patna, Bihar 800001",
    phone: "+91 612 123 4567",
    email: "patna@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Providing digital infrastructure and educational technology solutions."
  },
  // Jharkhand
  {
    id: "ranchi",
    city: "Ranchi",
    country: "India",
    address: "Main Road, Ranchi, Jharkhand 834001",
    phone: "+91 651 123 4567",
    email: "ranchi@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Focusing on mining industry software and industrial automation."
  },
  // Uttar Pradesh
  {
    id: "aligarh",
    city: "Aligarh",
    country: "India",
    address: "Centre Point, Aligarh, Uttar Pradesh 202001",
    phone: "+91 571 123 4567",
    email: "aligarh@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Hub for manufacturing ERP and hardware-software integration."
  },
  {
    id: "mathura",
    city: "Mathura",
    country: "India",
    address: "Krishna Nagar, Mathura, Uttar Pradesh 281001",
    phone: "+91 565 123 4567",
    email: "mathura@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Specializing in tourism tech and religious digital platforms."
  },
  {
    id: "agra",
    city: "Agra",
    country: "India",
    address: "Sanjay Place, Agra, Uttar Pradesh 282002",
    phone: "+91 562 123 4567",
    email: "agra@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Developing world-class VR/AR experiences for historical preservation."
  },
  {
    id: "hathras",
    city: "Hathras",
    country: "India",
    address: "Agra Road, Hathras, Uttar Pradesh 204101",
    phone: "+91 5722 123 456",
    email: "hathras@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Innovation center for small-scale industry digitization."
  },
  // Assam
  {
    id: "guwahati",
    city: "Guwahati",
    country: "India",
    address: "GS Road, Guwahati, Assam 781005",
    phone: "+91 361 123 4567",
    email: "guwahati@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Our gateway to the Northeast, specializing in tea estate management systems."
  },
  // Uttarakhand & Himachal
  {
    id: "haridwar",
    city: "Haridwar",
    country: "India",
    address: "Ranipur More, Haridwar, Uttarakhand 249401",
    phone: "+91 1334 123 456",
    email: "haridwar@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Developing sustainable tech for eco-tourism and spiritual retreats."
  },
  {
    id: "nainital",
    city: "Nainital",
    country: "India",
    address: "Mall Road, Nainital, Uttarakhand 263002",
    phone: "+91 5942 123 456",
    email: "nainital@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "High-altitude research center for remote sensing and connectivity."
  },
  {
    id: "manali",
    city: "Manali",
    country: "India",
    address: "Old Manali, Himachal Pradesh 175131",
    phone: "+91 1902 123 456",
    email: "manali@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Digital nomad hub focusing on satellite communication tech."
  },
  // Punjab & Haryana
  {
    id: "chandigarh",
    city: "Chandigarh",
    country: "India",
    address: "Sector 17, Chandigarh 160017",
    phone: "+91 172 123 4567",
    email: "chandigarh@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Strategic planning center for government digital services."
  },
  {
    id: "gurugram",
    city: "Gurugram",
    country: "India",
    address: "Cyber City, DLF Phase 3, Gurugram, Haryana 122002",
    phone: "+91 124 123 4567",
    email: "gurugram@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Global consulting and high-end software architecture hub."
  },
  {
    id: "faridabad",
    city: "Faridabad",
    country: "India",
    address: "Neelam Chowk, Faridabad, Haryana 121001",
    phone: "+91 129 123 4567",
    email: "faridabad@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Industrial IoT center for the manufacturing corridor."
  },
  // Delhi Regions
  {
    id: "central-delhi",
    city: "Central Delhi",
    country: "India",
    address: "Connaught Place, New Delhi 110001",
    phone: "+91 11 1234 5678",
    email: "centraldelhi@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Political and business strategy headquarters in the nation's capital."
  },
  {
    id: "west-delhi",
    city: "West Delhi",
    country: "India",
    address: "Rajouri Garden, New Delhi 110027",
    phone: "+91 11 2345 6789",
    email: "westdelhi@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Focusing on retail tech and consumer behavior analytics."
  },
  {
    id: "south-delhi",
    city: "South Delhi",
    country: "India",
    address: "Hauz Khas, New Delhi 110016",
    phone: "+91 11 3456 7890",
    email: "southdelhi@worldwebhub.com",
        mapUrl: "https://maps.google.com",
    description: "Designing lifestyle applications and high-end digital aesthetics."
  },
  {
    id: "east-delhi",
    city: "East Delhi",
    country: "India",
    address: "Laxmi Nagar, New Delhi 110092",
    phone: "+91 11 4567 8901",
    email: "eastdelhi@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Specializing in training resources and developer community support."
  },
  {
    id: "north-delhi",
    city: "North Delhi",
    country: "India",
    address: "Model Town, New Delhi 110009",
    phone: "+91 11 5678 9012",
    email: "northdelhi@worldwebhub.com",
    mapUrl: "https://maps.google.com",
    description: "Innovative research center for academic and scientific computing."
  },
   {
    id: "noida",
    city: "Noida",
    country: "India",
    address: "Model Town, New Delhi 110009",
    phone: "+91 11 5678 9012",
    email: "noida@worldwebhub.com", 
    mapUrl: "https://maps.google.com",
    description: "Innovative research center for academic and scientific computing."
  }

];
