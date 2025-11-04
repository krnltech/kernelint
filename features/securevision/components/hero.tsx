import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Advanced AI-Powered <span className="text-primary">Security Monitoring</span>
          </h1>

          <p className="text-lg text-foreground/70 mb-12 text-balance">
            Real-time computer vision surveillance for homes, shops, markets, offices, and industrial facilities. Detect
            threats instantly with cutting-edge AI technology.
          </p>

          {/* Hero Image Placeholder */}
          <div className="mt-12 rounded-xl overflow-hidden border border-border bg-muted shadow-lg">
            <Image src="/security-camera-surveillance-ai-monitoring-dashboa.jpg" alt="SecureVision Dashboard" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
