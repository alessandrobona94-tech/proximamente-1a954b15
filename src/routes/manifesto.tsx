import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StickyMobileCTA } from "../components/StickyMobileCTA";

export const Route = createFileRoute("/manifesto")({
  component: ManifestoPage,
  head: () => ({
    meta: [
      { title: "Il Manifesto – Proximamente APS" },
      { name: "description", content: "Il manifesto di Proximamente APS: 10 parole chiave per un progetto di cittadinanza attiva nel Canavese." },
      { property: "og:title", content: "Manifesto di ProximaMente – Agire per una Cittadinanza Attiva" },
      { property: "og:description", content: "10 parole per il cambiamento: Energia, Memoria, Antifascismo, Dialogo, Umanità, Natura, Benessere, Politica, Gioia, Femminismo." },
    ],
  }),
});

const parole = [
  { id: "energia", num: "01", title: "Energia", text: "Per noi Energia è l'unità propulsiva di pensiero-parola-azione, l'atto di un sapere trasformativo capace di tradurre le idee in prassi attraverso opportunità di ascolto, dialogo e confronto. La nostra azione politica si fonda sulla vitalità delle idee che, attraverso il confronto e l'ascolto reciproco, si trasformano in <strong>iniziative concrete per la comunità</strong>. L'energia è il motore che ci spinge a partecipare attivamente e a tradurre le nostre visioni in realtà tangibili, mobilitando risorse e persone per il bene comune." },
  { id: "memoria", num: "02", title: "Memoria", text: "Il passato è fonte di sapere e di consapevolezza; la conoscenza delle radici ci guida nel riconoscimento delle responsabilità generazionali e ci consente perciò di interrogare il presente e costruire il futuro. Riconosciamo l'importanza di una <strong>memoria storica e culturale condivisa</strong> come base per la costruzione di una cittadinanza consapevole. Il nostro impegno politico è radicato nella comprensione del passato, che ci permette di affrontare le sfide del presente con responsabilità e di progettare un futuro più equo e inclusivo." },
  { id: "antifascismo", num: "03", title: "Antifascismo", text: "A conferma del principio democratico e antifascista della nostra Costituzione, siamo consci che il fascismo non si riduca soltanto a fenomeno storicamente connotato, ma che insista in ogni epoca. L'antifascismo per noi non è solo un riferimento storico, ma un <strong>impegno costante contro ogni forma di discriminazione, intolleranza e autoritarismo</strong>. Questo principio guida la nostra azione politica nel promuovere una società aperta, libera e rispettosa dei diritti di tutte e tutti, garantendo la partecipazione democratica come antidoto a ogni deriva antidemocratica." },
  { id: "dialogo", num: "04", title: "Dialogo", text: "Incentiviamo lo scambio, il confronto e la diversità, crediamo nel potere arricchente delle opinioni diverse e irriducibili, e tuteliamo la libertà di pensiero e di parola in uno spazio di rispetto, amore e sostegno. Il dialogo è il fulcro della nostra proposta politica, un <strong>processo inclusivo che permette alle diverse voci della comunità</strong> di esprimersi e confrontarsi in un ambiente di rispetto reciproco. Attraverso il dialogo costruiamo ponti, superiamo le divisioni e troviamo soluzioni condivise, valorizzando la ricchezza che emerge dalla pluralità di idee." },
  { id: "umanita", num: "05", title: "Umanità", text: "Riconosciamo il bisogno fondamentale di umanità, specialmente in contesti di gravi violazioni dei diritti umani, come la situazione in Palestina. Promuoviamo attivamente la pace e la cessazione di ogni forma di violenza e oppressione. La diversità è intesa come <strong>punto di forza e di crescita della comunità</strong>; per questo motivo promuoviamo l'esercizio del rispetto e dell'equità nella forma della parità – di genere, di classe, di etnia, di confessione, di orientamento sessuale, di provenienza geografica, di appartenenza culturale, ecc., ripudiando gli atteggiamenti discriminatori, antidemocratici e anti-umanitari. L'umanità è il tessuto della nostra comunità e il motore della nostra azione politica. Promuoviamo attivamente l'inclusione di ogni individuo e gruppo, combattendo ogni forma di discriminazione e lavorando per una società in cui le differenze siano celebrate come elementi di arricchimento collettivo, garantendo pari opportunità e rappresentanza a tutte e tutti." },
  { id: "natura", num: "06", title: "Natura", text: "Promuoviamo il rispetto e la cura del territorio nell'ottica della sostenibilità ambientale e sociale; crediamo perciò che la tutela del patrimonio storico, culturale e ambientale possa alimentare un concetto di appartenenza che dialoga con il progresso scientifico (quando risponde a principi non capitalistici) e, soprattutto, con l'inclusione sociale. La <strong>cura del territorio è un atto politico fondamentale</strong> per la nostra associazione. Ci impegniamo a promuovere pratiche di sostenibilità ambientale e sociale, valorizzando il patrimonio culturale e paesaggistico locale. La nostra visione include la partecipazione attiva dei cittadini nella gestione del territorio, garantendo che le decisioni sul suo futuro siano prese con una prospettiva di lungo termine e nel rispetto delle esigenze di tutte e tutti." },
  { id: "benessere", num: "07", title: "Benessere", text: "La nostra idea di benessere si fonda sull'empatia, sulla solidarietà e sulla progettualità condivisa; riconosciamo perciò la necessità di promuovere e tutelare il benessere fisico e la crescita personale, in particolare attraverso lo sport - quale strumento educativo, terapeutico e di coesione sociale - e l'attenzione alla salute mentale (città a misura d'uomo – vivere spazi pubblici e collettivi). Il <strong>benessere non è solo assenza di malattia</strong>, ma una condizione di equilibrio individuale e collettivo. La nostra proposta politica mira a creare una \"città a misura d'uomo\", dove spazi pubblici e servizi favoriscano la salute mentale e fisica, l'autodeterminazione e la crescita personale. Promuoviamo lo sport come strumento di inclusione e coesione sociale, riconoscendo il suo valore educativo e terapeutico per tutte le età." },
  { id: "politica", num: "08", title: "Politica", text: "Avere cura della polis, cioè della città e del territorio in cui si vive e delle persone che lo abitano. Per ProximaMente, la politica si traduce in un <strong>impegno concreto che mira a stimolare le nuove generazioni</strong> alla partecipazione attiva alla vita della comunità, innescando il senso di responsabilità. Ci adoperiamo per creare spazi di confronto e dibattito su temi di attualità, informare attivamente la cittadinanza, attivare collaborazioni con enti e associazioni del territorio e intessere relazioni che rafforzino il legame con il luogo in cui operiamo. Inoltre, organizziamo manifestazioni, petizioni e azioni di sensibilizzazione per affrontare specifiche questioni politiche e promuovere costantemente la partecipazione civica." },
  { id: "gioia", num: "09", title: "Gioia", text: "Per noi la gioia è condivisione e dialogo. Crediamo nel potere dell'empatia e dell'ascolto, quindi nell'energia individuale che si realizza e fortifica nella dimensione del gruppo e della comunità. Contro l'individualismo noi cerchiamo la solidarietà, alla chiusura preferiamo l'apertura, all'angoscia la <strong>gioia</strong>! La gioia, intesa come stato di connessione e realizzazione condivisa, è un principio guida della nostra azione politica. Crediamo che una comunità felice sia una comunità che si relaziona, si ascolta e si sostiene reciprocamente. Promuoviamo eventi e iniziative che favoriscano l'incontro, la solidarietà e la celebrazione della vita comunitaria, contrastando l'isolamento e promuovendo l'apertura." },
  { id: "femminismo", num: "10", title: "Femminismo", text: "Il femminismo, per Proximamente, non è una contrapposizione tra i generi, ma la capacità e la volontà di <strong>adottare una prospettiva diversa sul mondo</strong>. È un profondo cambio di paradigma nel pensiero, nella parola e nell'azione, che si manifesta nel contrapporre alla competitività, alla violenza e all'individualismo, spesso tipici di una società patriarcale, i valori del lavoro di squadra, della condivisione e del dialogo. Promuoviamo un femminismo che è motore di equità e giustizia sociale per tutte e tutti, liberando ogni individuo da schemi e ruoli imposti, a favore di una piena autorealizzazione e del riconoscimento del valore intrinseco di ciascuno." },
];

