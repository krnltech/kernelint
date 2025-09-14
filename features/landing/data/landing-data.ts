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
    icon: Briefcase,
    title: "Consultancy Services",
    description: "Agriculture, Engineering & Market Development",
    color: "blue",
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
    color: "blue",
    delay: "900",
  },
  {
    icon: Code,
    title: "IT Solutions",
    description: "Web Applications & Database Development",
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
  {
    icon: Code,
    title: "IT & Software Development",
    description: "Web-based solutions, mobile applications, database development, system integration, and digital infrastructure projects.",
    color: "blue",
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

export const clientLogos: ClientLogo[] = [
  {
    name: "Swiss Contact",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZGRkZGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNFRDMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlN3aXNzPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRUQzMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db250YWN0PC90ZXh0Pgo8L3N2Zz4K",
    website: "https://www.swisscontact.org"
  },
  {
    name: "Infrastructure Investment Facilitation Company",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Crect x='20' y='20' width='160' height='60' fill='none' stroke='%232563EB' stroke-width='2'/%3E%3Ctext x='100' y='55' font-family='Arial' font-size='16' font-weight='bold' fill='%232563EB' text-anchor='middle'%3EIIFC%3C/text%3E%3C/svg%3E",
    website: "https://iifc.gov.bd"
  },
  {
    name: "Government of Bangladesh",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZGRkZGIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjUwIiByPSIzMCIgZmlsbD0iIzAwNkE0RSIvPgo8dGV4dCB4PSIxMDAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hb3YgQkQ8L3RleHQ+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkY2QjM1IiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==",
    website: "https://bangladesh.gov.bd"
  },
  {
    name: "World Bank",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Ctext x='100' y='35' font-family='Arial' font-size='16' font-weight='bold' fill='%230094DF' text-anchor='middle'%3EWorld Bank%3C/text%3E%3Crect x='70' y='40' width='60' height='20' fill='%230094DF'/%3E%3Ctext x='100' y='75' font-family='Arial' font-size='12' fill='%230094DF' text-anchor='middle'%3EGroup%3C/text%3E%3C/svg%3E",
    website: "https://www.worldbank.org"
  },
  {
    name: "Mooninlight LLC",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMUUyMzNBIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjQwIiByPSIxNSIgZmlsbD0iI0ZGRkZGRiIvPgo8dGV4dCB4PSIxMDAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb29uaW5saWdodDwvdGV4dD4KPC9zdmc+Cg==",
    website: "#"
  },
  {
    name: "Land O'Lakes Venture 37",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Ctext x='100' y='40' font-family='Arial' font-size='14' font-weight='bold' fill='%23ED343A' text-anchor='middle'%3ELand O'Lakes%3C/text%3E%3Ctext x='100' y='60' font-family='Arial' font-size='12' fill='%23ED343A' text-anchor='middle'%3EVenture 37%3C/text%3E%3C/svg%3E",
    website: "https://www.landolakesinc.com"
  },
  {
    name: "Dilman Logistics B.V",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Crect x='20' y='30' width='160' height='40' fill='none' stroke='%230057A5' stroke-width='2'/%3E%3Ctext x='100' y='55' font-family='Arial' font-size='13' font-weight='bold' fill='%230057A5' text-anchor='middle'%3EDilman Logistics%3C/text%3E%3C/svg%3E",
    website: "#"
  },
  {
    name: "CABI",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjMwIiB5PSIzNSIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzJEOEI0MiIvPgo8dGV4dCB4PSIxMDAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DQUJJPC90ZXh0Pgo8L3N2Zz4K",
    website: "https://www.cabi.org"
  },
  {
    name: "Asia Pacific Network for Global Change Research",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Ccircle cx='100' cy='50' r='35' fill='none' stroke='%232563EB' stroke-width='2'/%3E%3Ctext x='100' y='40' font-family='Arial' font-size='16' font-weight='bold' fill='%232563EB' text-anchor='middle'%3EAPN%3C/text%3E%3Ctext x='100' y='60' font-family='Arial' font-size='9' fill='%232563EB' text-anchor='middle'%3EGlobal Change Research%3C/text%3E%3C/svg%3E",
    website: "https://www.apn-gcr.org"
  }
];

export const partnerLogos: ClientLogo[] = [
  {
    name: "Sourcetrace USA",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Ctext x='100' y='40' font-family='Arial' font-size='15' font-weight='bold' fill='%232563EB' text-anchor='middle'%3ESourcetrace%3C/text%3E%3Ctext x='100' y='60' font-family='Arial' font-size='12' fill='%232563EB' text-anchor='middle'%3EUSA%3C/text%3E%3Cpath d='M30 70 Q100 65 170 70' stroke='%232563EB' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    website: "https://www.sourcetrace.com"
  },
  {
    name: "Hollandoor Cooperative, Netherlands",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Crect x='30' y='25' width='140' height='50' fill='%23FF6B35' rx='5'/%3E%3Ctext x='100' y='40' font-family='Arial' font-size='12' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'%3EHollandoor%3C/text%3E%3Ctext x='100' y='55' font-family='Arial' font-size='10' fill='%23FFFFFF' text-anchor='middle'%3ECooperative%3C/text%3E%3Ctext x='100' y='67' font-family='Arial' font-size='8' fill='%23FFFFFF' text-anchor='middle'%3ENetherlands%3C/text%3E%3C/svg%3E",
    website: "#"
  },
  {
    name: "Optiontrain, Canada",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Ccircle cx='80' cy='45' r='20' fill='none' stroke='%23DC2626' stroke-width='3'/%3E%3Ctext x='130' y='40' font-family='Arial' font-size='14' font-weight='bold' fill='%23DC2626' text-anchor='middle'%3EOptiontrain%3C/text%3E%3Ctext x='130' y='55' font-family='Arial' font-size='10' fill='%23DC2626' text-anchor='middle'%3ECanada%3C/text%3E%3C/svg%3E",
    website: "#"
  },
  {
    name: "Institute of Productivity, UK",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Crect x='40' y='30' width='120' height='40' fill='none' stroke='%23059669' stroke-width='2'/%3E%3Ctext x='100' y='40' font-family='Arial' font-size='11' font-weight='bold' fill='%23059669' text-anchor='middle'%3EInstitute of%3C/text%3E%3Ctext x='100' y='55' font-family='Arial' font-size='11' font-weight='bold' fill='%23059669' text-anchor='middle'%3EProductivity%3C/text%3E%3Ctext x='100' y='80' font-family='Arial' font-size='9' fill='%23059669' text-anchor='middle'%3EUnited Kingdom%3C/text%3E%3C/svg%3E",
    website: "#"
  },
  {
    name: "ECDP, Kasetsart University, Thailand",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Crect x='25' y='20' width='150' height='60' fill='%23FBB03B' rx='8'/%3E%3Ctext x='100' y='35' font-family='Arial' font-size='12' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'%3EECDP%3C/text%3E%3Ctext x='100' y='50' font-family='Arial' font-size='9' fill='%23FFFFFF' text-anchor='middle'%3EKasetsart University%3C/text%3E%3Ctext x='100' y='65' font-family='Arial' font-size='9' fill='%23FFFFFF' text-anchor='middle'%3EThailand%3C/text%3E%3C/svg%3E",
    website: "https://www.ku.ac.th"
  },
  {
    name: "NRI of University of Greenwich, UK",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Ccircle cx='100' cy='45' r='30' fill='none' stroke='%234338CA' stroke-width='2'/%3E%3Ctext x='100' y='35' font-family='Arial' font-size='14' font-weight='bold' fill='%234338CA' text-anchor='middle'%3ENRI%3C/text%3E%3Ctext x='100' y='50' font-family='Arial' font-size='8' fill='%234338CA' text-anchor='middle'%3EUniversity of Greenwich%3C/text%3E%3Ctext x='100' y='85' font-family='Arial' font-size='9' fill='%234338CA' text-anchor='middle'%3EUnited Kingdom%3C/text%3E%3C/svg%3E",
    website: "https://www.gre.ac.uk"
  },
  {
    name: "Amity University, India",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Cpolygon points='100,25 120,45 100,65 80,45' fill='%23DC2626'/%3E%3Ctext x='100' y='50' font-family='Arial' font-size='10' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'%3EA%3C/text%3E%3Ctext x='100' y='80' font-family='Arial' font-size='12' font-weight='bold' fill='%23DC2626' text-anchor='middle'%3EAmity University%3C/text%3E%3Ctext x='100' y='92' font-family='Arial' font-size='9' fill='%23DC2626' text-anchor='middle'%3EIndia%3C/text%3E%3C/svg%3E",
    website: "https://www.amity.edu"
  },
  {
    name: "ConnectAuz, Australia",
    logo: "data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23FFFFFF'/%3E%3Crect x='30' y='30' width='140' height='40' fill='none' stroke='%23059669' stroke-width='2' rx='20'/%3E%3Ctext x='100' y='45' font-family='Arial' font-size='13' font-weight='bold' fill='%23059669' text-anchor='middle'%3EConnectAuz%3C/text%3E%3Ctext x='100' y='58' font-family='Arial' font-size='10' fill='%23059669' text-anchor='middle'%3EAustralia%3C/text%3E%3Ccircle cx='60' cy='50' r='3' fill='%23059669'/%3E%3Ccircle cx='140' cy='50' r='3' fill='%23059669'/%3E%3C/svg%3E",
    website: "#"
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