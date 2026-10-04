# New Portfolio — System Design v1

Fuente: implementación aprobada y creada desde cero el 2026-10-04 en `dist/`.

## Dirección visual

Editorial tecnológico: fondo cálido casi blanco, tinta oscura, acento azul eléctrico y superficies translúcidas. La interfaz prioriza tipografía, ritmo vertical y líneas finas; evita tarjetas genéricas y decoración excesiva.

## Tokens

### Color

- `--paper`: `#f4f2ed`
- `--ink`: `#121317`
- `--muted`: `#62656f`
- `--line`: `rgba(18, 19, 23, 0.14)`
- `--accent`: `#3157ff`
- `--accent-soft`: `#dfe5ff`
- `--surface`: `rgba(255, 255, 255, 0.62)`
- Tema oscuro: `--paper #101116`, `--ink #f3f2ee`, `--muted #a5a7b0`, `--line rgba(255,255,255,.14)`, `--surface rgba(255,255,255,.05)`.

### Tipografía

- Sans principal: `Inter`, con fallback `Arial, sans-serif`.
- Display editorial: `Georgia, serif`.
- Escala fluida con `clamp()`: hero `3.5–7.5rem`, títulos de sección `2.2–4rem`, cuerpo `1–1.125rem`.

### Espaciado y grid

- Unidad base: `0.5rem`.
- Contenedor: `min(1200px, calc(100% - 40px))`.
- Secciones: `clamp(5rem, 10vw, 9rem)` vertical.
- Grid de 12 columnas en desktop; apilado en menos de `760px`.

### Forma y elevación

- Bordes: `1px solid var(--line)`.
- Radios: `1rem` para bloques, `999px` para chips.
- Sombras mínimas; profundidad por transparencia, contraste y desplazamiento.

### Motion

- Duración base: `240ms`; reveal: `700ms`.
- Curva: `cubic-bezier(.2,.75,.2,1)`.
- Respeta `prefers-reduced-motion: reduce` y elimina transiciones/reveals.

## Componentes

- `SiteHeader`: marca monograma, navegación, cambio de tema y menú móvil.
- `Hero`: eyebrow, titular editorial, introducción, CTA principal/secundario y panel de estado.
- `Marquee`: banda de capacidades con movimiento desactivable.
- `ProjectRow`: índice, título, descripción, etiquetas y enlace; hover desplaza sutilmente.
- `Principle`: número, principio y explicación.
- `ContactPanel`: llamada final, enlace GitHub y estado de disponibilidad.
- `SiteFooter`: copyright dinámico y navegación de retorno.

## Patrones responsive

- Desktop: composición asimétrica 8/4 y filas de proyecto en 2/6/4.
- Tablet/móvil: una columna, navegación colapsada, CTAs apilables y tipografía fluida.
- Objetivos táctiles mínimos de 44px.

## Accesibilidad

- HTML semántico, enlace de salto, landmarks y jerarquía de encabezados.
- Focus visible, botones con `aria-label`, menú con `aria-expanded`.
- Contraste alto en ambos temas.
- Motion reducido y persistencia de tema mediante `localStorage`.