const pills = ["Energia", "Memoria", "Antifascismo", "Dialogo", "Umanità", "Natura", "Benessere", "Politica", "Gioia", "Femminismo"];

function ManifestoPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".parola-block").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#1A1208", padding: "clamp(100px, 18vw, 140px) 5vw 60px" }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-6" style={{ background: "rgba(232,80,42,0.15)", color: "#F5856A", border: "1px solid rgba(232,80,42,0.3)" }}>
          Proximamente APS · Manifesto
        </div>
        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-none mb-6" style={{ fontFamily: "'Fraunces',serif", color: "white" }}>
          Agire per una<br /><em style={{ color: "#F5856A" }}>Cittadinanza Attiva</em>
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-[640px]" style={{ color: "rgba(255,255,255,0.75)" }}>
          ProximaMente nasce dalla volontà di contribuire alla vita sociale del Canavese, facendosi promotrice di occasioni che generino <strong>benessere individuale e collettivo</strong>, attraverso la tutela della persona nella sua interezza e tramite pratiche fondate sul sapere, sull'arte, sul movimento e sulla valorizzazione dei luoghi e del patrimonio culturale.
        </p>
      </section>

      {/* Parole strip */}
      <div className="overflow-x-auto" style={{ background: "#E8502A", padding: "1.25rem 5vw" }}>
        <div className="flex gap-3 md:gap-4 flex-wrap items-center">
          {pills.map((p) => (
            <a key={p} href={`#${p.toLowerCase().replace("à", "a")}`} className="font-bold text-sm whitespace-nowrap" style={{ fontFamily: "'Fraunces',serif", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              {p} <span className="ml-3 opacity-40">·</span>
            </a>
          ))}
        </div>
      </div>

      {/* Parole section */}
      <section className="px-5 md:px-[5vw] pb-16 md:pb-24" style={{ background: "#FAF8F5" }}>
        <div className="py-12 md:py-20 max-w-[760px]">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold mb-6" style={{ fontFamily: "'Fraunces',serif" }}>
            La base del nostro<br /><em style={{ color: "#E8502A" }}>impegno comune</em>
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "#5a413a", lineHeight: 1.85 }}>
            L'obiettivo è valorizzare il ruolo della cultura nelle sue molteplici declinazioni per lo sviluppo locale e la crescita sociale, al fine di contrastare le disuguaglianze e le disparità, e sostenere la rigenerazione della città e del territorio. Lo scopo è agire un pensiero inclusivo, capace di generare innovazione e che potenzi lo scambio interculturale.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "#5a413a", lineHeight: 1.85 }}>
            L'identità di ProximaMente orbita attorno alle seguenti parole chiave, che costituiscono la base per un progetto politico e partitico di cittadinanza attiva:
          </p>
        </div>

        {parole.map((p) => (
          <div key={p.id} className="parola-block" id={p.id}>
            <div className="text-[2.5rem] md:text-[3.5rem] font-bold" style={{ fontFamily: "'Fraunces',serif", color: "#E8502A", opacity: 0.2 }}>{p.num}</div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ fontFamily: "'Fraunces',serif", color: "#1A1208" }}>
                <em style={{ color: "#E8502A" }}>{p.title}</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#5a413a", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: p.text }} />
            </div>
          </div>
        ))}
      </section>

      {/* CTA chiusura */}
      <section className="text-center py-16 md:py-20 px-5 md:px-[5vw]" style={{ background: "#1A1208" }}>
        <p className="text-sm md:text-base leading-relaxed max-w-[700px] mx-auto mb-8" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.85 }}>
          ProximaMente si impegna a trasformare queste parole chiave in azioni concrete, costruendo un percorso di cittadinanza attiva che possa generare un impatto positivo e duraturo sul Canavese, promuovendo una comunità più consapevole, inclusiva e gioiosa.
        </p>
        <h2 className="text-2xl md:text-[2.5rem] mb-6" style={{ fontFamily: "'Fraunces',serif", color: "white" }}>
          Trasformiamo queste parole in <em>azioni</em>
        </h2>
        <a href="/#unisciti" className="inline-block px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg min-h-[44px]" style={{ background: "#E8502A", color: "white", textDecoration: "none" }}>
          Unisciti a noi
        </a>
      </section>

      <Footer />
      <StickyMobileCTA />
    </>
  );
}
