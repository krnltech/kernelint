"use client";

import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  ProductsSection,
  ExpertiseSection,
  TechnicalCapabilitiesSection,
  ClientLogosSection,
  PartnersSection,
  ContactSection,
  Footer,
} from "./components";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header active="home" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ExpertiseSection />
      <TechnicalCapabilitiesSection />
      <ClientLogosSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
