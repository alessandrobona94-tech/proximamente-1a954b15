import { ScrollReveal } from "../ScrollReveal";

export function ContattiSection() {
  return (
    <section className="px-5 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 py-12 md:py-24" id="contatti">
      <ScrollReveal>
        <div>
          <h2 className="text-3xl md:text-5xl mb-6 md:mb-8" style={{ fontFamily: "'Newsreader',serif" }}>
            Parliamone <span className="italic" style={{ color: "#af2801" }}>di persona</span>
          </h2>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const nome = (form.querySelector('input[placeholder="Mario"]') as HTMLInputElement)?.value.trim();
              const cognome = (form.querySelector('input[placeholder="Rossi"]') as HTMLInputElement)?.value.trim();
              const email = (form.querySelector('input[type="email"]') as HTMLInputElement)?.value.trim();
              const messaggio = (form.querySelector("textarea") as HTMLTextAreaElement)?.value.trim();
              if (!nome || !email || !messaggio) { alert("Compila tutti i campi obbligatori."); return; }
              const subject = encodeURIComponent(`Messaggio dal sito - ${nome} ${cognome}`);
              const body = encodeURIComponent(`Nome: ${nome} ${cognome}\nEmail mittente: ${email}\n\nMessaggio:\n${messaggio}`);
              window.location.href = `mailto:proximamenteaps@gmail.com?subject=${subject}&body=${body}`;
              form.reset();
            }}
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase" style={{ color: "#5a413a" }}>Nome</label>
                <input className="w-full border-b-2 border-transparent focus:border-[#af2801] focus:ring-0 focus:outline-none rounded-t-md px-3 md:px-4 py-3 transition-all text-base" style={{ background: "#f5f3f0" }} placeholder="Mario" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase" style={{ color: "#5a413a" }}>Cognome</label>
                <input className="w-full border-b-2 border-transparent focus:border-[#af2801] focus:ring-0 focus:outline-none rounded-t-md px-3 md:px-4 py-3 transition-all text-base" style={{ background: "#f5f3f0" }} placeholder="Rossi" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase" style={{ color: "#5a413a" }}>Email</label>
              <input className="w-full border-b-2 border-transparent focus:border-[#af2801] focus:ring-0 focus:outline-none rounded-t-md px-3 md:px-4 py-3 transition-all text-base" style={{ background: "#f5f3f0" }} placeholder="mario.rossi@esempio.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase" style={{ color: "#5a413a" }}>Messaggio</label>
              <textarea className="w-full border-b-2 border-transparent focus:border-[#af2801] focus:ring-0 focus:outline-none rounded-t-md px-3 md:px-4 py-3 transition-all text-base" style={{ background: "#f5f3f0" }} placeholder="Raccontaci la tua idea..." rows={4} />
            </div>
            <button className="w-full py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-opacity min-h-[44px]" style={{ background: "#af2801", color: "white" }} type="submit">Invia messaggio</button>
          </form>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="space-y-8 md:space-y-12">
          <div className="p-6 md:p-12 rounded-lg space-y-6 md:space-y-10" style={{ background: "#f5f3f0" }}>
            <div className="flex gap-4 md:gap-6">
              <span className="material-symbols-outlined text-2xl md:text-3xl flex-shrink-0" style={{ color: "#af2801" }}>alternate_email</span>
              <div>
                <h4 className="font-bold text-base md:text-lg">Scrivici</h4>
                <p style={{ color: "#5a413a" }}>proximamenteaps@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <span className="material-symbols-outlined text-2xl md:text-3xl flex-shrink-0" style={{ color: "#af2801" }}>home_pin</span>
              <div>
                <h4 className="font-bold text-base md:text-lg">Vieni a trovarci</h4>
                <p style={{ color: "#5a413a" }}>Via Francesco d'Assisi 41,<br />10086 Rivarolo Canavese (TO)</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <span className="material-symbols-outlined text-2xl md:text-3xl flex-shrink-0" style={{ color: "#af2801" }}>camera</span>
              <div>
                <h4 className="font-bold text-base md:text-lg">Seguici su Instagram</h4>
                <a
                  href="https://www.instagram.com/proximamente_pxmt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mt-2 transition-opacity hover:opacity-85 min-h-[44px]"
                  style={{ background: "#af2801", color: "white", textDecoration: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  Seguici su Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden" style={{ height: "16rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.5!2d7.7247!3d45.3317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886c2c2c2c2c2c%3A0x0!2sVia+Francesco+d'Assisi+41%2C+10086+Rivarolo+Canavese+TO!5e0!3m2!1sit!2sit!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mappa sede ProXimaMenTe" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
