import { Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { clientCategories } from "../data/landing-data";

export function ClientsSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-primary/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Users size={16} />
            Our Clients
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Government ministries, international organizations, and private sector clients 
            across multiple countries trust us for exceptional results and professional excellence.
          </p>
        </div>

        {/* Client Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {clientCategories.map((client, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 hover:border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${getClientGradient(client.color)} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <client.icon
                        className="text-white drop-shadow-sm"
                        size={36}
                      />
                    </div>
                    <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {client.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {client.description}
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 font-medium">Trusted Partner</span>
                  </div>

                  {/* Success Metrics */}
                  <div className="mt-6 pt-6 border-t border-gray-200/50">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">15+</div>
                        <div className="text-xs text-gray-500">Years Partnership</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">100%</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-lg animate-fade-in-up animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building long-term relationships through consistent excellence and reliable delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Success Metric 1 */}
            <div className="group text-center p-6 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600 font-medium">Client Retention Rate</div>
              <div className="text-sm text-gray-500 mt-2">Long-term partnerships</div>
            </div>

            {/* Success Metric 2 */}
            <div className="group text-center p-6 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl border border-green-500/10 hover:border-green-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
              <div className="text-sm text-gray-500 mt-2">Across all sectors</div>
            </div>

            {/* Success Metric 3 */}
            <div className="group text-center p-6 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-500 mt-2">Consistently excellent</div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-primary/20 font-serif leading-none mb-4">"</div>
              <blockquote className="text-xl italic text-gray-700 leading-relaxed mb-6">
                KIL has been our trusted partner for over a decade, consistently delivering 
                exceptional quality and innovative solutions that exceed our expectations.
              </blockquote>
              <div className="text-gray-600 font-medium">
                — International Development Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function for client gradients
function getClientGradient(color: string) {
  const gradients = {
    rose: "from-rose-500 to-rose-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
  };
  
  return gradients[color as keyof typeof gradients] || "from-primary to-blue-600";
}