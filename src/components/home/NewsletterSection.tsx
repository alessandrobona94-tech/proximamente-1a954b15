export function NewsletterSection() {
  return (
    <section className="px-5 md:px-8 relative overflow-hidden w-full py-12 md:py-24" style={{ background: "#E8502A" }}>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-black/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <span className="inline-block font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>Newsletter Comunità</span>
            <h2 className="text-3xl md:text-8xl leading-tight" style={{ fontFamily: "'Newsreader',serif", color: "white" }}>
              Resta in <span className="italic opacity-90">contatto</span>
            </h2>
            <p className="text-base md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
              Entra nel cuore delle nostre attività. Ricevi storie, inviti esclusivi e aggiornamenti sui progetti che stanno trasformando il Canavese.
            </p>
          </div>

          {/* Form */}
          <form
            className="w-full max-w-3xl flex flex-col gap-3 md:gap-0 md:flex-row md:items-stretch p-2 md:p-3 rounded-2xl md:rounded-full backdrop-blur-sm border"
            style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
            id="mailchimp-form"
            onSubmit={(e) => {
              e.preventDefault();
              // Newsletter form — calls Netlify function on the original site
              alert("Newsletter subscription è gestita tramite Netlify Functions sul sito originale.");
            }}
          >
            <div className="flex-grow relative">
              <input
                className="w-full bg-transparent border-none focus:ring-0 focus:outline-none pl-5 md:pl-6 pr-4 md:pr-6 py-4 md:py-6 text-base md:text-xl rounded-full"
                style={{ color: "white" }}
                placeholder="La tua email..."
                required
                type="email"
                id="mc-email"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 px-2 md:px-0">
              <div className="h-captcha" data-sitekey="0fc257cc-314e-459e-8e78-a578158a143e" data-theme="dark" data-size="compact" />
              <button
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-6 rounded-full font-bold text-base md:text-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95 min-h-[44px]"
                type="submit"
                style={{ background: "white", color: "#E8502A" }}
              >
                <span>Iscriviti</span>
                <span className="material-symbols-outlined text-xl md:text-2xl">send</span>
              </button>
            </div>
          </form>
          <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.6)" }}>Rispettiamo la tua privacy. Niente spam, solo bellezza e partecipazione.</p>
        </div>
      </div>
    </section>
  );
}
