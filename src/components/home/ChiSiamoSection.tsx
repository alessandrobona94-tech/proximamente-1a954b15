import { ScrollReveal } from "../ScrollReveal";

export function ChiSiamoSection() {
  return (
    <section className="px-5 md:px-8 rounded-xl mx-2 md:mx-4 relative overflow-hidden" style={{ background: "#f5f3f0", paddingTop: "4rem", paddingBottom: "4rem" }} id="chi-siamo">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start gap-8 md:gap-20">
        {/* Images */}
        <ScrollReveal>
          <div className="grid gap-4 md:gap-8">
            <div className="grid grid-cols-2 gap-3 md:gap-4" style={{ height: "clamp(250px, 50vw, 500px)" }}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img alt="Stand Proximamente APS alla festa della pace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/foto-chisiamo-1.jpg" />
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg mt-6 md:mt-12">
                <img alt="Il direttivo di Proximamente APS" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/foto-chisiamo-2.jpg" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 md:p-4 rounded-lg border" style={{ background: "white", borderColor: "rgba(175,40,1,0.1)" }}>
                <h5 className="font-bold mb-1 text-sm md:text-base" style={{ fontFamily: "'Newsreader',serif", color: "#af2801" }}>Cultura &amp; Comunità</h5>
                <p className="text-xs" style={{ color: "#5a413a" }}>Spazi aperti alla creatività e al confronto collettivo.</p>
              </div>
              <div className="p-3 md:p-4 rounded-lg border" style={{ background: "white", borderColor: "rgba(175,40,1,0.1)" }}>
                <h5 className="font-bold mb-1 text-sm md:text-base" style={{ fontFamily: "'Newsreader',serif", color: "#af2801" }}>Inclusione &amp; Futuro</h5>
                <p className="text-xs" style={{ color: "#5a413a" }}>Sostenibilità e accesso universale senza barriere.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal>
          <div className="space-y-6 md:space-y-8 md:sticky md:top-32">
            <h2 className="text-3xl md:text-5xl italic" style={{ fontFamily: "'Newsreader',serif" }}>Un'associazione e un punto d'incontro</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#5a413a" }}>
              <p>Siamo nati con l'idea che il cambiamento parta dalla vicinanza. Proximamente non è solo un nome, ma una promessa: essere vicini alle persone, alle loro idee e ai bisogni di chi abita il Canavese.</p>
              <p>La nostra associazione di promozione sociale (APS), fondata nel 2024 con sede a Rivarolo Canavese, nasce dall'incontro tra persone che credono nel potere della cultura, del dialogo e del benessere come strumenti di trasformazione.</p>
              <p>Il nostro impegno si traduce in eventi culturali, laboratori, dibattiti e iniziative che mettono le persone — e il territorio che abitano — al centro.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-4">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "#af2801", fontFamily: "'Newsreader',serif" }}>80+</p>
                <p className="text-xs md:text-sm font-medium" style={{ color: "#5a413a" }}>Soci attivi</p>
              </div>
              <div style={{ width: 1, height: 40, background: "rgba(175,40,1,0.15)" }} />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "#af2801", fontFamily: "'Newsreader',serif" }}>15+</p>
                <p className="text-xs md:text-sm font-medium" style={{ color: "#5a413a" }}>Eventi realizzati</p>
              </div>
              <div style={{ width: 1, height: 40, background: "rgba(175,40,1,0.15)" }} />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "#af2801", fontFamily: "'Newsreader',serif" }}>2024</p>
                <p className="text-xs md:text-sm font-medium" style={{ color: "#5a413a" }}>Anno di fondazione</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
