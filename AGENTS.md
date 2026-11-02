# AGENTS.md â€” belentani7/ivy-la-vie

Instrucciones para agentes de cÃ³digo (Cursor, Claude Code, Codex, Gemini CLI).

## Stacks: web-estatico

## Ciclo de verificaciÃ³n

- VerificaciÃ³n manual: revisar el README.

## Reglas de seguridad (obligatorias)

- Antes de cambiar nada, revisa `git status`. No descartes ni sobrescribas cambios sin commit que no hayas hecho tú.
- No borres carpetas (`node_modules`, `dist`, `.venv`, etc.) ni ficheros de datos sin preguntar.
- No hagas `git push`, `git reset --hard` ni despliegues sin que el usuario lo pida explícitamente.
- Haz cambios pequeños y verificables; ejecuta solo las comprobaciones que cubran el cambio.

## Reglas

- Evidence over claims: ejecuta la verificaciÃ³n antes de declarar Ã©xito.
- Cambios mÃ­nimos y reversibles; un fix llega con su test.
- Nunca commitear secrets ni `.env`.

Ver estÃ¡ndares completos en `.cursor/rules/project.mdc`.
