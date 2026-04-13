import { ScrollReveal } from "../ScrollReveal";

const activities = [
  { num: "01", title: "Laboratori", desc: "Workshop creativi, corsi di formazione e spazi di co-working per sviluppare nuove competenze." },
  { num: "02", title: "Eventi", desc: "Concerti, spettacoli teatrali e festival che animano le strade e i parchi della nostra città." },
  { num: "03", title: "Dibattiti", desc: "Conferenze e tavoli di lavoro per confrontarsi sui temi caldi della società contemporanea." },
  { num: "04", title: "Reti", desc: "Collaborazioni con istituzioni e altre associazioni per creare impatto su larga scala." },
  { num: "05", title: "Memoria", desc: "Progetti di recupero storico e culturale per non dimenticare le radici del Canavese." },
  { num: "06", title: "Rigenerazione", desc: "Interventi di decoro urbano e riappropriazione degli spazi pubblici dimenticati." },
];

export function CosaFacciamoSection() {
  return (
    <section className="px-5 md:px-8 max-w-7xl mx-auto py-16 md:py-24" id="cosa-facciamo">
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl" style={{ fontFamily: "'Newsreader',serif" }}>Trasformiamo le idee in azione</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {activities.map((a) => (
          <ScrollReveal key={a.num}>
            <div className="group p-6 md:p-10 rounded-lg relative overflow-hidden transition-all card-lift" style={{ background: "#efeeeb" }}>
              <span className="absolute top-[-10px] right-4 text-[80px] md:text-[120px] font-bold pointer-events-none" style={{ fontFamily: "'Newsreader',serif", color: "rgba(255,180,162,0.3)" }}>{a.num}</span>
              <h3 className="text-2xl md:text-3xl mb-3 md:mb-4 relative z-10" style={{ fontFamily: "'Newsreader',serif" }}>{a.title}</h3>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: "#5a413a" }}>{a.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-16 md:mt-32 p-8 md:p-20 rounded-xl text-center shadow-2xl relative overflow-hidden" style={{ background: "#af2801", color: "white" }}>
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-2xl md:text-5xl leading-tight italic" style={{ fontFamily: "'Newsreader',serif" }}>
              "La nostra visione è un territorio dove ogni individuo si senta partecipe, ascoltato e capace di generare valore per la collettività."
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover" src="/assets/foto-cena-palestinese.jpg" alt="Evento comunitario ProXimaMenTe" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
