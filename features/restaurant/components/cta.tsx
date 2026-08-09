import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to See It on Your Menu?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          We will walk you through the till, the back office and the customer app with your own menu loaded.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full hover:bg-background/90 transition font-semibold group"
        >
          Request a Demo
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
