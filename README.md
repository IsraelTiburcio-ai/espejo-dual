# Espejo Dual

**Construye el modelo reflejado.** Microjuego de Optimización I, Gimnasio 4: Teoría de la Dualidad. HTML, CSS y JavaScript vanilla, sin backend.

## Jugar
5 rompecabezas por partida, elegidos entre 15 retos (tres por habilidad): sentido, dimensiones, vectores, transposición y dual pequeño. Tocar ficha y espacio, arrastrar opcionalmente, o Tab + Enter/Espacio. Escape cancela. Los aciertos se conservan y las fichas con valor repetido son reutilizables cuando corresponde. Tiempo informativo, objetivo de diseño 60–120 segundos.

## Fuente académica
Se revisó texto e imágenes del archivo local `GYM 4_251208_083217 (1).pdf` (44 páginas), especialmente las páginas impresas 4–8. No se redistribuye el PDF.
- p. 4: definición, forma canónica MAX y su dual MIN, intercambio m/n.
- p. 5: ejemplo MAX con A=[[8,2,5],[5,2,4]], b=[16,20], c=[4,1,1]; incluido sin alterar los datos. Dual verificado: min 16y₁+20y₂; 8y₁+5y₂≥4, 2y₁+2y₂≥1, 5y₁+4y₂≥1; y≥0.
- pp. 5–6: forma MIN con ≥ y su dual MAX con ≤, variables no negativas.
- pp. 7–8: resumen e ilustraciones de modelos mixtos; delimitan el alcance. No se generan modelos mixtos ni variables libres. Algunas anotaciones manuscritas en desarrollos tienen inconsistencias de sentido; se sigue la definición canónica y la fórmula explícita del recuadro superior de p. 6.

`data.js` contiene modelos, soluciones estructuradas, banco y reglas. Los otros modelos son ejemplos didácticos propios, no transcripciones de ejercicios de la profesora. No se pide resolver el óptimo.

## Desarrollo y QA
Servir con `python3 -m http.server 8000`, abrir http://localhost:8000. Validación académica: `node qa.mjs`. Verifica todos los retos, transposición elemento a elemento, dimensiones, intercambio b/c, signos, involución y el ejemplo del PDF contra una solución explícita independiente. Rechaza modelos fuera del alcance. El workflow ejecuta esta validación antes de publicar.

Publicación automática desde `main` con GitHub Actions y Pages. Consultar `QA.md` para resultados ejecutados y limitaciones.
