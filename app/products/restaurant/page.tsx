import type { Metadata } from "next"
import { Header } from "@/features/restaurant/components/header"
import { Hero } from "@/features/restaurant/components/hero"
import { PlatformOverview } from "@/features/restaurant/components/platform-overview"
import { Features } from "@/features/restaurant/components/features"
import { ScreenshotShowcase } from "@/features/restaurant/components/screenshot-showcase"
import { BackOffice } from "@/features/restaurant/components/back-office"
import { Promotions } from "@/features/restaurant/components/promotions"
import { StaffAndRoles } from "@/features/restaurant/components/staff-and-roles"
import { Stats } from "@/features/restaurant/components/stats"
import { UseCases } from "@/features/restaurant/components/use-cases"
import { CTA } from "@/features/restaurant/components/cta"
import { Footer } from "@/features/restaurant/components/footer"

export const metadata: Metadata = {
  title: "Kernel Restaurant Suite | POS, Back Office, Mobile & Online Ordering",
  description:
    "A complete restaurant management platform from Kernel International Limited: point of sale, admin back office, iOS and Android customer app, and online ordering — with inventory, multi-branch reporting and promotions built in.",
  openGraph: {
    title: "Kernel Restaurant Suite | Complete Restaurant Management Platform",
    description:
      "Point of sale, back office, mobile app and online ordering in one connected system, with inventory, multi-branch reporting and promotions built in.",
    images: ["/products/restaurant/admin/dashboard-dark.webp"],
  },
}

export default function RestaurantPage() {
  return (
    <main>
      <Header />
      <Hero />
      <PlatformOverview />
      <Features />
      <ScreenshotShowcase />
      <BackOffice />
      <Promotions />
      <StaffAndRoles />
      <Stats />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  )
}
