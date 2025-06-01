# Teje Lanas Vivi

Sitio web para Teje Lanas Vivi, emprendimiento de tejidos artesanales. Desarrollado con React + Vite, Bootstrap y buenas prácticas de accesibilidad y usabilidad.

## Índice

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Guía de Buenas Prácticas](#guía-de-buenas-prácticas)
  - [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
  - [Estructura de Archivos](#estructura-de-archivos)
  - [Uso de Variables](#uso-de-variables)
  - [Accesibilidad y Usabilidad](#accesibilidad-y-usabilidad)
- [Instalación y Uso](#instalación-y-uso)
- [Licencia](#licencia)

---

## Descripción

Este proyecto implementa una SPA (Single Page Application) para mostrar productos, servicios, información y contacto de Teje Lanas Vivi. Utiliza React para la interfaz, Vite para el bundling y Bootstrap para el diseño responsivo.

## Estructura del Proyecto

```
eva3_tejelanas/
│
├── public/                  # Imágenes y recursos estáticos
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
│
├── src/
│   ├── assets/              # Recursos estáticos internos (SVG, logos)
│   ├── components/          # Componentes reutilizables de React
│   │   ├── ContactForm.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCarousel.jsx
│   │   ├── QuienesSomos.jsx
│   │   ├── ServiceCard.jsx
│   │   └── Services.jsx
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada de la app
│   ├── styles.css           # Estilos personalizados
│   ├── index.css            # Estilos base y resets
│   └── App.css              # Estilos de ejemplo (puede eliminarse si no se usa)
│
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md                # Documentación del proyecto
```

## Guía de Buenas Prácticas

### Convenciones de Nomenclatura

- **Componentes:** PascalCase (`NombreComponente.jsx`)
- **Funciones y variables:** camelCase (`handleSubmit`, `formData`)
- **Clases CSS:** kebab-case o BEM (`.hero-section`, `.footer-logo`)
- **Archivos:** Usar nombres descriptivos y en inglés para componentes, español para secciones si aplica.

### Estructura de Archivos

- Cada componente en su propio archivo dentro de `src/components/`.
- Los estilos globales en `src/styles.css` y resets en `src/index.css`.
- Imágenes y recursos estáticos en `public/` o `src/assets/` según su uso.
- Mantener el punto de entrada en `src/main.jsx` y el componente raíz en `src/App.jsx`.

### Uso de Variables

- Usar variables CSS (`:root`) para colores, fuentes y espaciados en `styles.css`.
- Mantener el estado de los componentes con `useState` y `useEffect` de React.
- Evitar variables globales en JS; preferir props y contextos si es necesario compartir estado.

### Accesibilidad y Usabilidad

- Usar etiquetas semánticas (`<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`, etc.).
- Asegurar que todos los botones y enlaces sean accesibles por teclado.
- Proveer textos alternativos (`alt`) en todas las imágenes.
- Usar colores con suficiente contraste y fuentes legibles.
- Etiquetar correctamente los formularios con `label` y `aria-*` si es necesario.
- Garantizar navegación fluida y responsiva en dispositivos móviles.
- Probar con lectores de pantalla y herramientas de accesibilidad.

## Instalación y Uso

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Accede a la app en [http://localhost:5173](http://localhost:5173) (o el puerto indicado).

## Licencia

Este proyecto es solo para fines educativos y de demostración.
