import Affliates from "@/components/layout/Affliates";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Sectors from "@/components/layout/Sectors";

export default function Home() {
  return (
    <>
      <Hero />
      <Sectors />
      <Affliates />
      <Contact />
    </>
  );
}
