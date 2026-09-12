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

## Formulario de contacto

El formulario no envía correos ni requiere servidor. Al enviarlo, se abre WhatsApp (`wa.me`) con los datos capturados ya escritos en el mensaje, listo para enviar al número configurado en `WHATSAPP_NUMBER` dentro de `src/data/siteData.js`.
