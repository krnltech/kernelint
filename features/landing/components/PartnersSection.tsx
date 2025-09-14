import { Users } from "lucide-react";
import { partnerLogos } from "../data/landing-data";

export function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Users size={16} />
            Partner Organizations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Strategic{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with universities, research institutes, and organizations 
            worldwide to drive innovation and knowledge exchange.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-16">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white p-6 rounded-2xl border border-gray-200/60 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-32 flex items-center justify-center">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-primary/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {partner.website && partner.website !== "#" ? (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors duration-300">
                              <div class="text-center">
                                <div class="text-2xl mb-2">🤝</div>
                                <div class="text-sm font-medium">${partner.name}</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </a>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors duration-300">
                              <div class="text-center">
                                <div class="text-2xl mb-2">🤝</div>
                                <div class="text-sm font-medium">${partner.name}</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                  {partner.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="bg-gradient-to-r from-blue-500/5 via-primary/5 to-blue-500/5 rounded-3xl p-8 md:p-12 animate-fade-in-up animation-delay-600">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-600 font-medium">Partner Organizations</div>
              <div className="text-sm text-gray-500 mt-1">Research & Academic</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                6
              </div>
              <div className="text-gray-600 font-medium">Countries</div>
              <div className="text-sm text-gray-500 mt-1">Global Network</div>
            </div>
            
            <div className="group">
              <div className="text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-gray-600 font-medium">Joint Projects</div>
              <div className="text-sm text-gray-500 mt-1">Collaborative Research</div>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-800">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Knowledge Exchange</h3>
            <p className="text-gray-600 text-sm">
              Collaborative research and shared expertise across disciplines and borders.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Capacity Building</h3>
            <p className="text-gray-600 text-sm">
              Joint training programs and professional development initiatives worldwide.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation Network</h3>
            <p className="text-gray-600 text-sm">
              Fostering innovation through strategic partnerships and resource sharing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
          <p className="text-gray-600 mb-6">
            Interested in partnering with us for research and development?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Users size={20} />
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}