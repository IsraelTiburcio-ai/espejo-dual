# QA ejecutado

## Académico
- PDF local revisado en texto e imágenes, pp. 4–8. Se usa la definición canónica y el ejemplo de p. 5; no se reproducen inconsistencias manuscritas en pasos intermedios.
- `node qa.mjs`: 15/15 retos válidos. Matriz transpuesta, c/b, dimensiones, objetivo, desigualdad y no negatividad; doble dual idéntico al original. Caso mixto rechazado.
- Ejemplo p. 5 cotejado contra solución numérica explícita independiente.
- 100 sorteos: 81 secuencias diferentes en la ejecución registrada. Cinco etapas ordenadas y sin duplicados dentro de la partida.

## Interfaz (Chromium / Playwright)
Cinco partidas completas, una por viewport, con capturas en cada etapa:

| Viewport | Entrada | Resultado | Tiempo automatizado hasta replay |
|---|---|---|---|
| 390 × 844 | Toque emulado | 5/5, error corregible, replay OK | 2.907 s |
| 375 × 812 | Toque emulado | 5/5, error corregible, replay OK | 2.914 s |
| 820 × 1180 | Toque emulado | 5/5, error corregible, replay OK | 3.180 s |
| 1180 × 820 | Toque emulado | 5/5, error corregible, replay OK | 3.095 s |
| 1440 × 900 | Enter / Espacio con foco | 5/5, error corregible, replay OK | 1.265 s |

- Sin excepciones JavaScript. Sin overflow horizontal en las 25 etapas. Todos los botones visibles midieron al menos 44 × 44 px.
- Captura móvil revisada visualmente: fórmulas legibles, paneles apilados y piezas en flujo normal; se admite scroll vertical. Ningún botón fijo tapa fichas.
- Arrastrar una ficha al objetivo y cancelar selección con Escape: verificados aparte.
- `prefers-reduced-motion: reduce`: duración de transición medida 0 s.
- Contraste calculado con luminancia relativa WCAG: texto principal/panel 14.53:1; secundario/panel 8.42:1; dual/panel 8.38:1; botón 9.28:1; acierto/panel 11.06:1. Estados acompañados de texto, no solo color.

## Limitaciones / pendientes
- Viewports y toque emulados en Chromium; no se dispone de prueba física en iPhone/iPad ni Safari real.
- Duración objetivo 60–120 s es de diseño. El tiempo automatizado no mide aprendizaje humano; falta una prueba con alumnos para confirmar o ajustar ese objetivo.
- No se ha realizado evaluación manual con lector de pantalla.
