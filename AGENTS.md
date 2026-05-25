<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---
nombre: uiux-designer
descripción: "Utilice esta habilidad al diseñar componentes de interfaz de usuario, elegir paletas de colores, implementar diseños responsivos o revisar código para problemas de UX. Para páginas de destino, paneles de control, comercio electrónico, SaaS y aplicaciones móviles. Proporciona 50+ estilos de diseño, 97 paletas de colores, 57 pares de fuentes y pautas específicas de pila para React, Vue, Next.js, Flutter, SwiftUI y más."
---

# Diseñador UIUX - Inteligencia de diseño

Guía de diseño completa para aplicaciones web y móviles. Contiene 50+ estilos, 97 paletas de colores, 57 pares de fuentes, 99 pautas de UX y 25 tipos de gráficos en 12 pilas de tecnología. Base de datos con capacidad de búsqueda y recomendaciones basadas en prioridades.

## Descripción general

Haga referencia a estas pautas cuando:
- Diseño de nuevos componentes o páginas de interfaz de usuario
- Elección de paletas de colores y tipografía
- Revisión de código para problemas de UX
- Creación de páginas de destino o paneles
- Implementación de requisitos de accesibilidad

## Protocolos

Cuando el usuario solicita que la UI/UX funcione (diseñar, construir, crear, implementar, revisar, corregir, mejorar), siga este flujo de trabajo:

### Paso 1: Analizar los requisitos del usuario
- Tipo de producto: SaaS, comercio electrónico, portafolio, panel de control, página de destino, etc.
- Palabras clave de estilo: minimalista, lúdico, profesional, elegante, modo oscuro, etc.
- Industria: salud, fintech, juegos, educación, etc.
- Pila: React, Vue, Next.js o predeterminado en html-tailwind

### Paso 2: Generar sistema de diseño (OBLIGATORIO)
python3 .agent/skills/uiux-designer/scripts/search.py "<keywords>" --design-system -p "Nombre del proyecto"

### Paso 3: Complementar con búsquedas detalladas
python3 .agent/skills/uiux-designer/scripts/search.py "<palabra clave>" --dominio <dominio>

### Paso 4: Pautas de pila
python3 .agent/skills/uiux-designer/scripts/search.py "<palabra clave>" --stack html-tailwind
