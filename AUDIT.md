# Informe de Auditoría: ivy-la-vie

Fecha: 2026-08-27
Stack detectado: HTML5/CSS3 vanilla + JS vanilla (GSAP 3.12.5 + ScrollTrigger vía CDN jsDelivr), Google Fonts (Cormorant Garamond, Space Mono). Sin build tooling.
Commits analizados: 1 (8e71339c) en `main`; rama de auditoría `agent/auditoria-2026-08-27` con 3 commits añadidos.
Veredicto: sano (con oportunidades de mejora atendidas)

## Lo mejor del repo (mínimo 3)

1. **Craft visual excelente**: diseño dark con grain SVG, viñeta, tipografías cuidadas y una narrativa (loader → intro → ensayo aleatorio → outro) coherente y muy lograda.
2. **Accesibilidad performance bien pensada**: `loading="lazy"`, `decoding="async"`, `prefers-reduced-motion` contemplada, breadcrumbs de prerender via viewport meta correctos.
3. **Repo limpio y autocontenido**: 143 imágenes consistentes (HTML `FILES` == `manifest.json` == `media/`, verificado por script), cero dependencias de runtime fuera de los CDN, un solo fichero HTML autocontenido.
4. **Buenos toques técnicos**: `target="_blank" rel="noopener"`, `mix-blend-mode` con fallback de text-shadow, gestión de hash aleatorio sin estado.

## Hallazgos CRÍTICOS

- Ninguno. Sin secretos (escaneo de patrones API/token/clave negativo), sin inyección de SQL, sin `eval`/`exec` sobre input de usuario, sin endpoints.

## Hallazgos ALTOS

- **CDN único como punto de fallo total (corregido)** — `index.html:360` (antes `356`). Si GSAP/ScrollTrigger no cargan (CDN caído, bloqueador, offline), `animate()` no existía → el `#loader` negro opaco fijado (`z-index:100`) nunca se ocultaba → **sitio en negro permanente**. Añadido `showFallback()` con try/catch y fallback que muestra contenido estático. Propagación: con JS, si `window.gsap`/`window.ScrollTrigger` ausentes, degrade a contenido visible.

## Hallazgos MEDIOS

- **`prefers-reduced-motion` dejaba contenido invisible (corregido)** — `index.html:356`. La rama reduced-motion ocultaba el loader pero `.bio` (opacity 0 por CSS) y `.intro .meta span` (opacity 0) permanecían invisibles para esos usuarios. Ahora `showFallback()` los revela.
- **Sin README (corregido)** — añadido `README.md` con descripción, stack, cómo instalar/ejecutar/publicar.
- **Sin `.gitignore` (corregido)** — añadido estándar (OS, editores, `.log`) + `media/_ignored/`.
- **`media/_ignored/` (24 imágenes) está commiteada** a pesar del nombre. El autor claramente intentó excluirla; está en el historial. No se ha borrado nada (regla propietario). Si se desea fuera de git: `git rm -r --cached media/_ignored` (requiere decisión manual).
- **`manifest.json` huérfano** — contiene la misma lista que `FILES` en `index.html`, no se referencia en ninguna parte (ni como manifest PWA, no hay SW). Es un artefacto de generación; se mantiene intacto pero conviene documentarlo o eliminarlo voluntariamente.
- **Dependencias CDN sin SRI** — `gsap.min.js` y `ScrollTrigger.min.js` sin `integrity`. Si se sube el nivel de madurez, añadir `integrity`/`crossorigin` calculados.

## Hallazgos BAJOS

- Sin favicon (navegador muestra 404 en `/favicon.ico` — inofensivo).
- Títulos caps genéricos/duplicados posibles por aleatorización (efecto buscado, no bug).
- `manifest.json`/`index.html` repiten la lista de 143 archivos manualmente (riesgo de drift si se añade una foto nueva — un script de generación lo evitaría).

## Añadido por el auditor

- `README.md` (docs)
- `.gitignore` (chore)
- `index.html`: bloque de inicialización robusto con fallback estático (fix)

Commits: `d92ec45` (fix), `a49e195` (docs), `5730f3c` (chore).

## Próximos pasos recomendados

1. Decidir sobre `media/_ignored/`: si son privadas, des-trasquearlas con `git rm -r --cached media/_ignored` en un commit propio.
2. Añadir SRI (`integrity`) a los `<script>` del CDN.
3. Crear script de generación para `manifest.json`/`FILES` (una sola fuente de verdad) para evitar drift al añadir fotos.
4. Opcional: favicon inline (SVG data-URI) para eliminar el 404.

## No tocado (pero anotado)

- `media/` y `media/_ignored/`: contenido binario intacto.
- `origin/main` no modificado; trabajado en rama `agent/auditoria-2026-08-27` sin push directo a main.
- No se añadió LICENSE (repo personal de fotografía; requiere decisión del autor).