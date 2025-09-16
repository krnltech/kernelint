import {
  Building2,
  Users,
  Award,
  Globe,
  Briefcase,
  Target,
  GraduationCap,
  Code,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import type {
  Statistic,
  Service,
  CoreValue,
  ClientCategory,
  ContactInfo,
  TrustedOrganization,
  ExpertiseCategory,
  ClientLogo,
} from "../types";

export const heroStats: Statistic[] = [
  {
    number: "150+",
    label: "Projects",
    delay: "1100",
  },
  {
    number: "11+",
    label: "Years",
    delay: "1200",
  },
  {
    number: "45+",
    label: "Experts",
    delay: "1300",
  },
];

export const heroServices: Service[] = [
  {
    icon: Code,
    title: "AI & Software Solutions",
    description: "Custom AI Development & Intelligent Systems",
    color: "blue",
    delay: "700",
  },
  {
    icon: Briefcase,
    title: "Consultancy Services",
    description: "Agriculture, Engineering & Market Development",
    color: "blue",
    delay: "800",
  },
  {
    icon: Target,
    title: "Research & Development",
    description: "Policy Analysis & Technology Validation",
    color: "blue",
    delay: "900",
  },
  {
    icon: GraduationCap,
    title: "Training Management",
    description: "Local & International Programs",
    color: "blue",
    delay: "1000",
  },
];

export const coreValues: CoreValue[] = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "Delivering superior service quality ensuring institutional growth and client satisfaction across all projects.",
    color: "blue",
  },
  {
    icon: Globe,
    title: "Sustainable Development",
    description: "Our 'GO GREEN' motto drives sustainable practices in every consulting service we provide.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Professional Expertise",
    description: "Leveraging our team of 45+ experts to provide comprehensive multi-sectoral solutions.",
    color: "blue",
  },
];

export const trustedOrganizations: TrustedOrganization[] = [
  { name: "World Bank" },
  { name: "Asian Development Bank" },
  { name: "UNDP" },
  { name: "European Union" },
];

export const mainServices: Service[] = [
  {
    icon: Code,
    title: "AI & Software Development",
    description: "AI-powered custom solutions, web-based applications, mobile development, intelligent automation, machine learning systems, and digital infrastructure projects.",
    color: "blue",
  },
  {
    icon: Briefcase,
    title: "Consultancy Services",
    description: "Professional advisory services for agriculture, engineering, market development, infrastructure, and IT consulting across multiple sectors.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Research & Development",
    description: "Comprehensive research including policy analysis, feasibility studies, technology validation, and agricultural R&D services.",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Training Management",
    description: "Local and international training programs, workshops, capacity building, and overseas exposure visits worldwide.",
    color: "blue",
  },
];

export const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "AI & Technology Solutions",
    icon: Zap,
    items: [
      "AI-Powered Custom Solutions & Machine Learning",
      "Intelligent Automation & Data Analytics",
      "Web-based Application Development",
      "Mobile App Development",
      "Database & MIS Development",
      "Digital Infrastructure Solutions",
    ],
  },
  {
    title: "Multi-disciplinary Consulting",
    icon: Shield,
    items: [
      "Agricultural Extension & Development",
      "Water Resources Management",
      "Climate Change Adaptation",
      "Food Safety & Quality Assurance",
    ],
  },
  {
    title: "Design & Architecture",
    icon: Building2,
    items: [
      "Expert Home Designs",
      "Building Process Consultation",
      "Regulatory Compliance",
      "Project Planning & Costing",
    ],
  },
];

export const clientCategories: ClientCategory[] = [
  {
    icon: Building2,
    title: "Government Ministries",
    description: "Agriculture, Water Resources, Energy, Education",
    color: "blue",
  },
  {
    icon: Globe,
    title: "International Organizations",
    description: "World Bank, ADB, UNDP, EU",
    color: "blue",
  },
  {
    icon: Users,
    title: "Research Institutes",
    description: "BARI, Universities, Training Academies",
    color: "blue",
  },
  {
    icon: Award,
    title: "Private Sector",
    description: "Consulting firms, Development partners",
    color: "blue",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Address",
    content: "MK Center, 6th Floor, Block-G, House # 27, Road # 14,\nNiketon, Gulshan-1, Dhaka – 1212, Bangladesh",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+8801762694455",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@kernelinternational.com",
  },
];


