# Auditoría, situación y plan de elevación — `ivy-la-vie`

Generado 2026-11-03 por el pase de reglas del ecosistema (catálogo `_meta/reglas-oficiales.md`).
Todo lo afirmado aquí sale de datos reales: base de consolidación, gate oficial y git.

- **Categoría:** arte-musica · **Ruta:** `C:\Users\USER\belentani-ecosystem\arte-musica\ivy-la-vie`
- **Remoto:** https://github.com/belentani7/ivy-la-vie.git · **Rama:** main · **HEAD:** 203169c (docs(auditoria): gobernanza GH-01..10 verificada (GH-09/GH-10 OK) + estado y pla)
- **Lenguajes:** .jpg:157,.png:7,.webp:3,.md:2,.yml:1,.html:1 · **Commits (git real):** 19 · **Tamaño worktree:** 82.6 MB
- **Visibilidad GitHub:** private · **Homepage:** (ninguna) · **HTTP:** —
- **GitHub Pages:** no activo

## 1. Situación actual

- **Consolidación:** familia `proyecto-ivylavie` · acción survivor (estable).
- **Git:** 2 ficheros sin commitear · 5 commits sin push · 4 commits del pase de reglas (desde 2026-11-02).
- **Reglas web (gate oficial):** 1 HTML · **0 hallazgos** · 0 títulos duplicados.
- **Gobernanza GitHub (protocolo MS):** 11/11 reglas aplicadas · completo.
- **Secretos (triaje):** sin hallazgos.

## 2. Comandos para arreglar y elevar (ejecutar en este orden)

1. **Reglas web: ya cumplidas (0 hallazgos).** Barrera continua:
   ```powershell
   python C:\Users\USER\belentani-ecosystem\_meta\check_web_rules.py ivy-la-vie
   ```
2. **Limpiar 2 ficheros sin commitear** (revisar antes; si son del pase de reglas, commitear):
   ```powershell
   git -C "C:\Users\USER\belentani-ecosystem\arte-musica\ivy-la-vie" status --short
   git -C "C:\Users\USER\belentani-ecosystem\arte-musica\ivy-la-vie" add -- <solo los ficheros del pase> ; git -C "C:\Users\USER\belentani-ecosystem\arte-musica\ivy-la-vie" commit -m "fix(web-rules): ..."
   ```
3. **Subir al remoto** (requiere tu confirmación explícita; hoy ningún repo tiene push):
   ```powershell
   git -C "C:\Users\USER\belentani-ecosystem\arte-musica\ivy-la-vie" push origin main
   ```

## 3. Qué puede alcanzar este repositorio

- **Repositorio privado**: en plan free no puede usar GitHub Pages. Alternativas: (a) hacerlo público si el contenido es publicable, (b) mantenerlo solo en Vercel con token, (c) servir su web desde un superviviente público.
- Sitio pequeño pero válido: con gobernanza GH-01..10 completa y CI quedaría listo como producto público.

---
*Evidencia: `_meta/consolidacion/consolidacion.db` · `_meta/specs/2026-11-01-*` · gate `check_web_rules.py` · git log. Regenerable con `python _meta/gen_auditoria_repos.py`.*
