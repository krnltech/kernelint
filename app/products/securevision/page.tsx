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
