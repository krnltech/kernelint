import type { Metadata } from "next"
import { Header } from "@/features/securevision/components/header"
import { Hero } from "@/features/securevision/components/hero"
import { HowItWorks } from "@/features/securevision/components/how-it-works"
import { Features } from "@/features/securevision/components/features"
import { KeyCapabilities } from "@/features/securevision/components/key-capabilities"
import { KeyApplications } from "@/features/securevision/components/key-applications"
import { UseCases } from "@/features/securevision/components/use-cases"
import { Stats } from "@/features/securevision/components/stats"
import { Testimonials } from "@/features/securevision/components/testimonials"
import { CTA } from "@/features/securevision/components/cta"
import { Footer } from "@/features/securevision/components/footer"

export const metadata: Metadata = {
  title: "SecureVision | AI-Powered Security Monitoring",
  description:
    "Real-time computer vision surveillance from Kernel International Limited for homes, shops, markets, offices and industrial facilities — with object and behaviour recognition, proactive alerts and intelligent analytics.",
  openGraph: {
    title: "SecureVision | AI-Powered Security Monitoring",
    description:
      "Real-time computer vision surveillance with object and behaviour recognition, proactive alerts and intelligent analytics.",
    images: ["/security-camera-surveillance-ai-monitoring-dashboa.jpg"],
  },
}

export default function SecureVisionPage() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <KeyCapabilities />
      <KeyApplications />
      <UseCases />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
