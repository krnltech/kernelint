import { Building } from "lucide-react";
import { clientLogos } from "../data/landing-data";
import Image from "next/image";

export function ClientLogosSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-primary/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Building size={16} />
            Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading organizations across government, international development, 
            and private sectors trust us to deliver exceptional results.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-100 p-6 rounded-2xl border border-gray-200/60 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-32 flex items-center justify-center">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-500/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {client.website && client.website !== "#" ? (
                    <a 
                      href={client.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parentElement = target.parentElement;
                          if (parentElement) {
                            parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors duration-300">
                                <div class="text-center">
                                  <div class="text-2xl mb-2">🏢</div>
                                  <div class="text-sm font-medium">${client.name}</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </a>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parentElement = target.parentElement;
                          if (parentElement) {
                            parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors duration-300">
                                <div class="text-center">
                                  <div class="text-2xl mb-2">🏢</div>
                                  <div class="text-sm font-medium">${client.name}</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                  {client.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 rounded-3xl p-8 md:p-12 animate-fade-in-up animation-delay-600">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-gray-600 font-medium">Trusted Clients</div>
              <div className="text-sm text-gray-500 mt-1">Global Organizations</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Excellence Delivered</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                11+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="text-sm text-gray-500 mt-1">Proven Track Record</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
          <p className="text-gray-600 mb-6">
            Join our growing list of satisfied clients
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Building size={20} />
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}