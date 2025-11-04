import { companyInfo } from "../data/landing-data";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              Kernel International
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              KIL is a leading research, training and consulting service provider organization,
              delivering exceptional quality services across agriculture, IT, architecture,
              engineering, and beyond with 10+ years of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#expertise" className="text-gray-400 hover:text-white transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Dhaka, Bangladesh</p>
              <p>+8801762694455</p>
              <p>contact@kernelinternational.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Kernel International Limited. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Established {companyInfo.established} | Incorporated {companyInfo.incorporated}
          </p>
        </div>
      </div>
    </footer>
  );
}