export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-xl font-bold text-primary mb-4">SecureVision</div>
            <p className="text-foreground/70">Advanced AI-powered security monitoring for every environment</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-foreground/60">
          <p>&copy; 2025 SecureVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
