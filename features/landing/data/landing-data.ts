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
  TeamMember,
  TrustedOrganization,
  ExpertiseCategory,
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
    icon: Briefcase,
    title: "Consultancy Services",
    description: "Agriculture, Engineering & Market Development",
    color: "rose",
    delay: "700",
  },
  {
    icon: Target,
    title: "Research & Development",
    description: "Policy Analysis & Technology Validation",
    color: "blue",
    delay: "800",
  },
  {
    icon: GraduationCap,
    title: "Training Management",
    description: "Local & International Programs",
    color: "green",
    delay: "900",
  },
  {
    icon: Code,
    title: "IT Solutions",
    description: "Web Applications & Database Development",
    color: "purple",
    delay: "1000",
  },
];

export const coreValues: CoreValue[] = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "Delivering superior service quality ensuring institutional growth and client satisfaction across all projects.",
    color: "rose",
  },
  {
    icon: Globe,
    title: "Sustainable Development",
    description: "Our 'GO GREEN' motto drives sustainable practices in every consulting service we provide.",
    color: "green",
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
    icon: Briefcase,
    title: "Consultancy Services",
    description: "Professional advisory services for agriculture, engineering, market development, infrastructure, and IT consulting across multiple sectors.",
    color: "primary",
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
    color: "green",
  },
  {
    icon: Code,
    title: "IT & Software Development",
    description: "Web-based solutions, mobile applications, database development, system integration, and digital infrastructure projects.",
    color: "purple",
  },
];

export const expertiseCategories: ExpertiseCategory[] = [
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
  {
    title: "IT & Technology Solutions",
    icon: Zap,
    items: [
      "Web-based Application Development",
      "Mobile App Development",
      "Database & MIS Development",
      "Digital Infrastructure Solutions",
    ],
  },
];

export const clientCategories: ClientCategory[] = [
  {
    icon: Building2,
    title: "Government Ministries",
    description: "Agriculture, Water Resources, Energy, Education",
    color: "rose",
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
    color: "green",
  },
  {
    icon: Award,
    title: "Private Sector",
    description: "Consulting firms, Development partners",
    color: "purple",
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
    content: "+88028833371",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@kernelinternational.com",
  },
];

export const managementTeam: TeamMember[] = [
  { name: "Md. Saleh Ahmed, Ph.D.", position: "Chairman" },
  { name: "Engr. Md. Shamsuddoha", position: "Managing Director & CEO" },
  { name: "Ms. Rukhsana Noor", position: "Director of Administration" },
];

export const companyInfo = {
  mission: "To develop an institutional framework of excellence with a view to rendering research and consulting services to government, non-government and private sector organizations.",
  vision: "To evolve as a sustainable research institution and consultancy service providing organization in Bangladesh and abroad by providing quality services and ensuring institutional growth and sustainability in the ever-changing landscape of development.",
  established: "2013",
  incorporated: "2016",
  registration: "C-130497/2016",
  location: "Dhaka, Bangladesh",
  goGreenMotto: "GO GREEN - Our motto for sustainable development",
};