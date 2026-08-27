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

No es necesario instalar Node.js ni ejecutar un servidor.

1. Abre `Cineseriescritics.html` directamente en un navegador.
2. Selecciona una tarjeta para ver el detalle de la película.
3. Desde el detalle puedes abrir el trailer o regresar al catálogo.

También puedes abrir la carpeta en VS Code y usar una extensión de servidor local, como Live Server, si prefieres recargar los cambios automáticamente.

## Estructura principal

```text
Cineseriescritics.html   # Estructura de la página
Cineseriescritics.css    # Estilos y diseño responsive de las tarjetas y detalles
Cineseriescritics.js     # Catálogo, renderizado, detalles y calificaciones
Cineseriescritics.png    # Logotipo
Cineseriescritics.ico    # Icono de la página
Images/                  # Portadas utilizadas por el catálogo
```

## Añadir una película

Edita el arreglo `peliculas` en `Cineseriescritics.js` y agrega un objeto con, al menos, estos datos:

```javascript
{
  id: 14,
  name: "TITULO DE LA PELICULA",
  anioEstreno: 2026,
  image: "images/NombreDeLaImagen.jpg",
  paisestreno: "Pais",
  duracion: "2h 00min",
  genero: "Drama",
  direccion: "Nombre del director",
  guion: "Nombre del guionista",
  produccion: "Nombre del productor",
  trailerVideo: "ID_DEL_VIDEO_DE_YOUTUBE",
  calificaciones: [
    {categoria: "Guion", calificacion: 80}
  ]
}
```

Guarda la portada dentro de `Images/` y comprueba que el nombre y la ruta coincidan con el valor de `image`. Después, recarga `Cineseriescritics.html` para ver los cambios.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- YouTube para los enlaces de trailers
