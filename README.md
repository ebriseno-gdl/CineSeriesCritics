# Cineseriescritics

Aplicación web para visualizar criticas de películas y series. El proyecto está construido con HTML, CSS y JavaScript sin frameworks ni dependencias externas de instalación.

## Funcionalidades

- Muestra un catálogo de películas en tarjetas.
- Presenta la portada, el título y el año de estreno.
- Permite seleccionar una película para consultar sus datos detallados.
- Muestra información como país, duración, género, dirección, guion y producción.
- Calcula y muestra las calificaciones disponibles por categoría y su promedio.
- Incluye enlaces a los trailers publicados en YouTube.
- Permite volver del detalle al listado.

## Cómo ejecutar el proyecto

Para abrir la página en Chrome, instala la extensión **Live Server** (de Ritwick Dey) en VS Code. Abre `Cineseriescritics.html`, haz clic derecho sobre el archivo y selecciona **Open with Live Server**. La página se abrirá en el navegador predeterminado; si no es Chrome, copia la dirección que aparece y ábrela en Chrome.

No abras el HTML directamente desde el explorador de archivos: Live Server es necesario para cargar el catálogo de películas.

Una vez abierta la pagina principal te mostra el catálogo de peliculas, cada pelicula es en una tarjeta, selecciona una tarjeta para ver el detalle de la película y desde el detalle puedes abrir el trailer o regresar al catálogo.

## Estructura principal


Cineseriescritics.html   # Estructura de la página
Cineseriescritics.css    # Estilos y diseño responsive de las tarjetas y detalles
Cineseriescritics.js     # Catálogo, renderizado, detalles y calificaciones
Cineseriescritics.png    # Logotipo
Cineseriescritics.ico    # Icono de la página
Images/                  # Portadas utilizadas por el catálogo
```

## Añadir una película

Abre `datos/peliculas.json` y agrega un objeto al catálogo. Usa un `id` que no esté repetido y separa cada objeto con una coma. Como es un archivo JSON, no agregues comentarios ni una coma después del último objeto.

```json
{
  "id": 17,
  "name": "TÍTULO DE LA PELÍCULA",
  "anioEstreno": 2026,
  "image": "Images/NombreDeLaImagen.jpg",
  "paisestreno": "País",
  "duracion": "2h 00min",
  "genero": "Drama",
  "direccion": "Nombre del director",
  "guion": "Nombre del guionista",
  "produccion": "Nombre del productor",
  "trailerVideo": "ID_DEL_VIDEO_DE_YOUTUBE",
  "calificaciones": [
    { "categoria": "Guion", "calificacion": 80 }
  ]
}
```

Guarda la portada en Images/ y verifica que la ruta de image coincida con su nombre. Guarda el JSON y recarga la página para ver la película en el catálogo

## Tecnologías

- HTML5
- CSS3
- JavaScript
- YouTube para los enlaces de trailers
