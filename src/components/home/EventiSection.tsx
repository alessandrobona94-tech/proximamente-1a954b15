import { ScrollReveal } from "../ScrollReveal";

const nextEvent = {
  img: "locandina-resistenza-terrorismo.png",
  alt: "Resistenza e terrorismo - Presentazione libro di Eric Gobetti",
};

const archiveEvents = [
  { img: "locandina-umanita-sospesa.png", alt: "Umanità Sospesa", date: "26 Giugno 2025 · Castellamonte", title: "Umanità Sospesa", desc: "Convegno con MSF. Ex Scaricatore, Piazza Generale Romano." },
  { img: "locandina-inchiostro-2.png", alt: "La felicità è un atto politico", date: "30 Ottobre 2025 · Valperga", title: "La felicità è un atto politico · Giulia Blasi", desc: "Incontro con Giulia Blasi sulla felicità come atto politico." },
  { img: "locandina-rigenerazioni.jpg", alt: "RigenerAzioni", date: "22 Novembre 2025 · San Giorgio Canavese", title: "RigenerAzioni", desc: "Ri-generare gli spazi per il futuro. Teatro Belloc." },
  { img: "locandina-tesseramento-vinileria.png", alt: "Serata Tesseramento Vinileria", date: "16 Gennaio 2026 · Rivarolo", title: "Serata di Tesseramento · Vinileria", desc: "Vinyl Swap e tesseramento 2026. Via Farina 56." },
  { img: "locandina-donne-sotto-assedio.jpg", alt: "Donne Sotto Assedio", date: "13 Marzo 2026 · Rivarolo Canavese", title: "Donne Sotto Assedio", desc: "Con Martina Marchiò (MSF) e Roberta Lippi. Salone Comunale." },
  { img: "locandina-swap-party.jpg", alt: "Swap Party e donazione Sermig", date: "21 Marzo 2026 · Bairo", title: "Swap Party · Donazione Sermig", desc: "No fast fashion: scambia i tuoi capi, aperitivo con i vini di San Firmino." },
  { img: "LOCANDINA_inchiostro_ribelle.png", alt: "Inchiostro Ribelle", date: "Aprile 2026 · Rivarolo Canavese", title: "Inchiostro Ribelle", desc: "Rassegna di scrittura e parola ribelle." },
];

export function EventiSection() {
  return (
    <section id="eventi" className="px-5 md:px-8 max-w-7xl mx-auto py-12 md:py-24">
      {/* Prossimo evento */}
      <ScrollReveal>
        <div className="mb-8 md:mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#af2801", letterSpacing: "0.1em" }}>In arrivo</p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold" style={{ fontFamily: "'Newsreader',serif", color: "#1b1c1a" }}>
                Prossimo <span className="italic" style={{ color: "#af2801" }}>evento</span>
              </h2>
            </div>
            <a
              href="mailto:proximamenteaps@gmail.com"
              className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold transition-colors min-h-[44px] flex items-center"
              style={{ border: "1.5px solid rgba(175,40,1,0.3)", color: "#af2801", textDecoration: "none" }}
            >
              Proponi un evento
            </a>
          </div>

          <div className="max-w-[400px]">
            <a href={`/assets/${nextEvent.img}`} target="_blank" rel="noopener noreferrer" className="block">
              <div className="rounded-2xl overflow-hidden shadow-lg card-lift cursor-pointer" style={{ border: "1px solid rgba(175,40,1,0.08)" }}>
                <div className="overflow-hidden" style={{ height: "clamp(200px, 40vw, 400px)" }}>
                  <img src={`/assets/${nextEvent.img}`} alt={nextEvent.alt} className="w-full h-full object-cover object-top block" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Archivio */}
      <ScrollReveal>
        <div>
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Newsreader',serif" }}>Archivio <span className="italic" style={{ color: "#af2801" }}>eventi</span></h3>
            <div className="flex-1 h-px" style={{ background: "rgba(175,40,1,0.15)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {archiveEvents.map((evt) => (
              <a key={evt.img} href={`/assets/${evt.img}`} target="_blank" rel="noopener noreferrer" className="block" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="rounded-2xl overflow-hidden border bg-white card-lift cursor-pointer" style={{ borderColor: "rgba(175,40,1,0.08)" }}>
                  <div className="overflow-hidden relative" style={{ height: "200px" }}>
                    <img src={`/assets/${evt.img}`} alt={evt.alt} className="w-full h-full object-cover object-top block" style={{ filter: "grayscale(10%)" }} />
                    <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(27,28,26,0.72)", color: "white" }}>Concluso</div>
                  </div>
                  <div className="p-3.5 md:p-4">
                    <p className="text-[0.7rem] font-bold uppercase mb-1" style={{ color: "#5a413a", letterSpacing: "0.06em" }}>{evt.date}</p>
                    <h4 className="text-base font-bold mb-1 leading-tight" style={{ fontFamily: "'Newsreader',serif" }}>{evt.title}</h4>
                    <p className="text-sm leading-snug" style={{ color: "#5a413a" }}>{evt.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
