import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Point of Sale &middot; Back Office &middot; Mobile &middot; Online Ordering
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            One Platform to Run the <span className="text-primary">Whole Restaurant</span>
          </h1>

          <p className="text-lg text-foreground/70 mb-10 text-balance">
            Kernel Restaurant Suite connects your till, your back office, your customer app and your online
            ordering site into a single system — so the menu, the stock and the numbers only ever live in
            one place.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition font-semibold group"
            >
              Request a Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#screens"
              className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-full hover:border-primary hover:text-primary transition font-semibold"
            >
              See It in Action
            </a>
          </div>

          {/* Hero Image */}
          <div className="mt-16 rounded-xl overflow-hidden border border-border bg-muted shadow-lg">
            <Image
              src="/products/restaurant/admin/dashboard-dark.webp"
              alt="Kernel Restaurant Suite admin dashboard"
              width={1600}
              height={1617}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
