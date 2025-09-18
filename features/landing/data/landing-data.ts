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
    logo: "https://images.seeklogo.com/logo-png/49/1/cabi-logo-png_seeklogo-497065.png",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxENCqkWmRpbf-MuSVhNEJyR0kbkgdoJJUJu2E_Zqx7qpjVIe1rFM9JfVazs5-5XsjfU&usqp=CAU",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uL1dn4TbjyBCR6OUjZm-bjhiNlZvfNDdPNuV-JlJBvJKRyAe_MivxV40mVtHok02WF4&usqp=CAU",
    website: "https://www.connectauz.com.au"
  }
];

export const technicalCapabilities = {
  title: "End-to-End AI Development Partner",
  description: "We provide service and resources in the complete AI lifecycle, starting from data collection and ending with model development. We also provide software developers for creating your AI-based app and DevOps engineers to optimize the AI model performance and costing.",
  categories: [
    {
      title: "Data Analytics & Data Science",
      technologies: [
        { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg" },
        { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
        { name: "Jupyter", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
        { name: "Matplotlib", logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" },
        { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
        { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Apache Spark", logo: "https://spark.apache.org/images/spark-logo-trademark.png" },
        { name: "Dask", logo: "https://docs.dask.org/en/stable/_images/dask_horizontal.svg" }
      ]
    },
    {
      title: "Cloud AI Platforms",
      technologies: [
        { name: "AWS SageMaker", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Azure AI", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
        { name: "Google Cloud AI", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "IBM Watson", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/IBM_Watson_Logo_2017.png" },
        { name: "Azure OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
        { name: "AWS Bedrock", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Vertex AI", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "Azure Cognitive Services", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
        { name: "AWS Comprehend", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Google AutoML", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "Oracle AI", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
        { name: "Salesforce Einstein", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" }
      ]
    },
    {
      title: "Deep Learning",
      technologies: [
        { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
        { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
        { name: "Transformers", logo: "https://raw.githubusercontent.com/huggingface/transformers/main/docs/source/en/imgs/transformers_logo_name.png" },
        { name: "FastAI", logo: "https://avatars.githubusercontent.com/u/20547620?s=200&v=4" },
        { name: "spaCy", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg" }
      ]
    },
    {
      title: "Generative AI",
      technologies: [
        { name: "OpenAI GPT", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
        { name: "Google Gemini", logo: "https://seeklogo.com/images/G/google-gemini-logo-A5787B2669-seeklogo.com.png" },
        { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/2048px-Claude_AI_symbol.svg.png" },
        { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "Ollama", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.65.0/files/light/ollama.png" },
        { name: "LlamaIndex", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.65.0/files/dark/llamaindex-color.png" },
        { name: "Cohere", logo: "https://images.seeklogo.com/logo-png/51/1/cohere-logo-png_seeklogo-513871.png" },
        { name: "Mistral AI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-GF4yjk576hl_W3Z_JY3tVSKBkGHhXFfMA&s" },
        { name: "Stability AI", logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/stability-ai-qx79mp88rukaefpvcekthd.png/stability-ai-tojrcvgxoppi2i0h4fggv.png?_a=DATAg1AAZAA0" }
      ]
    },
    {
      title: "DevOps & MLOps",
      technologies: [
        { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
        { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
        { name: "Jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
        { name: "GitHub Actions", logo: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4" },
        { name: "GitLab CI/CD", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEoHOezlYwAHIVBEozI105uD5nZjlgKfuUDA&s" },
        { name: "Terraform", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
        { name: "Ansible", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" },
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
        { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "MLflow", logo: "https://mlflow.org/docs/2.12.2/_static/MLflow-logo-final-black.png" },
        { name: "Kubeflow", logo: "https://www.kubeflow.org/docs/images/logos/kubeflow.png" },
        { name: "Prometheus", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg" },
        { name: "Grafana", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg" },
        { name: "Nginx", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" }
      ]
    },
    {
      title: "Back End",
      technologies: [
        { name: ".NET", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" },
        { name: "Spring Boot", logo: "https://spring.io/img/logos/spring-initializr.svg" },
        { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
        { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { name: "Django", logo: "https://static.djangoproject.com/img/logos/django-logo-negative.svg" },
        { name: "Ruby on Rails", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
        { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
        { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
        { name: "ASP.NET", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" }
      ]
    },
    {
      title: "Front End",
      technologies: [
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
        { name: "Nuxt.js", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" },
        { name: "Angular", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
        { name: "Svelte", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLM8DDnr5JjeBf2D-42ysRv-5PHkf8y4dAcg&s" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
        { name: "Material-UI", logo: "https://mui.com/static/logo.png" },
        { name: "Chakra UI", logo: "https://avatars.githubusercontent.com/u/54212428?s=200&v=4" },
        { name: "Vite", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
        { name: "Webpack", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg" }
      ]
    },
    {
      title: "Mobile App Development",
      technologies: [
        { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
        { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Swift", logo: "https://developer.apple.com/assets/elements/icons/swift/swift-96x96_2x.png" },
        { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
        { name: "Objective-C", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFTcex82cjAgDBUonLYnpMklO32cR_hsKOw&s" },
        { name: "Xamarin", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2OyzaFREqGT0s506cuj1_qDdcmfLvQT_Dg&s" },
        { name: "Ionic", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" },
        { name: "Cordova", logo: "https://cordova.apache.org/static/img/cordova_256.png" }
      ]
    },
    {
      title: "Database Technologies",
      technologies: [
        { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
        { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
        { name: "SQL Server", logo: "https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg" },
        { name: "Redis", logo: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" },
        { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
        { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
        { name: "Elasticsearch", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg" }
      ]
    },
    {
      title: "Programming Languages",
      technologies: [
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
        { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
        { name: "Go", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
        { name: "Rust", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" },
        { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { name: "Ruby", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
        { name: "Swift", logo: "https://developer.apple.com/assets/elements/icons/swift/swift-96x96_2x.png" },
        { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
        { name: "R", logo: "https://www.r-project.org/logo/Rlogo.svg" }
      ]
    }
  ]
};

export const platformPartners: ClientLogo[] = [
  {
    name: "ScalableMinds",
    logo: "https://scalableminds.com/assets/img/scalableminds_logo.svg",
    website: "https://scalableminds.com"
  },
  {
    name: "ProtexAI",
    logo: "https://protex.ai/assets/images/logo.svg",
    website: "https://protex.ai"
  },
  {
    name: "V7 Darwin",
    logo: "https://www.v7labs.com/hubfs/V7%20Logo%20Dark.svg",
    website: "https://www.v7labs.com"
  },
  {
    name: "Lightly",
    logo: "https://www.lightly.ai/hubfs/lightly_logo_crop.svg",
    website: "https://www.lightly.ai"
  },
  {
    name: "Heartex",
    logo: "https://heartex.com/assets/images/logo.svg",
    website: "https://heartex.com"
  },
  {
    name: "Segments.ai",
    logo: "https://segments.ai/static/img/segments-logo.svg",
    website: "https://segments.ai"
  },
  {
    name: "Kili Technology",
    logo: "https://www.kili-technology.com/hubfs/kili-logo.svg",
    website: "https://www.kili-technology.com"
  },
  {
    name: "CVAT",
    logo: "https://opencv.org/wp-content/uploads/2022/05/logo.png",
    website: "https://cvat.org"
  },
  {
    name: "Supervisely",
    logo: "https://supervisely.com/assets/img/logo.svg",
    website: "https://supervisely.com"
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