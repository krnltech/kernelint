import { ArrowRight, Sparkles, Crown } from "lucide-react";
import { heroStats, heroServices } from "../data/landing-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-primary/5 pt-20 overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-primary/15 to-blue-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-primary/20 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-from-left">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-bounce-in animation-delay-300 border border-primary/20 backdrop-blur-sm">
              <Crown size={16} className="text-primary" />
              Leading Multi-disciplinary Solutions Provider
              <Sparkles size={14} className="text-primary animate-pulse" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-slide-in-from-bottom animation-delay-100">
              Excellence in{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
                <span className="animate-gradient">Multi-disciplinary</span>
              </span>{" "}
              <br className="hidden lg:block" />
              Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-500">
              KIL is a leading research, training and consulting service provider organization,
              delivering exceptional quality services across agriculture, <span className="text-primary font-semibold">AI-powered custom software development</span>,
              IT, architecture, engineering, and beyond with 10+ years of excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-700 mb-12">
              <a href="mailto:contact@kernelinternational.com" className="group bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-5 rounded-full hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-3 relative overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-gray-600 animate-fade-in-up animation-delay-900">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Trusted by 150+ clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
                <span>10+ years experience</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Dashboard */}
          <div className="relative animate-slide-in-from-right animation-delay-300">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-200/50 animate-bounce-in animation-delay-600 hover:shadow-3xl transition-all duration-500">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Sparkles size={14} />
                    Our Expertise
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Multi-disciplinary Excellence
                  </h3>
                  <p className="text-gray-600">
                    Since 2013 • 45+ Expert Professionals
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-4 mb-8">
                  {heroServices.map((service, index) => (
                    <div
                      key={index}
                      className={`group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50/80 to-white hover:from-primary/5 hover:to-blue-500/5 hover:shadow-lg transition-all duration-300 animate-fade-in-left animation-delay-${service.delay} cursor-pointer border border-gray-100/50 hover:border-primary/20`}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${getServiceGradient(service.color)} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon
                          className="text-white drop-shadow-sm"
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                        size={16}
                      />
                    </div>
                  ))}
                </div>

                {/* Enhanced Stats */}
                <div className="border-t border-gray-200/50 pt-6">
                  <div className="grid grid-cols-3 gap-4">
                    {heroStats.map((stat, index) => (
                      <div
                        key={index}
                        className={`group text-center p-4 rounded-xl bg-gradient-to-br from-gray-50/50 to-white hover:from-primary/5 hover:to-blue-500/5 transition-all duration-300 animate-fade-in-up animation-delay-${stat.delay} hover:scale-105 cursor-pointer`}
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-3xl rotate-12 animate-float animation-delay-400 backdrop-blur-sm border border-white/20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-2xl rotate-45 animate-float animation-delay-800 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 -left-3 w-8 h-8 bg-gradient-to-br from-green-400/50 to-emerald-400/50 rounded-full animate-pulse-slow animation-delay-1000"></div>
              <div className="absolute top-1/4 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400/60 to-orange-400/60 rounded-full animate-bounce animation-delay-1200"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-500/3 rounded-3xl transform rotate-1 animate-pulse-slow animation-delay-200 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-in animation-delay-1000">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

// Helper function for service gradients
function getServiceGradient(color: string) {
  const gradients = {
    rose: "from-rose-500 to-rose-600",
    blue: "from-blue-500 to-blue-600", 
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    primary: "from-primary to-blue-600"
  };
  
  return gradients[color as keyof typeof gradients] || gradients.primary;
}