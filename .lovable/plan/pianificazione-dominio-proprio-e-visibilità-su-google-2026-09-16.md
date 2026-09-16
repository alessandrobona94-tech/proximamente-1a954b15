# Pianificazione: dominio proprio e visibilità su Google

## Obiettivo
Collegare il dominio `proximamenteaps.it` (acquistato su Aruba) al sito Lovable e configurare tutto ciò che serve perché Google trovi e indicizzi il sito quando qualcuno cerca "Proxima" o "ProXimaMenTe APS".

## Cosa faremo

1. **Collegare il dominio `proximamenteaps.it` a Lovable**
   - Verificare la configurazione DNS richiesta da Lovable.
   - Fornirti i record DNS (A e TXT) da inserire nel pannello di Aruba.
   - Attendere la propagazione e verificare che il dominio risulti "Active".

2. **Aggiornare tutti i riferimenti SEO al nuovo dominio**
   - `public/robots.txt`: aggiornare il percorso della sitemap.
   - `public/sitemap.xml`: sostituire `proximamente.lovable.app` con `proximamenteaps.it`.
   - `src/routes/__root.tsx`: aggiornare `og:url`, JSON-LD Organization, logo e sameAs.
   - `src/routes/index.tsx`: aggiornare il canonical URL.
   - `src/routes/manifesto.tsx` e `src/routes/convenzioni.tsx`: aggiornare title, meta description, Open Graph e canonical.

3. **Configurare Google Search Console**
   - Collegare un account Google Search Console al progetto tramite il connettore Lovable.
   - Verificare la proprietà `https://proximamenteaps.it/` (metodo meta tag).
   - Aggiungere anche la proprietà `sc-domain:proximamenteaps.it` se utile per coprire eventuali sottodomini.

4. **Inviare la sitemap a Google**
   - Inviare `https://proximamenteaps.it/sitemap.xml` dopo la verifica della proprietà.

5. **Pubblicare il sito sul nuovo dominio**
   - Pubblicare la versione aggiornata.
   - Verificare che `https://proximamenteaps.it` risponda correttamente.
   - Testare il reindirizzamento da `www.proximamenteaps.it` e dal vecchio URL Lovable, se previsto.

6. **Richiedere l'indicizzazione della homepage**
   - Usare lo strumento "Controllo URL / Richiedi indicizzazione" in Search Console per la homepage.

## Cosa serve da parte tua

- Accesso al pannello DNS di Aruba per inserire i record che ti indicheremo.
- Un account Google (gmail o Google Workspace) con cui gestire Search Console.
- Conferma se vuoi che `www.proximamenteaps.it` sia il dominio principale o il dominio senza `www`.

## Note tecniche

- Lovable richiede tipicamente: record A per `@` e `www` verso l'IP fornito, più un record TXT `_lovable` per la verifica di proprietà.
- Se Aruba utilizza un proxy tipo Cloudflare, useremo la modalità proxy compatibile.
- Il sito usa TanStack Start con SSR attivo, quindi Google riceve HTML completo e indicizzabile.
- Iubenda è già integrato per cookie/privacy; questo soddisfa il consenso GDPR a livello frontend.

## Risultato atteso

Dopo la pubblicazione, il sito sarà raggiungibile all'indirizzo `https://proximamenteaps.it`. Google lo scoprirà tramite sitemap e, dopo qualche giorno (tipicamente 3-14 giorni), inizierà a mostrarlo nei risultati per ricerche come "Proxima", "ProXimaMenTe APS", "associazione Rivarolo Canavese".
