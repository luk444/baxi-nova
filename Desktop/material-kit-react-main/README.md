# BAXI NOVA

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

Sitio web profesional para BAXI NOVA - Servicio Técnico Oficial de Calderas y Sistemas de Calefacción BAXI.

## Sobre el Proyecto

BAXI NOVA es el servicio técnico oficial autorizado por BAXI, especializado en la instalación, reparación y mantenimiento de calderas y sistemas de calefacción con más de 15 años de experiencia. Este sitio web está diseñado para ofrecer información profesional sobre nuestros servicios oficiales y facilitar el contacto directo con nuestros clientes.

## Características

- ✅ Diseño moderno y responsivo profesional
- ✅ Carrusel automático de marcas de calderas
- ✅ Información completa sobre servicios técnicos oficiales
- ✅ Testimonios de clientes verificados
- ✅ Integración con WhatsApp para contacto directo
- ✅ Secciones de servicios profesionales BAXI
- ✅ Sistema de garantía oficial del fabricante
- ✅ Optimizado para dispositivos móviles y tablets
- ✅ SEO optimizado para búsquedas locales

## Servicios Oficiales

- **Instalación Certificada** - Instalación oficial con garantía BAXI
- **Mantenimiento Preventivo** - Planes anuales según protocolo BAXI
- **Reparación Profesional** - Diagnóstico y reparación con repuestos originales
- **Servicio de Emergencia** - Atención 24/7 los 365 días del año

## Información de Contacto

- **Email:** novabaxi@gmail.com
- **Teléfono:** +54 9 11 7721 3649
- **WhatsApp:** Disponible 24/7
- **Ubicación:** Buenos Aires, Argentina
- **Horario:** Lunes a Viernes 8:00-18:00, Sábados 9:00-13:00, Emergencias 24/7

#### Special thanks

During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:

- [MUI](https://mui.com/) - The React UI library for faster and easier web development.
- [React Flatpickr](https://github.com/haoxins/react-flatpickr) - Useful library used to select date.
- [React Copy to Clipboard](https://github.com/nkbt/react-copy-to-clipboard) - Useful library used for copying data to the clipboard.
- [React Countup](https://github.com/glennreyes/react-countup) - A lightweight React component that can be used to quickly create animations that display numerical data in a more interesting way.
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Syntax highlighting component for react with prismjs or highlightjs ast using inline styles.
- [ChromaJS](https://gka.github.io/chroma.js/) - A small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
- [Nepcha Analytics](https://nepcha.com?ref=readme) for the analytics tool. Nepcha is already integrated with Material Kit 2 React. You can use it to gain insights into your sources of traffic.

Let us know your thoughts below. And good luck with development!

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Despliegue](#despliegue)
- [Estructura de Archivos](#estructura-de-archivos)
- [Soporte de Navegadores](#soporte-de-navegadores)
- [Tecnologías](#tecnologías)

## Instalación

1. Descarga e instala la versión LTS de NodeJs desde [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navega al directorio raíz del proyecto y ejecuta `npm install` para instalar las dependencias locales.

```bash
npm install
```

## Uso

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Para crear una versión de producción:

```bash
npm run build
```

## Despliegue

El proyecto puede ser desplegado en cualquier servicio de hosting estático como:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Estructura de Archivos

Dentro del proyecto encontrarás los siguientes directorios y archivos:

```
baxi-nova
    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   ├── theme
    │   │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── functions
    │   │   └── └── index.js
    │   ├── components
    │   │   ├── MKAlert
    │   │   ├── MKAvatar
    │   │   ├── MKBadge
    │   │   ├── MKBox
    │   │   ├── MKButton
    │   │   ├── MKDatePicker
    │   │   ├── MKInput
    │   │   ├── MKPagination
    │   │   ├── MKrogress
    │   │   ├── MKSocialButton
    │   │   └── MKTypography
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Cards
    │   │   ├── Footer
    │   │   └── Navbars
    │   ├── layouts
    │   │   ├── pages
    │   │   │    ├── authentication
    │   │   │    ├── landing-pages
    │   │   │    └── presentation
    │   │   ├── sections
    │   │   │    ├── attention-catchers
    │   │   │    ├── components
    │   │   │    ├── elements
    │   │   │    ├── input-areas
    │   │   │    ├── navigation
    │   │   └──  └── page-sections
    │   ├── pages
    │   │   ├── LandingPages
    │   │   └── Presentation
    │   ├── App.js
    │   ├── index.js
    │   ├── footer.routes.js
    │   └── routes.js
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── jsconfig.json
    ├── package.json
    └── README.md
```

## Soporte de Navegadores

Soportamos oficialmente las últimas dos versiones de los siguientes navegadores:
- Chrome
- Firefox
- Edge
- Safari
- Opera

## Tecnologías

Este proyecto está construido con:
- React 18
- Material-UI (MUI) 5
- React Router 6
- Emotion (styled components)

## Marcas que Trabajamos

- BAXI (Servicio Oficial)
- PEISA
- ARISTON
- EUTERMA
- CALDAIA
- ROCA
- JUNKERS
- VAILLANT

## Licencia

Copyright © 2025 BAXI NOVA. Todos los derechos reservados.
