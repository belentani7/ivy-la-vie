# PROJECT_MASTER_PROMPT — IVY LA VIE

## Fuente de verdad y límites

Proyecto **IVY LA VIE — the queer photoshoot**, ensayo fotográfico editorial sobre la escena queer y la noche de Barcelona. Su identidad es **íntima, cinematográfica, oscura y deliberadamente no comercial**: «casi portafolio, casi secreto». No convertirlo en un SaaS, marketplace ni galería genérica. La versión canónica vive en este repositorio; preservar las fotografías, su procedencia y los créditos, sin renombrarlas, borrarlas ni inferir identidades.

### Estado comprobable en el repositorio (octubre de 2026)

- Sitio estático de un único `index.html`, CSS y JavaScript propios, animaciones GSAP/ScrollTrigger desde CDN.
- `manifest.json` enumera 167 fotografías presentes en `media/`; `tests/photo-contract.test.mjs` protege consistencia y navegación.
- Dos recorridos: reordenación aleatoria original y secuencia de archivo con `?order=archive#essay`.
- Degradación visual cuando GSAP falla, cuando se solicita menos movimiento y, en esta rama, cuando JavaScript está desactivado o algún recurso de imagen no carga.
- **No consta una autorización editorial general** para publicar las imágenes; repo privado. Ninguna fase autoriza hacer público el sitio o los ficheros por inferencia.

## Experiencia editorial máxima — sin perder su esencia

1. **Entrada**: portada tipográfica, narración de movimiento reducido, textos y rótulos legibles, navegación de teclado y contacto.
2. **Archivo vivo**: recorrido aleatorio irrepetible por visita; recorrido ordenado estable; fotografías con numeración, rótulos no engañosos y continuidad cuando falla una imagen.
3. **Capas curatoriales futuras**: agrupar por sesiones o fechas únicamente cuando existan metadatos aportados por su responsable; no fabricar biografías, ubicaciones, nombres, fechas o descripciones de personas.
4. **Accesibilidad integral**: controles con foco visible, jerarquía semántica, lectura lineal, alternativas textuales verificables y política clara para recursos deshabilitados.
5. **Rendimiento real**: dimensiones/orientaciones extraídas de assets locales cuando se puedan verificar, formatos responsivos derivados sin sobrescribir originales, carga adaptativa, presupuesto de bytes y pruebas móviles.
6. **Privacidad y derechos**: registro privado de autoría y consentimientos, revisión humana de fotografías antes de publicación, mecanismo de retirada y política de retención; nunca incluir datos de personas retratadas en analytics o etiquetas automáticamente.
7. **Producción fiable**: pruebas de contrato sobre `media/`, ensayos de fallo de red/CDN, comprobación de accesibilidad con navegador y verificación editorial/manual antes de desplegar.

## Construcción incremental obligatoria

**Fase A — seguridad de la experiencia:** resolver pantallas negras sin JavaScript, imágenes no disponibles y navegación degradada. Mantener todos los originales; validar pruebas Node y navegador.

**Fase B — patrimonio fotográfico:** introducir una única fuente de verdad derivada de `manifest.json`; comprobar que no hay rutas rotas ni assets inesperadamente servidos; separar explícitamente recursos excluidos sin borrarlos.

**Fase C — edición avanzada:** índices de sesiones solo con metadatos autorizados, navegación por capítulos, vista de detalle accesible, compartición de secciones sin divulgar metadatos sensibles.

**Fase D — operación:** optimización de imágenes, pruebas de rendimiento y visuales, CI, controles de publicación, verificación de permisos y consentimientos.

## Reglas operativas para cada agente

1. Leer `README.md`, este archivo, `index.html`, `manifest.json`, `tests/` y el estado de PR antes de editar.
2. Mantener cambios en **este mismo repositorio** en ramas revisables; ninguna repositorización paralela.
3. Priorizar comportamiento visible y regresiones reproducibles, no auditorías repetidas ni documentación vacía.
4. Ninguna identidad, permiso de imagen, crédito o descripción sensible se presume. No publicar ni cambiar visibilidad por iniciativa del agente.
5. Verificar con `node --test tests/photo-contract.test.mjs`, controles visuales y accesibilidad. Separar «código guardado», «test ejecutado», «CI superado» y «publicado», con pruebas reales.
6. Antes de dar por concluido un incremento, registrar rutas cambiadas, resultado de pruebas, riesgo editorial, commit y PR. No declarar terminada la experiencia por la mera existencia de este plan.

## Prompt reutilizable

> Continúa la evolución de **IVY LA VIE** preservando la integridad del ensayo de 167 imágenes, su estética íntima, el recorrido aleatorio y el de archivo. Lee estado actual y PRs, implementa UNA mejora funcional comprobable y la prueba asociada, valídala sin fingir checks, propón una rama/PR, no publiques sin revisión de derechos y consentimiento de las personas retratadas. Actualiza el estado verificable sin borrar historia ni crear otro producto.
