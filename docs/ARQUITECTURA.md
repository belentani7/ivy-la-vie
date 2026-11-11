

<!-- repo-forge:docs-arquitectura:inicio -->
# Arquitectura

## Tipo

sitio estático publicable tal cual

## Piezas observadas

| Pieza | Evidencia |
|---|---|
| Lenguajes | Markdown 28.7%, HTML 28.1%, JavaScript 19.2%, JSON 13.7%, CSS 10.3% |
| Puntos de entrada | ninguno detectado |
| Páginas HTML | 3 |
| Tests | 2 archivos |
| Dependencias de paquete | 0 |

## Capas propuestas

```text
contenido/      datos y textos versionados
plataforma/     ficha, diseño y contrato del producto
brand/          tokens, marca y activos
scripts/        verificación y operación
tests/          pruebas ejecutables
```

La propuesta no mueve archivos existentes: describe dónde debe vivir lo nuevo para que
el repositorio siga siendo legible.

## Deuda declarada

- Archivos grandes: media/image-0107.jpg.
- 5 lenguajes: coste de contexto alto.

<!-- repo-forge:arquitectura -->
<!-- repo-forge:docs-arquitectura:fin -->
