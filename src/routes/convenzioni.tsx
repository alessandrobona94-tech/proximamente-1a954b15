import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StickyMobileCTA } from "../components/StickyMobileCTA";
import { ScrollReveal } from "../components/ScrollReveal";

export const Route = createFileRoute("/convenzioni")({
  component: ConvenzioniPage,
  head: () => ({
    meta: [
      { title: "Convenzioni 2026 – ProXimaMenTe APS" },
      { name: "description", content: "I vantaggi esclusivi della tessera ProXimaMenTe 2026: CSEN, Velodromo Francone, Deep Experience e Vinileria. Sport, natura, cultura e benessere nel Canavese." },
      { property: "og:title", content: "Convenzioni 2026 – ProXimaMenTe APS" },
      { property: "og:description", content: "Scopri i vantaggi della tessera ProXimaMenTe: sport, natura, cultura e musica nel Canavese." },
    ],
  }),
});

const cards = [
  {
    name: "CSEN",
    tagline: "Centro Sportivo Educativo Nazionale",
    logoUrl: "https://www.csen.it/images/logo/csen-logo.svg",
    vantaggio: "Agevolazioni per visite mediche sportive",
    desc: "Il CSEN è da decenni il punto di riferimento per chi pratica sport in modo consapevole e inclusivo. Grazie alla nostra convenzione, i soci ProXimaMenTe accedono a <strong>visite medico-sportive a costo ridotto</strong>.",
    tag: "Benessere · dal nostro Manifesto",
    tagVariant: "coral",
    vantaggioVariant: "coral",
    link: "https://www.csen.it/",
    linkText: "Visita il sito CSEN",
  },
  {
    name: "Velodromo Francone",
    tagline: "Sport e territorio nel Canavese",
    logoUrl: "https://www.velodromofrancone.it/wp-content/uploads/thegem-logos/logo_d9d0315e5a2b13596b656c8c80b47df8_1x.png",
    vantaggio: "1 ingresso in pista omaggio + 20% di sconto sui singoli ingressi",
    desc: "Il Velodromo Francone è uno spazio sportivo aperto a tutte e tutti. Crediamo nello <strong>sport come strumento di coesione sociale</strong>.",
    tag: "Benessere & Gioia · dal nostro Manifesto",
    tagVariant: "amber",
    vantaggioVariant: "amber",
    link: "https://www.velodromofrancone.it/",
    linkText: "Visita il sito del Velodromo",
  },
  {
    name: "Deep Experience ASD",
    tagline: "Outdoor, natura e avventura",
    logoUrl: "https://deepexperience.it/wp-content/uploads/2023/10/logo-def_NEW.png",
    vantaggio: "Agevolazioni su experience outdoor nel Canavese",
    desc: "Deep Experience ASD trasforma il territorio canavesano in un'aula a cielo aperto. <strong>Vivere la natura è un atto politico</strong> di cura del patrimonio comune.",
    tag: "Natura & Benessere · dal nostro Manifesto",
    tagVariant: "coral",
    vantaggioVariant: "coral",
    link: "https://deepexperience.it/",
    linkText: "Visita il sito Deep Experience",
  },
  {
    name: "Vinileria",
    tagline: "Wine & Records · Rivarolo Canavese",
    logoUrl: "https://www.vinileriarivarolo.com/wp-content/uploads/2020/05/logo-trasparente-1024x1024.png",
    logoDark: true,
    vantaggio: "20% di sconto sui piatti alla carta ogni martedì (esclusi bevande e menù degustazione)",
    desc: "Un locale fresco e inclusivo, dove gustare vini di qualità, partecipare a degustazioni e scoprire vinili selezionati. Un luogo che ci ha visti crescere e che continua a sostenerci con passione. La musica è dialogo senza parole, è memoria condivisa, è <strong>gioia collettiva</strong>.",
    tag: "Gioia & Dialogo · dal nostro Manifesto",
    tagVariant: "amber",
    vantaggioVariant: "amber",
    link: "https://www.vinileriarivarolo.com/",
    linkText: "Visita il sito della Vinileria",
  },
  {
    name: "AIDO San Francesco al Campo",
    tagline: "Patto d'Amicizia · Donazione organi",
    logoUrl: "",
    vantaggio: "Informazioni e schede per diventare donatore ai nostri eventi",
    desc: "Ai nostri eventi, chiedici informazioni o le schede per diventare donatore. Un piccolo gesto che può fare una <strong>grande differenza</strong>. Il patto d'amicizia con AIDO San Francesco al Campo rappresenta il nostro impegno concreto per la solidarietà e l'umanità.",
    tag: "Umanità & Energia · dal nostro Manifesto",
    tagVariant: "coral",
    vantaggioVariant: "coral",
    link: "https://www.aido.it/",
    linkText: "Scopri di più su AIDO",
  },
];

