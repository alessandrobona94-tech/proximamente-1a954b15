import { ScrollReveal } from "../ScrollReveal";

const previewCards = [
  { icon: "bolt", title: "Energia", desc: "L'unità propulsiva che trasforma le idee in iniziative concrete per la comunità." },
  { icon: "diversity_3", title: "Antifascismo", desc: "Impegno costante contro ogni forma di discriminazione e intolleranza." },
  { icon: "eco", title: "Natura", desc: "Cura del territorio e del patrimonio nell'ottica della sostenibilità sociale." },
  { icon: "sentiment_very_satisfied", title: "Gioia", desc: "Connessione e realizzazione condivisa contro l'individualismo imperante." },
];

export function ManifestoTeaser() {
  return (
    <section className="rounded-xl mx-2 md:mx-4 overflow-hidden relative shadow-2xl py-12 md:py-24 mb-8 md:mb-16" style={{ background: "#fbf9f6" }} id="manifesto">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <ScrollReveal className="lg:w-1/2">
            <div className="space-y-6 md:space-y-10">
              <h2 className="text-4xl md:text-7xl leading-[1.1]" style={{ fontFamily: "'Newsreader',serif" }}>
                Il nostro Manifesto: <br /><span className="italic" style={{ color: "#af2801" }}>10 parole</span> per il cambiamento
              </h2>
              <p className="text-base md:text-xl leading-relaxed max-w-xl" style={{ color: "#5a413a" }}>
                Non siamo solo spettatori del tempo, ma costruttori attivi. Il nostro manifesto è la bussola che guida ogni nostra azione sul territorio.
              </p>
              <div className="pt-2 md:pt-4">
                <a className="inline-flex items-center gap-3 md:gap-4 group px-6 md:px-10 py-4 md:py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl min-h-[44px]" href="/manifesto" style={{ background: "#af2801", color: "white", textDecoration: "none" }}>
                  <span className="text-base md:text-xl font-bold">Leggi il Manifesto completo</span>
                  <span className="material-symbols-outlined text-xl md:text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <p className="mt-3 md:mt-4 text-sm" style={{ color: "#5a413a", opacity: 0.7 }}>10 parole, un progetto di cittadinanza attiva nel Canavese.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
            {previewCards.map((card) => (
              <ScrollReveal key={card.title}>
                <div className="p-5 md:p-8 backdrop-blur border rounded-lg hover:border-[#ffb4a2]/40 transition-colors group" style={{ background: "#f5f3f0", borderColor: "rgba(175,40,1,0.1)" }}>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#af2801] transition-colors" style={{ background: "rgba(175,40,1,0.1)" }}>
                    <span className="material-symbols-outlined group-hover:text-white" style={{ color: "#af2801" }}>{card.icon}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl italic mb-2 md:mb-3" style={{ fontFamily: "'Newsreader',serif" }}>{card.title}</h4>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#5a413a" }}>{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
