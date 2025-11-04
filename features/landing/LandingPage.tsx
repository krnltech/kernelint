"use client";

import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  ExpertiseSection,
  TechnicalCapabilitiesSection,
  ClientLogosSection,
  PartnersSection,
  ContactSection,
  Footer,
} from "./components";

export function LandingPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header scrollToContact={scrollToContact} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <TechnicalCapabilitiesSection />
      <ClientLogosSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
