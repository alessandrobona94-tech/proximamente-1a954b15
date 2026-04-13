import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroSection } from "@/components/home/HeroSection";
import { ChiSiamoSection } from "@/components/home/ChiSiamoSection";
import { CosaFacciamoSection } from "@/components/home/CosaFacciamoSection";
import { ManifestoTeaser } from "@/components/home/ManifestoTeaser";
import { EventiSection } from "@/components/home/EventiSection";
import { UniscitiSection } from "@/components/home/UniscitiSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ContattiSection } from "@/components/home/ContattiSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ProXimaMenTe APS | Cittadinanza Attiva" },
      { name: "description", content: "Proximamente APS è un'associazione di promozione sociale a Rivarolo Canavese. Promuoviamo cittadinanza attiva tramite cultura, dialogo e benessere nel Canavese." },
      { name: "keywords", content: "Proximamente APS, associazione Rivarolo Canavese, volontariato Canavese, cittadinanza attiva, cultura Canavese" },
      { property: "og:title", content: "Proximamente APS – Cittadinanza Attiva nel Canavese" },
      { property: "og:description", content: "Associazione di promozione sociale a Rivarolo Canavese. Cultura, dialogo e benessere per il Canavese." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <div className="organic-blob" style={{ top: "-10%", left: "-10%", width: 500, height: 500, background: "#ffdad2", borderRadius: "50%" }} />
      <div className="organic-blob" style={{ top: "20%", right: "-5%", width: 400, height: 400, background: "#ffddb1", borderRadius: "50%" }} />
      <main>
        <HeroSection />
        <ChiSiamoSection />
        <CosaFacciamoSection />
        <ManifestoTeaser />
        <EventiSection />
        <UniscitiSection />
        <NewsletterSection />
        <ContattiSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
