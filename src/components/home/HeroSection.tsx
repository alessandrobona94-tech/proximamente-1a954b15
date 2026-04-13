import { ScrollReveal } from "../ScrollReveal";

export function HeroSection() {
  return (
    <section className="px-5 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center" style={{ paddingTop: "7rem", paddingBottom: "3rem" }}>
      <div className="space-y-6 md:space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide" style={{ background: "#ffddb1", color: "#624000" }}>
          Rivarolo Canavese · APS
        </span>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight hero-title-anim">
          Cittadinanza attiva, <span className="italic" style={{ color: "#af2801" }}>insieme.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-lg leading-relaxed hero-subtitle-anim" style={{ color: "#5a413a" }}>
          Promuoviamo cittadinanza attiva tramite cultura, dialogo e benessere, per riscoprire il valore della partecipazione nel nostro territorio.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 md:pt-4 hero-btns-anim">
          <a className="px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-bold shadow-lg hover:opacity-90 transition-opacity pulse-cta min-h-[44px] flex items-center" href="#eventi" style={{ background: "#af2801", color: "white" }}>
            Scopri i prossimi eventi
          </a>
          <a className="px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-[#af2801]/5 transition-colors border-2 min-h-[44px] flex items-center" href="#unisciti" style={{ borderColor: "#af2801", color: "#af2801" }}>
            Unisciti a noi
          </a>
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-3 md:gap-4 hero-images-anim" style={{ height: "auto", minHeight: "300px" }}>
        <div className="space-y-3 md:space-y-4 pt-4 md:pt-8">
          <div className="rounded-lg overflow-hidden shadow-sm" style={{ height: "clamp(10rem, 25vw, 16rem)" }}>
            <img className="w-full h-full object-cover" alt="Il team di Proximamente APS durante un evento" src="/assets/foto-hero-nuova.jpg" />
          </div>
          <div className="p-4 md:p-6 rounded-lg" style={{ background: "#af2801", color: "white" }}>
            <span className="material-symbols-outlined text-3xl md:text-4xl mb-2 md:mb-4 block">volunteer_activism</span>
            <p className="italic text-lg md:text-2xl" style={{ fontFamily: "'Newsreader', serif" }}>Oltre 80 soci attivi sul territorio.</p>
          </div>
        </div>
        <div className="space-y-3 md:space-y-4">
          <div className="rounded-lg p-4 md:p-6 flex flex-col justify-end" style={{ background: "#fdb332", minHeight: "clamp(8rem, 18vw, 160px)" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(60,40,0,0.5)", marginBottom: "0.5rem" }}>La nostra missione</p>
            <h4 style={{ fontFamily: "'Newsreader',serif", fontSize: "clamp(1rem, 2vw, 1.4rem)", fontStyle: "italic", color: "#3c2800", lineHeight: 1.25, marginBottom: "0.5rem" }}>Cultura, dialogo e benessere per trasformare il Canavese.</h4>
            <a href="#eventi" style={{ fontSize: "0.8rem", fontWeight: 700, color: "#af2801", textDecoration: "none" }}>Scopri gli eventi →</a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm" style={{ height: "clamp(10rem, 28vw, 18rem)" }}>
            <img className="w-full h-full object-cover" alt="Cena Palestinese organizzata da ProXimaMenTe" src="/assets/cena-palestinese.jpg" style={{ objectPosition: "center 30%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
