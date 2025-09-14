import { Send, MessageCircle, User, Clock, ArrowRight, Sparkles } from "lucide-react";
import { contactInfo } from "../data/landing-data";

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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up mb-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                Contact Information
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group text-center p-6 bg-gradient-to-r from-gray-50/80 to-white rounded-2xl border border-gray-100/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 150 + 200}ms` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${getContactGradient(index)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <contact.icon className="text-white drop-shadow-sm" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                      {contact.content}
                    </p>
                  </div>
                ))}
              </div>
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