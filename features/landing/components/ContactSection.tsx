import { Send, MessageCircle, User, Clock, ArrowRight, Sparkles } from "lucide-react";
import { contactInfo, managementTeam } from "../data/landing-data";

export function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <MessageCircle size={16} />
            Let's Connect
            <Sparkles size={14} className="animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project with us? Let's discuss how we can help you 
            achieve excellence and transform your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Information */}
          <div className="animate-fade-in-left">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-6 p-6 bg-gradient-to-r from-gray-50/80 to-white rounded-2xl border border-gray-100/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 150 + 200}ms` }}
                  >
                    <div className={`p-4 bg-gradient-to-br ${getContactGradient(index)} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <contact.icon className="text-white drop-shadow-sm" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {contact.content}
                      </p>
                    </div>
                    <ArrowRight 
                      size={18} 
                      className="text-gray-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 mt-1" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Management Team */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                Leadership Team
              </h4>
              
              <div className="space-y-4">
                {managementTeam.map((member, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-primary text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </p>
                        <p className="text-sm text-gray-600 font-medium">{member.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Project Type
                  </label>
                  <select className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white shadow-sm hover:shadow-md">
                    <option>Select a service type</option>
                    <option>Consultancy Services</option>
                    <option>Research & Development</option>
                    <option>Training Management</option>
                    <option>IT & Software Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white shadow-sm hover:shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none shadow-sm hover:shadow-md"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-5 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                {/* Response Time Indicator */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                  <Clock size={16} />
                  <span>Average response time: 2-4 hours</span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-800">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-3xl border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join 150+ satisfied clients who have trusted us with their most important projects. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 font-semibold">
                Schedule a Call
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function for contact gradients
function getContactGradient(index: number) {
  const gradients = [
    "from-primary to-blue-600",
    "from-green-500 to-emerald-600", 
    "from-purple-500 to-violet-600",
  ];
  
  return gradients[index] || gradients[0];
}