import { Shield, Award, Globe, Handshake } from "lucide-react";
import { trustedOrganizations } from "../data/landing-data";

export function TrustedOrganizations() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Shield size={16} />
            Trusted Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building strong partnerships with prestigious international organizations 
            and development institutions worldwide.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-primary/20 hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">Serving international development organizations</p>
          </div>

          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-green-500/20 hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-400">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Excellence</h3>
            <p className="text-gray-600">Recognized for quality and reliability</p>
          </div>

          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-purple-500/20 hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Long-term Partnerships</h3>
            <p className="text-gray-600">Building sustainable relationships since 2013</p>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up animation-delay-800">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Prestigious Partners
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedOrganizations.map((org, index) => (
              <div
                key={index}
                className="group relative text-center p-6 bg-gradient-to-br from-gray-50/80 to-white rounded-2xl border border-gray-100/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150 + 1000}ms` }}
              >
                {/* Organization logo placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* Organization name */}
                <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {org.name}
                </h4>
                
                {/* Partnership indicator */}
                <div className="text-xs text-gray-500 font-medium">
                  Trusted Partner
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Partnership Stats */}
          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-gray-600 font-medium">Years of Partnership</div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <div className="text-gray-600 font-medium">International Organizations</div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}