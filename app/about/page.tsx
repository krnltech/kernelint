"use client";

import { useState, useEffect } from "react";
import { Menu, X, Building2, Calendar, MapPin, Users, Award, Target, Heart, Globe, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

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
                className="text-primary font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Services
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
              className="block px-3 py-2 text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
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

export default function AboutPage() {
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
              <Building2 size={16} />
              About Kernel International
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Multi-disciplinary
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Established in 2013, Kernel International Limited is a leading multi-disciplinary research, 
              training and consulting service provider organization based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">2013</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">45+</div>
              <div className="text-sm text-gray-600">Professional Staff</div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">2016</div>
              <div className="text-sm text-gray-600">Incorporated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Background</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Kernel International Limited (KIL) was established initially as a single ownership entity in 2013 as 
                  SR Consulting International for overseas training and consultancy management. It was subsequently 
                  incorporated as a private limited company with the Registrar of Joint Stock Company, Bangladesh 
                  under the companies' act (act XVIII) of 1994 and re-named as Kernel International Ltd. in April 2016.
                </p>
                <p>
                  Like the word "Kernel" suggests, our company is at the core of any management consultancy works. 
                  KIL provides consultancy services for many different sectors such as Training Management, IT, 
                  Architecture and Design, Engineering, Construction, Agriculture, and more.
                </p>
                <p>
                  KIL always focuses to embark upon development projects with maximum efforts and always tries to 
                  achieve the maximum level of precision with all projects. We operate with full capacity to develop 
                  sustainability across all projects - from management to design; from technology to consultancy.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Building2 size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Registration</div>
                    <div className="text-sm text-gray-600">C-130497/2016</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">Dhaka, Bangladesh</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Shield size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Type</div>
                    <div className="text-sm text-gray-600">Management Consultancy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission & Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and sustainable development drives everything we do.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-primary/20 font-serif leading-none">"</div>
                <p className="text-gray-700 leading-relaxed italic pl-8">
                  To develop an institutional framework of excellence with a view to rendering research and 
                  consulting services to government, non-government and private sector organizations. We are 
                  committed to develop professionalism in consulting services through enhancing institutional 
                  capability and by providing experts to various development partners.
                </p>
              </div>
            </div>

            {/* GO GREEN */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-3xl border border-green-500/20 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">GO GREEN</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>GO GREEN</strong> is our motto and we focus on sustainable development in any case of 
                consultancy services. We believe in creating solutions that benefit both our clients and the environment.
              </p>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block text-sm font-semibold">
                Sustainable Development Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Key Objectives</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Supportive Consulting Services",
                description: "To emerge and act as supportive consulting service providing organization and meet up expectations of donors, government and non-government agencies."
              },
              {
                title: "Professional Platform",
                description: "To act as a platform for professionals to enable them to offer their technical services effectively."
              },
              {
                title: "Timely Support",
                description: "To render appropriate, timely and need-based support to government and development partners."
              },
              {
                title: "Multi-sector Consultancy",
                description: "To act as a consultancy organization focused on Management Consultancy, Training, Education, Design & Architecture."
              },
              {
                title: "Research & Policy",
                description: "To assist in planning and policy formulation by undertaking specific research for government and development partners."
              },
              {
                title: "Capacity Building",
                description: "To provide a platform for young professionals to learn and educate themselves in a practical consultancy environment."
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Well-equipped facilities and modern infrastructure to support our operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Office Space</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  2,800 square feet accommodation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  6th Floor, MK Center, Gulshan-1
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Adequate air conditioning
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Proper security facilities
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Equipment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Advanced IT infrastructure
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Survey equipment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Drawing & drafting tools
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Multimedia facilities
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Transportation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Toyota Allion (Management)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Toyota Hiace (Staff Transport)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Project-specific vehicles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading our organization towards excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Md. Saleh Ahmed, Ph.D.</h3>
              <p className="text-primary font-semibold mb-3">Chairman</p>
              <p className="text-gray-600 text-sm">40 years of experience in agricultural development and research</p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engr. Md. Shamsuddoha</h3>
              <p className="text-blue-600 font-semibold mb-3">Managing Director & CEO</p>
              <p className="text-gray-600 text-sm">12 years of experience in computer science and IT management</p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ms. Rukhsana Noor</h3>
              <p className="text-purple-600 font-semibold mb-3">Director of Administration</p>
              <p className="text-gray-600 text-sm">12 years of experience in business administration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}