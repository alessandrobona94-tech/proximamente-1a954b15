import { ScrollReveal } from "../ScrollReveal";

export function UniscitiSection() {
  return (
    <section className="text-center px-5 md:px-8 relative overflow-hidden py-12 md:py-24" style={{ background: "#fbf9f6" }} id="unisciti">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: "'Newsreader',serif" }}>
            Diventa protagonista del <span className="italic" style={{ color: "#af2801" }}>cambiamento</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-xl text-left max-w-lg mx-auto" style={{ color: "#5a413a" }}>
            {["Partecipa gratuitamente a tutti gli eventi.", "Sostieni attivamente i progetti sul territorio.", "Entra a far parte di una rete di persone creative e attive."].map((text) => (
              <div key={text} className="flex gap-3 md:gap-4 items-start">
                <span className="material-symbols-outlined text-xl md:text-2xl flex-shrink-0 mt-0.5" style={{ color: "#af2801" }}>check_circle</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="pt-4 md:pt-8">
            <a
              href="https://docs.google.com/forms/d/1HbzfMYDhiGR4uB10tASxELkjv7biyipcS0WEFqY5uVo/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-2xl font-bold shadow-xl hover:scale-105 transition-transform active:scale-100 min-h-[44px]"
              style={{ background: "#af2801", color: "white", textDecoration: "none" }}
            >
              Compila il modulo di tesseramento
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
