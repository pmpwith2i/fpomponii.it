# Article Starter (operativo)

Questo starter serve a passare da un topic TLDR a una bozza MDX pronta in modo consistente.

## Input richiesti

- Topic TLDR selezionato
- Primary keyword
- 4-8 secondary keywords
- Audience target (default: engineer/CTO)
- Angle editoriale (es. security-first, systems-first, math-first)

## Output attesi

1. Slug suggerito
2. Titolo SEO tecnico
3. Frontmatter MDX
4. Outline completo (8 sezioni standard)
5. Lista fonti minime (Math/CS/X experts)

## Prompt base da usare

"""
Scrivi una bozza articolo per il mio blog tecnico.

Vincoli obbligatori:
- Prima persona singolare: deve sembrare scritto da me.
- Stile tecnico, preciso, dettagliato, esplicativo.
- Inserisci almeno una sezione con modello formale e formule in LaTeX.
- Includi reading list separata: Math resources, Computer Science resources, X experts.
- Evita claim non verificabili e frasi vaghe.

Dati:
- Topic: <topic>
- Primary keyword: <primary_keyword>
- Secondary keywords: <kw2, kw3, ...>
- Audience: <audience>
- Angle: <angle>

Output richiesto:
1) slug
2) titolo
3) frontmatter MDX
4) articolo completo pronto da salvare in content/blog/<slug>/index.mdx
"""

## Checklist rapida prima del publish

- [ ] Prima persona coerente in tutto il testo
- [ ] Formula/e LaTeX renderizzabili
- [ ] Sezioni 1..8 complete
- [ ] Fonti forti (>=2 math, >=2 CS)
- [ ] Keyword integrate naturalmente
- [ ] `draft: false` solo dopo revisione tecnica
