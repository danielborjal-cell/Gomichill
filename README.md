# Gomichill - Página estática (landing)

Pequeña landing para mostrar el catálogo, información de la marca y una encuesta de satisfacción. Pensada para que los clientes ingresen mediante un QR.

Archivos creados:
- `principal.html` - página principal (abrir en el navegador)
- `styles.css` - estilos modernos y responsive
- `script.js` - render del catálogo, encuesta y generación de QR

Instrucciones rápidas:

1) Coloca tu logo

   Guarda el archivo de tu logo como `assets/logo.png` (o cambia la ruta en `principal.html`). He agregado un placeholder vectorial en `assets/logo.svg` que se usará si no subes `assets/logo.png`.

2) Probar localmente

   Abre `principal.html` en tu navegador (doble clic). Nota: la generación de QR por defecto usa la URL actual; si abres por `file://`, el QR apuntará a esa ruta local y no será accesible desde móviles. Para crear un QR público, sube los archivos a un hosting y vuelve a generar.

3) Subir a hosting (recomendado)

   - GitHub Pages: crea un repo con estos archivos y activa Pages en la rama `main`.
   - Netlify / Vercel: arrastra la carpeta o conecta el repo.

4) Generar QR para impresión

   - Mientras la página esté publicada en una URL pública (por ejemplo https://tudominio.com/principal.html), en la tarjeta QR escribe esa URL.
   - También puedes usar el servicio gratuito que usa la propia página para generar el QR: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TU_URL`

5) Personalizar catálogo

   Edita el array `catalog` dentro de `script.js` para añadir tus productos reales, descripciones, precios y emojis o reemplaza por imágenes reales en el HTML generado.

5) Encuestas

   La encuesta está alojada en Google Forms. Reemplaza el enlace en `principal.html` (sección "Encuesta de satisfacción") por la URL de tu formulario.

   Nota: antes la página guardaba encuestas en `localStorage`. Ahora la recogida centralizada se realiza desde Google Forms, por lo que las respuestas estarán en tu cuenta de Google y puedes conectarlas a una hoja de cálculo.

Siguientes pasos recomendados (puedo implementarlos si quieres):

- Añadir un formulario de pedido con contacto o integración con WhatsApp.
- Añadir imágenes reales de productos y optimización de carga (lazy-loading).
- Integrar las respuestas de la encuesta a Google Sheets.

Si quieres, hago los cambios que me pidas: colores, textos, fotos o añadir formulario de pedidos.
