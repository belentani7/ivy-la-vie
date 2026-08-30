# IVY LA VIE — the queer photoshoot

Ensayo fotográfico de la escena queer, la noche en Barcelona y la afición por la
fotografía. Casi portafolio, casi secreto.

## Stack

- HTML5 + CSS3 (vanilla, diseño *dark*, grain + viñeta en SVG/CSS)
- JavaScript vanilla con [GSAP](https://greensock.com/gsap/) 3.12.5 + ScrollTrigger (CDN via jsDelivr)
- Google Fonts: Cormorant Garamond + Space Mono
- Sin build tooling, sin dependencias de Node

## Estructura

- `index.html` — toda la página (estilos, marcado y animación)
- `manifest.json` — lista de imágenes del ensayo (generada)
- `media/` — fotos del ensayo (la carpeta `_ignored/` queda fuera del montaje)
- `media/_ignored/` — imágenes excluidas del ensayo

## Instalar y ejecutar

Al ser un sitio estático sin dependencias:

```bash
# servir localmente (cualquier servidor estático sirve)
python -m http.server 8000
# o
npx serve .
```

Abre `http://localhost:8000`. Requiere conexión a internet para cargar GSAP y
las fuentes desde CDN.

## Publicar

Sube el contenido del repo a cualquier static host (GitHub Pages, Netlify,
Vercel, Cloudflare Pages). No hay paso de build.

## Notas

- Las imágenes se muestran en orden aleatorio en cada visita.
- Se respeta `prefers-reduced-motion` (sin animaciones y con todo el contenido visible).
- Si el CDN de GSAP no está disponible, la página degrada a contenido estático visible.