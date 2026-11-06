# IVY LA VIE — the queer photoshoot

<p><img src="https://github.com/belentani7/ivy-la-vie/actions/workflows/ci.yml/badge.svg" alt="CI" style="vertical-align:middle">
  <img src="https://img.shields.io/badge/dependabot-enabled-025e8c?logo=dependabot&style=flat-square" alt="Dependabot">
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fbelentani7.github.io%2Fivy-la-vie%2F&label=demo&style=flat-square&color=2bb673" alt="demo live"></p>

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

- Las imágenes se muestran por defecto en orden aleatorio; también se pueden recorrer según la secuencia de archivo.
- Se respeta `prefers-reduced-motion` (sin animaciones y con todo el contenido visible).
- Si el CDN de GSAP no está disponible, la página degrada a contenido estático visible.
## Edición de archivo y accesibilidad (octubre de 2026)

El ensayo dispone de **167 fotografías con rutas locales verificadas**, portada editorial intacta y dos formas de recorrer el mismo material: **edición aleatoria** (la intención original) y **orden de archivo** mediante el enlace de la página. No se borra, altera ni sustituye ninguna fotografía, ni se modifican sus nombres o versiones.

- La navegación al ensayo puede hacerse por teclado con el enlace «Saltar al ensayo fotográfico» y los controles de edición muestran el estado actual.
- Cada imagen lleva un nombre accesible que la identifica por posición dentro de la serie sin inventar una descripción visual que no se haya verificado.
- La primera foto se solicita antes, las restantes usan carga diferida. Se conserva la narrativa original de transiciones y letras.
- Si GSAP o la animación están desactivados, el fallback muestra **fotos, rótulos y numeración**; se corrige que antes algunos rótulos permanecieran invisibles.
- La construcción de los interludios usa nodos de texto en lugar de insertar HTML dinámico.
- El modo de archivo se activa mediante `?order=archive#essay`. Sin parámetro conserva la aleatoriedad original.

### Test sin dependencias

    node --test tests/photo-contract.test.mjs

Verifica correspondencia exacta entre `manifest.json`, la lista del ensayo y los archivos `media/`, ausencia de duplicados, estructura de navegación y fallback. La CI ejecuta ese contrato para evitar que una modificación deje imágenes huérfanas.

### Derechos, personas retratadas y publicación

El repositorio **no concede por sí mismo una licencia de publicación de fotografías**. Antes de habilitar un sitio público deben revisarse derechos de autor, consentimientos de las personas retratadas (especialmente si la escena permite inferir información privada), alcance del uso, contactos y posibles solicitudes de retirada. No se ha cambiado la visibilidad del repositorio ni se ha activado un despliegue público con esta rama.

Se conserva la identidad visual original de Ivy la Vie. Esta mejora añade navegación y solidez técnica, no transforma el ensayo en una galería genérica ni pretende sustituir la dirección artística de su protagonista.

**Estado:** cambios en rama candidata con PR en borrador hasta tener pruebas ejecutadas, verificación visual y autorización editorial de publicación.
---

## Ficha del proyecto

| Campo | Valor |
|---|---|
| Autor | Belentani / NOIACORE |
| Época de desarrollo | 2026 |
| Contacto | [belentani7studio@proton.me](mailto:belentani7studio@proton.me) |
| Código | https://github.com/belentani7/ivy-la-vie |
| Demo desplegada | https://belentani7.github.io/ivy-la-vie/ |

Quality baseline: CI + Dependabot + CodeQL + reglas de agentes por [premium-factory](https://github.com/belentani7/premium-factory-api).


## Uso

Instala dependencias y ejecuta el proyecto:

```powershell
# Dependencias
npm install

# Desarrollo
npm run dev

# Pruebas
npm test

# Construcción de producción
npm run build
```

Consulta `package.json` para la lista completa de scripts disponibles.
