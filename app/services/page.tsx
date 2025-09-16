"use client";

import { useState, useEffect } from "react";
import { Menu, X, Briefcase, Target, GraduationCap, Code, Building2, Lightbulb, Users, Globe, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { Footer } from "../../features/landing/components";

function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center animate-fade-in-left">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent cursor-pointer">
                  Kernel International
                </h1>
                <div className="text-xs text-gray-500 font-mono tracking-wider">
                  EST. 2013
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block animate-fade-in-up">
            <div className="flex items-center space-x-12">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-primary font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              </Link>
              <Link
                href="/#expertise"
                className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Expertise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#expertise"
              className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="/contact"
              className="w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <PageHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Briefcase size={16} />
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Multi-disciplinary expertise across consultancy, research, training, design, and technology 
              development to deliver exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* AI & Software Development */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Code className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">AI & Software Development</h2>
                  <p className="text-purple-600 font-medium">AI-Powered Digital Solutions</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Cutting-edge AI-powered custom solutions, advanced IT consulting services and software
                development with machine learning capabilities to help competitive development and reduce operational costs.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "AI-Powered Custom Solutions & Machine Learning",
                  "Intelligent Automation & Data Analytics",
                  "Web-based application development",
                  "Mobile application solutions",
                  "Database & MIS development",
                  "Electronic display board systems",
                  "Agro-meteorological software",
                  "Digital infrastructure projects",
                  "System integration services",
                  "IT consulting & workflow management"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-purple-600" size={16} />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-500/5 p-4 rounded-xl">
                <p className="text-purple-600 font-semibold text-sm">AI-Driven Solutions • Modern Technology • Quality & Timeframe Focus</p>
              </div>
            </div>

            {/* Consultancy Services */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Consultancy Services</h2>
                  <p className="text-primary font-medium">Professional Advisory Solutions</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Kernel International Ltd. provides professional advisory services to various Public & Private organizations,
                National & International Organizations and NGOs/INGOs, Autonomous Organizations, and Donor Organizations.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Project appraisal study & baseline surveys",
                  "Mid-term & end-line evaluation studies",
                  "Agricultural production & post-harvest management",
                  "Water resources & irrigation management",
                  "Climate change adaptation & mitigation",
                  "Institutional development & capacity building",
                  "Supply & value chain analysis",
                  "Market linkage development"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-4 rounded-xl">
                <p className="text-primary font-semibold text-sm">45+ Expert Consultants • 150+ Projects Completed</p>
              </div>
            </div>

            {/* Research & Development */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Research & Development</h2>
                  <p className="text-blue-600 font-medium">Evidence-Based Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a private research and development organization, KIL conducts comprehensive research and 
                extension services across various fields to generate actionable insights.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Policy analysis & feasibility studies",
                  "Socio-economic surveys & impact assessments",
                  "Technology validation & packaging",
                  "Climate smart technology adaptation trials",
                  "Natural resource based R&D",
                  "Participatory action research",
                  "Monitoring & evaluation studies",
                  "Sector studies & case analyses"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={16} />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-500/5 p-4 rounded-xl">
                <p className="text-blue-600 font-semibold text-sm">Evidence-Based Research • Technology Transfer</p>
              </div>
            </div>

            {/* Training Management */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Training Management</h2>
                  <p className="text-green-600 font-medium">Capacity Building Programs</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                KIL conducts comprehensive capacity building and technology transfer programs in collaboration 
                with national and international organizations worldwide.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Local Training</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Short-term training (2-5 days)</li>
                    <li>• Customized programs</li>
                    <li>• Workshops & conferences</li>
                    <li>• Module development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">International Programs</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Overseas exposure visits</li>
                    <li>• Study tours (7-28 days)</li>
                    <li>• University enrollment</li>
                    <li>• Cross-cultural exchanges</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-500/5 p-4 rounded-xl">
                <p className="text-green-600 font-semibold text-sm">Global Partnerships • World Bank, ADB, UNDP Collaboration</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Design & Architecture */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Design & Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert architectural design and building consultation services for residential and commercial projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Home Designs</h3>
              <p className="text-gray-600">Collaborative design consultation for residential projects with focus on functionality and aesthetics.</p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building Process Consultation</h3>
              <p className="text-gray-600">Comprehensive advice on design, planning, budgeting, and building regulation compliance.</p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600">Ensure compliance with all relevant laws and regulations with clear guidance and instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Sectors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Training Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs across multiple sectors and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Agriculture & Rural Development",
              "Culture & Heritage",
              "Energy, Power & Mineral Resources",
              "Housing & Public Works",
              "Science & IT",
              "Education",
              "Health and Hygiene",
              "Food Safety and Quality Assurance",
              "Engineering",
              "Water Resource Management",
              "Agribusiness and Entrepreneurship",
              "Sustainable Environment Development",
              "Value Chain Development",
              "HRM, Accounts & Finance",
              "Product Development",
              "Sales & Marketing",
              "High Value Crops and Horticulture",
              "Supply Chain Management",
              "Project Management for Professionals",
              "Computer Fundamentals",
              "Organic Farming & GAP",
              "Good Manufacturing Practices"
            ].map((sector, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <Star className="text-primary" size={16} />
                <span className="text-gray-700 font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Clients & Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading organizations locally and internationally.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Domestic Clients */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="text-white" size={16} />
                </div>
                Domestic Clients
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Ministry of Agriculture",
                  "Ministry of Fisheries and Livestock", 
                  "Ministry of Power, Energy and Mineral Resources",
                  "Ministry of Water Resources",
                  "Bangladesh Water Development Board",
                  "Department of Agricultural Extension",
                  "Bangladesh Agricultural Research Institute",
                  "Palli Karma Sahayak Foundation (PKSF)"
                ].map((client, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ArrowRight className="text-primary" size={14} />
                    <span className="text-gray-700 text-sm">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* International Partners */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={16} />
                </div>
                International Partners
              </h3>
              <div className="space-y-4">
                {[
                  "The World Bank",
                  "Asian Development Bank (ADB)",
                  "United Nations Development Programme (UNDP)",
                  "European Union (EU)",
                  "Swiss Contact",
                  "Food and Agriculture Organization (FAO)",
                  "Islamic Development Bank",
                  "Royal Netherlands Embassy"
                ].map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700 font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm p-12 rounded-3xl border border-primary/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our comprehensive services can help achieve your project goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@kernelinternational.com?subject=Contact Our Team&body=Hi, I would like to discuss my project requirements with your team." className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold inline-flex items-center gap-2">
                Contact Our Team
                <ArrowRight size={18} />
              </a>
              <a href="mailto:contact@kernelinternational.com?subject=Portfolio Request&body=Hi, I would like to view your portfolio and learn more about your services." className="border border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}