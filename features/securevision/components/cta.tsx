import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Secure Your Environment?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses protecting what matters most with advanced AI security
        </p>
      
      </div>
    </section>
  )
}
