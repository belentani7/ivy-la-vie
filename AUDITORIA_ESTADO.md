# AUDITORIA_ESTADO — ivy-la-vie

> Repositorio físico: `belentani-ecosystem/arte-musica/ivy-la-vie`

## Situación actual

| Indicador | Valor |
|-----------|-------|
| Categoría | arte-musica |
| Lenguaje | HTML |
| Rama | main |
| package.json | No |
| Python | No |
| Docker | No |
| README | Sí |
| AGENTS.md | No |
| Tests | No |
| CI | Sí |

## Comentarios

- IVY LA VIE — queer photoshoot project and visual portfolio.
- Tiene CI, pero falta AGENTS.md y tests.

## Comando para arreglar y elevar

```bash
# HTML estático, cero build: copiar archivos al servidor
# Crear AGENTS.md con reglas del ecosistema belentani7
# Crear tests básicos (validación HTML, enlaces rotos)
gitleaks detect --source .