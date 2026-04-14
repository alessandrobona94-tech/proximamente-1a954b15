

## Piano: Integrazione Mailchimp Newsletter

### Modifica unica: `src/components/home/NewsletterSection.tsx`

Il form attuale mostra un `alert()` al submit. Lo trasformerò in un form che invia direttamente a Mailchimp.

**Cosa cambia:**

1. Il `<form>` diventa un form HTML standard con `method="post"`, `action` puntato a Mailchimp, e `target="_blank"`
2. L'input email riceve `name="EMAIL"` (richiesto da Mailchimp)
3. Viene aggiunto un campo honeypot nascosto per anti-spam: `b_dc663d3dcb9b8555c97b8631c_6ff6ef2139`
4. Rimosso il blocco hCaptcha (Mailchimp usa il suo sistema anti-bot)
5. Il design visivo resta identico

**Dati estratti dal codice embedded:**
- Action: `https://instagram.us20.list-manage.com/subscribe/post?u=dc663d3dcb9b8555c97b8631c&id=6ff6ef2139&f_id=00d1c3e1f0`
- Honeypot field name: `b_dc663d3dcb9b8555c97b8631c_6ff6ef2139`

**Comportamento:** al click su "Iscriviti", il browser invierà i dati a Mailchimp e aprirà la pagina di conferma in una nuova scheda.

