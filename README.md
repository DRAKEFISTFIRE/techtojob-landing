# TechToJob — Landing (Torneo #2)

Landing page de una sola vista para **TechToJob**, la comunidad donde el talento tech compite en torneos, se muestra con proyectos reales y conecta con empresas — sin CV genéricos ni procesos eternos. Construida para el Torneo #2 de identidad/landing, con el objetivo principal de convertir visitas en miembros del Discord.

## Stack

- **Next.js** + **TypeScript**
- CSS a medida con variables de diseño (paleta blanco / teal / grafito, con dorado reservado para insignias), migrando progresivamente partes del proyecto a **Tailwind**
- Todo el copy vive en `language/es.json` y `language/en.json`; el componente principal (`page.tsx`) es puramente estructural y no contiene texto hardcodeado, para poder cambiar de idioma sin tocar el layout
- Iconografía en **SVG vectorial** propio (sin emojis ni librerías de iconos externas)

## Estructura de la página

1. **Portal / hero introductorio** — secuencia de scroll con efecto de "cueva" hacia la luz, pensada como apertura de marca
2. **Hero principal** — propuesta de valor, CTA a Discord y CTA secundaria a oportunidades
3. **Qué es TechToJob** — contraste "antes / ahora" entre la búsqueda de trabajo tradicional y el modelo de la comunidad
4. **Pilares** — los cuatro ejes: torneos mensuales, empresas publicando ofertas, autopromoción del perfil y networking
5. **Próximo torneo** — countdown en vivo hasta el día 1 del mes siguiente
6. **Insignias** — credenciales verificables por especialidad (frontend, backend, blue team, algoritmos), con selector interactivo
7. **Estadísticas** — cifras clave de la comunidad
8. **Cómo funciona** — el recorrido tras una entrega: participa → publica → conecta → te quedas
9. **Discord** — bloque de invitación con enlace copiable y vista simulada del servidor
10. **Torneos y ofertas** — carruseles horizontales con contenido de ejemplo, listos para sustituir por datos reales
11. **FAQ** — preguntas frecuentes en formato acordeón
12. **Testimonios** — carrusel con contenido de relleno, pendiente de sustituir por testimonios reales con foto y LinkedIn
13. **Newsletter** — formulario de suscripción con validación básica
14. **Footer** — enlaces de producto/comunidad, CTA de cierre a Discord y crédito de diseño

## Internacionalización

El selector de idioma en el header alterna entre `es` y `en`, persiste la preferencia en `localStorage` y actualiza `document.documentElement.lang`. Añadir un idioma nuevo implica crear su archivo de mensajes siguiendo la forma de `es.json` — no requiere cambios en `page.tsx`.

## Accesibilidad y rendimiento

Pensada teniendo en cuenta los criterios de evaluación del torneo: uso de `aria-label`, `aria-live`, `aria-hidden` donde corresponde, navegación por teclado en el menú y carruseles, `prefers-reduced-motion` respetado en las animaciones, e imágenes con `alt` descriptivo o vacío según sean decorativas o no.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Notas para producción

- Los torneos, ofertas y testimonios actuales son contenido de ejemplo — sustituir por datos reales antes de publicar.
- Las imágenes referenciadas (`/images/...`) deben añadirse a `public/images` con los mismos nombres de archivo usados en el componente.