const steps = [
  { num: "1", title: "Tesserati", desc: "Compila il modulo di tesseramento online in pochi minuti." },
  { num: "2", title: "Ricevi la tessera", desc: "Ti arriverà la tessera numerata ProXimaMenTe 2026." },
  { num: "3", title: "Usa i vantaggi", desc: "Mostra la tessera ai partner e accedi alle convenzioni." },
];

function ConvenzioniPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#1b1c1a", padding: "clamp(100px,18vw,120px) 5vw 60px" }}>
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "#af2801", opacity: 0.06, top: -150, right: -100 }} />
        <div className="absolute w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: "#fdb332", opacity: 0.05, bottom: -80, left: "8%" }} />
        <div className="max-w-[700px] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6" style={{ background: "rgba(175,40,1,0.18)", color: "#ffb4a2", border: "1px solid rgba(175,40,1,0.28)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#af2801" }} />
            Tessera 2026 · Vantaggi esclusivi
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[1.06] tracking-tight mb-5" style={{ fontFamily: "'Newsreader',serif", color: "white", letterSpacing: "-0.03em" }}>
            Essere soci<br /><em style={{ color: "#ffb4a2" }}>conviene davvero.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-[580px]" style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.8 }}>
            La tessera ProXimaMenTe non è solo un simbolo di appartenenza: è la chiave per accedere a una rete di partner locali che condividono i nostri valori.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-20 px-5 md:px-[5vw]" style={{ background: "white" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "#5a413a", lineHeight: 1.85 }}>
            Nel nostro Manifesto scriviamo che il <strong style={{ color: "#1b1c1a" }}>Benessere</strong> non è solo assenza di malattia, ma una condizione di equilibrio individuale e collettivo. Che la <strong style={{ color: "#1b1c1a" }}>Natura</strong> è un atto politico di cura del territorio. Che la <strong style={{ color: "#1b1c1a" }}>Gioia</strong> si realizza nella condivisione e nella comunità.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#5a413a", lineHeight: 1.85 }}>
            Per questo le convenzioni che abbiamo scelto non sono semplici sconti commerciali: sono <strong style={{ color: "#1b1c1a" }}>alleanze con realtà del Canavese</strong> che camminano nella stessa direzione.
          </p>
          <blockquote className="border-l-4 p-4 md:p-6 rounded-r-xl text-base md:text-lg italic leading-relaxed" style={{ borderColor: "#af2801", background: "#f5f3f0", fontFamily: "'Newsreader',serif", color: "#1b1c1a" }}>
            "Promuoviamo lo sport come strumento di inclusione e coesione sociale, riconoscendo il suo valore educativo e terapeutico per tutte le età."
            <cite className="block mt-2 text-xs font-semibold not-italic" style={{ color: "#af2801", fontFamily: "'Be Vietnam Pro',sans-serif" }}>— dal Manifesto di ProXimaMenTe, <em>Benessere</em></cite>
          </blockquote>
        </div>
      </section>

      {/* CTA Tessera */}
      <div className="text-center py-10 md:py-12 px-5 md:px-[5vw]" style={{ background: "#af2801" }}>
        <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "'Newsreader',serif", color: "white" }}>🌟 Tessera ProXimaMenTe 2026</h2>
        <p className="text-sm md:text-base max-w-[520px] mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }}>Diventa socio e accedi immediatamente a tutti i vantaggi.</p>
        <a href="https://docs.google.com/forms/d/1HbzfMYDhiGR4uB10tASxELkjv7biyipcS0WEFqY5uVo/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 rounded-full font-bold text-base transition-all hover:translate-y-[-1px] min-h-[44px]" style={{ background: "white", color: "#af2801", textDecoration: "none" }}>
          Tesserati ora →
        </a>
      </div>

      {/* Cards */}
      <section className="py-12 md:py-20 px-5 md:px-[5vw]" style={{ background: "#f5f3f0" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#af2801", letterSpacing: "0.1em" }}>Le convenzioni 2026</p>
        <h2 className="text-[clamp(1.6rem,3vw,2.7rem)] font-bold tracking-tight mb-3" style={{ fontFamily: "'Newsreader',serif", color: "#1b1c1a" }}>
          I nostri partner,<br /><em style={{ color: "#af2801" }}>cinque buone ragioni</em>
        </h2>
        <p className="text-sm md:text-base mb-8 md:mb-12 max-w-[560px]" style={{ color: "#5a413a", lineHeight: 1.7 }}>
          Enti e associazioni del Canavese selezionati perché i loro valori rispecchiano i nostri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((card) => (
            <ScrollReveal key={card.name}>
              <div className="bg-white rounded-[20px] overflow-hidden border flex flex-col card-lift" style={{ borderColor: "rgba(175,40,1,0.07)" }}>
                <div className="p-4 md:p-6 pb-3 md:pb-4 border-b flex items-center gap-4" style={{ borderColor: "rgba(175,40,1,0.07)" }}>
                  <div className="w-16 md:w-20 h-12 md:h-16 flex items-center justify-center flex-shrink-0 rounded-xl p-2 overflow-hidden" style={{ background: card.logoDark ? "#1a1a1a" : "#f5f3f0" }}>
                    <img
                      src={card.logoUrl}
                      alt={card.name}
                      className="max-w-full max-h-full object-contain block"
                      style={card.logoDark ? { filter: "invert(1) brightness(2)" } : undefined}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: "'Newsreader',serif", color: "#1b1c1a" }}>{card.name}</h3>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#5a413a", opacity: 0.75 }}>{card.tagline}</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-xl border" style={{ background: card.vantaggioVariant === "amber" ? "#fffaf0" : "#fff8f6", borderColor: card.vantaggioVariant === "amber" ? "rgba(253,179,50,0.2)" : "rgba(175,40,1,0.12)" }}>
                    <p className="text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-wide mb-1" style={{ color: card.vantaggioVariant === "amber" ? "#7a5200" : "#af2801", letterSpacing: "0.08em" }}>Vantaggio tessera</p>
                    <p className="text-sm md:text-base font-semibold" style={{ color: "#1b1c1a" }}>{card.vantaggio}</p>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#5a413a", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: card.desc }} />
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border w-fit" style={{ color: card.tagVariant === "amber" ? "#7a5200" : "#af2801", background: card.tagVariant === "amber" ? "#fffaf0" : "#fff8f6", borderColor: card.tagVariant === "amber" ? "rgba(253,179,50,0.2)" : "rgba(175,40,1,0.15)" }}>
                    ◆ {card.tag}
                  </span>
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto pt-2 transition-all hover:gap-3 min-h-[44px]" style={{ color: "#af2801", textDecoration: "none" }}>
                    {card.linkText} →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-20 px-5 md:px-[5vw]" style={{ background: "white" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#af2801" }}>Come funziona</p>
        <h2 className="text-[clamp(1.6rem,3vw,2.7rem)] font-bold mb-8 md:mb-10" style={{ fontFamily: "'Newsreader',serif" }}>
          Tre passaggi, <em style={{ color: "#af2801" }}>zero burocrazia</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <ScrollReveal key={s.num}>
              <div className="text-center p-6 md:p-7">
                <div className="w-12 h-12 md:w-13 md:h-13 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5 text-lg md:text-xl font-bold" style={{ background: "#af2801", color: "white", fontFamily: "'Newsreader',serif" }}>{s.num}</div>
                <h4 className="text-base font-bold mb-2">{s.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#5a413a" }}>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </>
  );
}