export const clientLogos: ClientLogo[] = [
  {
    name: "Swiss Contact",
    logo: "https://www.swisscontact.org/_Resources/Static/Packages/Internezzo.Neos/Images/logo_swisscontact.svg?bust=435ac641",
    website: "https://www.swisscontact.org"
  },
  {
    name: "Infrastructure Investment Facilitation Company",
    logo: "https://iifc.gov.bd/images/iifc-logo.jpg",
    website: "https://iifc.gov.bd"
  },
  {
    name: "Government of Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/1200px-Government_Seal_of_Bangladesh.svg.png",
    website: "https://bangladesh.gov.bd"
  },
  {
    name: "World Bank",
    logo: "https://www.worldbank.org/ext/en/media_1b9d836624bdfd028dfbe9f018f3f12e52326504c.svg?width=2000&format=webply&optimize=medium",
    website: "https://www.worldbank.org"
  },
  {
    name: "Mooninlight LLC",
    logo: "https://mooninlightpps.com/wp-content/uploads/2023/04/sitelogo.png",
    website: "https://mooninlightpps.com"
  },
  {
    name: "Land O'Lakes Venture 37",
    logo: "https://storcpdkenticomedia.blob.core.windows.net/media/idd/media/lolorg/images/053119_venture_37-horizontal-v.png",
    website: "https://www.landolakesinc.com"
  },
  {
    name: "Dilman Logistics B.V",
    logo: "https://dilmanlogistics.nl/wp-content/uploads/2020/07/dilman-logo-2.jpg",
    website: "https://dilmanlogistics.nl"
  },
  {
    name: "CABI",
    logo: "https://www.cabi.org/wp-content/uploads/2018/10/CABI_Logo_White.png",
    website: "https://www.cabi.org"
  },
  {
    name: "Asia Pacific Network for Global Change Research",
    logo: "https://www.apn-gcr.org/wp-content/uploads/2020/08/APN-Logo-c-h.png",
    website: "https://www.apn-gcr.org"
  }
];

export const partnerLogos: ClientLogo[] = [
  {
    name: "Sourcetrace USA",
    logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ib584eaqrpr5fvuh95zq",
    website: "https://www.sourcetrace.com"
  },
  {
    name: "Hollandoor Cooperative, Netherlands",
    logo: "https://www.hollanddoor.nl/images/logo.png",
    website: "https://www.hollanddoor.nl"
  },
  {
    name: "Optiontrain, Canada",
    logo: "https://optiontrain.com/assets/images/logo-white.svg",
    website: "https://optiontrain.com"
  },
  {
    name: "Institute of Productivity, UK",
    logo: "https://www.productivity.ac.uk/wp-content/themes/tpi-2022/img/the-productivity-institute-logo.png",
    website: "https://www.productivity.ac.uk"
  },
  {
    name: "ECDP, Kasetsart University, Thailand",
    logo: "https://www.ku.ac.th/assets/images/header/KU_name_logo_62x62.svg",
    website: "https://www.ku.ac.th"
  },
  {
    name: "NRI of University of Greenwich, UK",
    logo: "https://www.nri.org/images/images/logos/NRI-Logo_sm.webp",
    website: "https://www.nri.org"
  },
  {
    name: "Amity University, India",
    logo: "https://www.amity.edu/images/logo.png",
    website: "https://www.amity.edu"
  },
  {
    name: "ConnectAuz, Australia",
    logo: "https://www.connectauz.com.au/wp-content/uploads/2025/06/connect-auz-logo-white-without-Tagline.svg",
    website: "https://www.connectauz.com.au"
  }
];

export const companyInfo = {
  mission: "To deliver cutting-edge software solutions and AI-driven innovations that transform how organizations operate, combining technical excellence with comprehensive consulting services for sustainable digital transformation.",
  vision: "To become the leading technology solutions provider in Bangladesh and beyond, pioneering AI and software innovations that drive digital transformation across industries while maintaining our commitment to excellence and sustainability.",
  established: "2013",
  incorporated: "2016",
  registration: "C-130497/2016",
  location: "Dhaka, Bangladesh",
  goGreenMotto: "GO GREEN - Our motto for sustainable development",
};