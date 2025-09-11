import { Building2, Target, Award, Heart, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { coreValues, companyInfo } from "../data/landing-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-2xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm shadow-sm">
            <Building2 size={16} />
            Who We Are
            <Sparkles size={14} className="animate-pulse" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Pioneering{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            Since 2013
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since 2013, Kernel International Limited has been at the forefront of delivering 
            comprehensive consultancy, research, training, and technology solutions across diverse sectors 
            with unwavering commitment to excellence.
          </p>
        </div>

        {/* Company Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in-up animation-delay-300">
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-primary/20 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="text-white" size={20} />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
          </div>
          
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-green-500/20 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={20} />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">150+</div>
            <div className="text-sm text-gray-600 font-medium">Successful Projects</div>
          </div>
          
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-purple-500/20 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={20} />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">45+</div>
            <div className="text-sm text-gray-600 font-medium">Expert Professionals</div>
          </div>
          
          <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-orange-500/20 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="text-white" size={20} />
            </div>
            <div className="text-2xl font-bold text-orange-600 mb-1">5+</div>
            <div className="text-sm text-gray-600 font-medium">Countries Served</div>
          </div>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Our Story */}
          <div className="animate-fade-in-left">
            <div className="space-y-8">
              {/* Story Header */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Journey
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  From a single ownership entity established in <span className="font-semibold text-primary">{companyInfo.established}</span> to a
                  leading private limited company incorporated in <span className="font-semibold text-primary">{companyInfo.incorporated}</span>, KIL
                  has evolved into Bangladesh's most trusted partner for
                  government, non-government, and private sector organizations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Like the word <span className="font-semibold text-primary">"Kernel"</span> suggests, we are at the core of
                  management consultancy, providing essential solutions across
                  Training Management, IT, Architecture, Engineering,
                  Agriculture, and beyond.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="group bg-gradient-to-br from-white via-primary/5 to-blue-500/5 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Target className="text-white drop-shadow-sm" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      Our Mission
                    </h4>
                    <p className="text-primary font-semibold">
                      Institutional Framework of Excellence
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 text-8xl text-primary/20 font-serif leading-none">
                    "
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic pl-12 group-hover:text-gray-800 transition-colors duration-300">
                    {companyInfo.mission}
                  </p>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="group bg-gradient-to-br from-white via-blue-500/5 to-purple-500/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Heart className="text-white drop-shadow-sm" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      Our Vision
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      Sustainable Excellence & Growth
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 text-8xl text-blue-500/20 font-serif leading-none">
                    "
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic pl-12 group-hover:text-gray-800 transition-colors duration-300">
                    {companyInfo.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Values & Achievements */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              {/* Core Values */}
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                <div className="text-center mb-8">
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">
                    Core Values
                  </h4>
                  <p className="text-gray-600">What drives our excellence</p>
                </div>
                
                <div className="space-y-6">
                  {coreValues.map((value, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100/50 hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 150 + 600}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-br ${getValueGradient(value.color)} rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <value.icon
                            className="text-white drop-shadow-sm"
                            size={24}
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h5>
                          <p className="text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GO GREEN Motto */}
              <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-8 rounded-3xl border border-green-500/20 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 text-green-600 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Heart size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-xl">GO GREEN</span>
                  </div>
                  <p className="text-gray-700 font-medium text-lg">
                    {companyInfo.goGreenMotto}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function for value gradients
function getValueGradient(color: string) {
  const gradients = {
    rose: "from-rose-500 to-rose-600",
    green: "from-green-500 to-green-600",
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
  };
  
  return gradients[color as keyof typeof gradients] || "from-primary to-blue-600";
}