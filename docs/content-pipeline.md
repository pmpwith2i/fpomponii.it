# fpomponii.it Content Pipeline (TLDR -> Research -> MDX -> Publish)

Goal: trasformare gli insight della daily TLDR in articoli tecnici di alta qualità, SEO-oriented, con stile ingegneristico (preciso, matematico, spiegato).

## 0) Input quotidiano

Sorgente primaria: daily TLDR stream.

Per ogni item candidato raccogliere:
- topic
- why now (novità/evento trigger)
- impatto pratico per engineering leadership
- livello di maturità (hype vs production-ready)

Output: shortlist 3 topic/giorno.

## 1) Scoring e priorità

Assegna punteggio 1-5 su:
1. Technical depth potential
2. Strategic relevance (CTO/Staff audience)
3. SEO opportunity (query con intent informativo/decisionale)
4. Originality angle (opinione forte + framework operativo)

Formula semplice:

score = 0.35*depth + 0.30*strategic + 0.20*seo + 0.15*originality

Pubblica il topic con score più alto.

## 2) Research packet (obbligatorio)

Per ogni articolo creare un mini-dossier con 4 blocchi:

A) Math resources
- formal models
- paper/lecture note su robustezza, ottimizzazione, causalità o teoria rilevante

B) Computer science resources
- RFC/spec/protocol docs
- implementation reports, architecture notes, postmortem

C) Experts on X
- 5-10 esperti reali con track record sul topic
- 1-2 insight citabili (non superficiali)

D) Production signals
- benchmark reali
- failure mode osservati
- vincoli operativi (latency/cost/security)

Regola: niente articolo senza almeno 2 fonti forti per blocco A+B.

## 3) SEO brief prima della scrittura

Definire:
- Primary keyword
- 4-8 secondary keywords
- Search intent (informational / commercial investigation)
- Meta angle (perché questo articolo è diverso)
- Internal links candidati (pagine correlate del sito)

Title rule:
- chiaro, tecnico, con problema + outcome
- evitare clickbait

## 4) Template articolo MDX

Struttura minima:
1. Hook tecnico (problema reale)
2. Executive summary
3. Formal model (con LaTeX se utile)
4. Attack surface / architecture analysis
5. Design rules / checklist implementativa
6. Tradeoff (costi, limiti, failure cases)
7. Reading list (math + CS + X experts)
8. Conclusione con next action concreta

Voice rule (obbligatoria):
- Scrivere sempre in prima persona, in modo che il lettore percepisca chiaramente Federico come autore.
- Evitare stile impersonale o neutro da "report automatico".

## 5) Quality gate pre-publish

Checklist:
- accuratezza tecnica verificata
- almeno 1 sezione con modello formale quando appropriato
- zero claim non supportate
- leggibilità: paragrafi brevi + liste strutturate
- SEO: keyword naturale (no stuffing), heading gerarchici, title robusto
- stile coerente con voce Federico (tecnico, preciso, dettagliato)

## 6) Git workflow

1. Crea cartella post:
   content/blog/<slug>/index.mdx
2. Frontmatter:
   - title
   - date
   - draft: false
3. Lint/build locale
4. Commit atomico
5. Push su branch di deploy (attualmente master)

## 7) Retrospettiva settimanale

Ogni settimana:
- top post per impression/click/time-on-page
- topic che hanno performato
- gap di coverage (math-heavy / systems / AI infra)
- update del scoring model

---

## Quick operational playbook (daily)

1. Prendo 3 topic da TLDR
2. Score + scelgo 1 winner
3. Faccio research packet
4. Produco SEO brief
5. Scrivo MDX con struttura standard
6. Quality gate
7. Commit + push
8. Loggo learnings per migliorare il prossimo articolo
