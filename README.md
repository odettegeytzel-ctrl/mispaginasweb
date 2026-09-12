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

El formulario usa una función de Vercel (`api/contact.js`) y Resend para enviar cada solicitud por correo. Antes de desplegar, agrega estas variables de entorno en Vercel:

```text
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=tu-correo@ejemplo.com
CONTACT_FROM_EMAIL=Desarrollo Web <contacto@tudominio.com>
```

`CONTACT_FROM_EMAIL` es opcional mientras usas el remitente de prueba de Resend. Para producción, verifica un dominio propio en Resend y utiliza una dirección de ese dominio. Nunca agregues la clave de Resend al repositorio ni a archivos de React.
