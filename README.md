# Desarrollo Web — Portafolio profesional

Portafolio de servicios de desarrollo web para negocios y empresas. Incluye proyectos **DEMO**, paquetes iniciales y un formulario de cotización validado en el navegador.

## Tecnologías

React, Vite, JavaScript ES6+, HTML5 semántico, CSS3, Git, GitHub y preparación para Vercel.

## Instalación y uso

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Personalización

En `src/data/siteData.js` reemplaza los valores `PEGAR_URL_AQUI` por las URLs de Vercel de cada demo y `PEGAR_NUMERO_AQUI` por el número de WhatsApp con código de país. No se incluyen datos de clientes, teléfonos o enlaces reales.

## Contacto

La seccion de contacto no tiene formulario ni requiere servidor: es un boton directo a WhatsApp (`wa.me`) con un mensaje inicial ya escrito. El numero se configura en `WHATSAPP_NUMBER` dentro de `src/data/siteData.js`.
