import { MapPin, Phone, Mail, Building2, Clock, Globe, Shield, Award, MessageCircle } from "lucide-react";
import { Footer, Header } from "../../features/landing/components";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
              <MessageCircle size={16} />
              Contact Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? We're here to help you achieve excellence 
              with our comprehensive multi-disciplinary solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Head Office */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Head Office</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">Kernel International Limited</p>
                <p>MK Center, 6th Floor, Block-G</p>
                <p>House # 27, Road # 14, Niketon</p>
                <p>Gulshan-1, Dhaka – 1212</p>
                <p>Bangladesh</p>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <p className="text-sm text-primary font-semibold">2,800 sq ft • Fully Equipped Office</p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Phone & Email</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900">Office Phone</p>
                    <p className="text-gray-700">+880 1348-061944</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">contact@kernelinternational.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-primary" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <p className="text-gray-700">www.kernelinternational.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-green-700 font-semibold">Available for Emergency Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Company Registration Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Registration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official registration and compliance information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 className="text-white" size={20} />
                </div>
                Legal Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Company Name</span>
                  <span className="font-semibold text-gray-900">KERNEL International Limited</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Registration No.</span>
                  <span className="font-semibold text-primary">C-130497/2016</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Established</span>
                  <span className="font-semibold text-gray-900">2013</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Incorporated</span>
                  <span className="font-semibold text-gray-900">2016</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Trade License</span>
                  <span className="font-semibold text-gray-900">05-53245</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                Tax Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">TAX ID</span>
                  <span className="font-semibold text-gray-900">631962879567</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">VAT Registration</span>
                  <span className="font-semibold text-gray-900">17041071346</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">TIN</span>
                  <span className="font-semibold text-gray-900">266179181775</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Tax Circle</span>
                  <span className="font-semibold text-gray-900">328, Zone 15, Dhaka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">International Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global collaborations and partnership agreements for enhanced service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amity University",
                location: "UP, India", 
                focus: "Technology Transfer & Capacity Building"
              },
              {
                name: "Udayana University",
                location: "Bali, Indonesia",
                focus: "Agricultural Technology & Training"
              },
              {
                name: "Sub-Institute of Agricultural Engineering",
                location: "Ho Chi Minh City, Vietnam",
                focus: "Postharvest Technology & Supply Chain"
              },
              {
                name: "Holland Door Cooperative",
                location: "Netherlands",
                focus: "Agribusiness & Study Programs"
              },
              {
                name: "National Resources Institute (NRI)",
                location: "University of Greenwich, UK",
                focus: "Agricultural Development & Training"
              },
              {
                name: "Kasetsart University",
                location: "Bangkok, Thailand",
                focus: "Agricultural Research & Extension"
              }
            ].map((partner, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{partner.location}</p>
                <p className="text-gray-600 text-sm">{partner.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Dhaka's business district with easy access to major transportation.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Directions</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-semibold">From Hazrat Shahjalal International Airport</p>
                      <p className="text-sm">25-30 minutes by car via Airport Road</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-semibold">From Dhaka Railway Station</p>
                      <p className="text-sm">45 minutes by car via Tejgaon-Gulshan Link Road</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={18} />
                    <div>
                      <p className="font-semibold">Nearby Landmarks</p>
                      <p className="text-sm">Close to Gulshan Circle 1, Gulshan Shopping Complex</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                  <p className="text-primary font-semibold text-sm">Parking available on-site</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-gray-600 font-semibold">Interactive Map</p>
                  <p className="text-gray-500 text-sm">MK Center, Gulshan-1, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm p-12 rounded-3xl border border-primary/20">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how we can help you achieve your goals with our 
              multi-disciplinary expertise and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+8801348061944" className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold inline-flex items-center gap-2">
                <Phone size={18} />
                Call Now: +880 1348-061944
              </a>
              <a href="mailto:contact@kernelinternational.com" className="border border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold inline-flex items-center gap-2">
                <Mail size={18} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}