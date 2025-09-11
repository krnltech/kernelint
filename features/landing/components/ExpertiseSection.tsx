import { CheckCircle, Star, TrendingUp, Award } from "lucide-react";
import { expertiseCategories } from "../data/landing-data";

export function ExpertiseSection() {
  return (
    <section 
      id="expertise" 
      className="py-28 bg-gradient-to-br from-gray-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star size={16} />
            Domain Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Specialized
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"> Knowledge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep expertise and proven capabilities across multiple industries, 
            delivering innovative solutions with unmatched professional excellence.
          </p>
        </div>

        {/* Expertise Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertiseCategories.map((category, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200/50 p-8 rounded-3xl hover:border-primary/20 transition-all duration-700 transform hover:-translate-y-2 h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header with icon and title */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${getCategoryGradient(index)} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <category.icon className="text-white drop-shadow-sm" size={32} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">Expert Level</span>
                      </div>
                    </div>
                  </div>

                  {/* Expertise items */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group/item flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100/50 hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${(index * 150) + (itemIndex * 50)}ms` }}
                      >
                        <div className="relative mt-0.5">
                          <CheckCircle
                            className="text-primary group-hover/item:scale-110 transition-transform duration-300"
                            size={18}
                          />
                          <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover/item:scale-150 transition-transform duration-300 opacity-0 group-hover/item:opacity-100"></div>
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-700 font-medium group-hover/item:text-primary transition-colors duration-300 block leading-relaxed">
                            {item}
                          </span>
                        </div>
                        <TrendingUp 
                          size={14} 
                          className="text-gray-400 group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all duration-300 mt-0.5" 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Category stats */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award size={14} />
                        <span>Certified Expertise</span>
                      </div>
                      <div className="text-primary font-semibold">
                        {category.items.length}+ Specializations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom achievements section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600 font-medium">Successful Projects</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">45+</div>
                <div className="text-gray-600 font-medium">Expert Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get category gradients
function getCategoryGradient(index: number) {
  const gradients = [
    "from-primary via-primary/90 to-primary/80",
    "from-blue-500 via-blue-600 to-blue-700",
    "from-purple-500 via-purple-600 to-purple-700",
  ];
  
  return gradients[index] || gradients[0];
}