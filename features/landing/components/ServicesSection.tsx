import { ArrowRight, Sparkles } from "lucide-react";
import { mainServices } from "../data/landing-data";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Our Core Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across multiple domains, delivering exceptional results 
            with cutting-edge solutions and unmatched professional standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 hover:border-primary/20 transition-all duration-700 transform hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon container with enhanced styling */}
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-br ${getServiceGradient(service.color)} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <service.icon
                      className="text-white drop-shadow-sm"
                      size={36}
                    />
                  </div>
                  <div className={`absolute -top-1 -right-1 w-6 h-6 bg-${service.color === 'primary' ? 'primary' : service.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-base">
                  {service.description}
                </p>
                
                {/* CTA Link */}
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Explore Service
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  {/* Service number indicator */}
                  <div className="w-8 h-8 bg-gray-100 group-hover:bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 group-hover:text-primary transition-all duration-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <span className="font-semibold">Ready to get started?</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get service gradients
function getServiceGradient(color: string) {
  const gradients = {
    primary: "from-primary via-primary/90 to-primary/80",
    blue: "from-blue-500 via-blue-600 to-blue-700",
    green: "from-green-500 via-green-600 to-green-700", 
    purple: "from-purple-500 via-purple-600 to-purple-700",
    rose: "from-rose-500 via-rose-600 to-rose-700",
    amber: "from-amber-500 via-amber-600 to-amber-700",
  };
  
  return gradients[color as keyof typeof gradients] || gradients.primary;
}