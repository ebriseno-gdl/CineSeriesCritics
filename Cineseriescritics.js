let peliculas = [];

// Cargar peliculas desde JSON
async function cargarPeliculas() {
  const respuesta = await fetch("datos/peliculas.json");

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar peliculas.json");
  }

  peliculas = await respuesta.json();

  renderLista();
  history.replaceState({ page: "lista" }, "Cineseriescritics", "?lista");
}

// Renderizar lista
function renderLista() {
  const contenedor = document.getElementById("contenedorPeliculas");
  contenedor.innerHTML = "";
  peliculas.forEach(p => {
	const promedio = calcularPromedio(p.calificaciones);
	
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";
  
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name;
    img.className = "poster";

    const title = document.createElement("div");
    title.textContent = p.name;
    title.className = "movie-title";

    const anioEstreno = document.createElement("p");
    anioEstreno.textContent = "Estreno: " + p.anioEstreno;
	anioEstreno.classname = "movie-anioEstreno";
  
    const calif = document.createElement("p");
    calif.textContent = "Calificacion: " + promedio;
    calif.className = promedio >= 60 ? "aprobada" : "reprobada"

    tarjeta.onclick = () => 
    {
      mostrarDetalle(p);
      history.pushState({page:"detalle", id:p.id}, "Detalle - " + p.name, "?detalle="+p.id);
    };
	
    tarjeta.appendChild(title);
	tarjeta.appendChild(img);
    tarjeta.appendChild(anioEstreno);
    tarjeta.appendChild(calif);
  
    contenedor.appendChild(tarjeta);
  });
}

// Mostrar detalle
function mostrarDetalle(pelicula) 
{
  document.title = pelicula.name;
  document.getElementById("contenedorPeliculas").style.display = "none";

  /*
  // AGREGAR ESTAS 2 LÍNEAS:
  document.getElementById("sidebarIzquierda").style.display = "none";
  document.getElementById("sidebarDerecha").style.display = "none";
  */

  const detalle = document.getElementById("detallePelicula");
  const anioActual = new Date().getFullYear();
  const estrenoHace = anioActual - pelicula.anioEstreno;
  const promedio = calcularPromedio(pelicula.calificaciones);
  const critica = pelicula.critica || {};
  const puntosPositivos = critica.puntosPositivos || [];
  const puntosNegativos = critica.puntosNegativos || [];
  const puntosNeutrales = critica.puntosNeutrales || [];
  console.log("nombre pelicula: " + pelicula.name);
  console.log("trailer id: " + pelicula.trailerVideo);
  let htmlForTrailerVideo = "<a href=\"https://www.youtube.com/watch?v=" + pelicula.trailerVideo + "\" target=\"_blank\"><img src=\"https://img.youtube.com/vi/" + pelicula.trailerVideo + "/hqdefault.jpg\" alt=\"Trailer " + pelicula.name + "\"></a>";
  console.log("htmlForTrailerVideo : " + htmlForTrailerVideo);
  detalle.style.display = "block";
  detalle.innerHTML = `
    <h1 class="detail-title">${pelicula.name}</h1>
    <div class="detail-grid-container">

      <!-- Portada -->
	  <div class="poster-box detail-poster">
        <img src="${pelicula.image}" alt="${pelicula.name}" class="poster-detalle">
      </div>

      <!-- Datos de la Película -->
	  <div class="info-box detail-info">
        <p><strong>Año de Estreno:</strong> ${pelicula.anioEstreno}</p>
        <p><strong>Se estrenó hace:</strong> ${estrenoHace} años</p>
        <p><strong>País de Estreno:</strong> ${pelicula.paisestreno}</p>
        <p><strong>Duración:</strong> ${pelicula.duracion}</p>
        <p><strong>Género:</strong> ${pelicula.genero}</p>
        <p><strong>Dirección:</strong> ${pelicula.direccion}</p>
        <p><strong>Guionistas:</strong> ${pelicula.guion}</p>
        ${pelicula.adaptacionbasadoen ? `<p><strong>Basado en una adaptación:</strong> ${pelicula.adaptacionbasadoen}</p>` : ""}
        <p><strong>Producción:</strong> ${pelicula.produccion}</p>
	  </div>

      <!-- Calificaciones y Trailer -->
      <div class="detail-side">
        <!-- Calificaciones -->
        <div class="ratings-section">
            <div class="average-rating">
                <h3>Calificación CineSeriesCritics</h3>
                <p class="rating-value ${promedio >= 60 ? 'rating-passed' : 'rating-failed'}">${promedio}</p>
                <button class="btn-view-ratings" onclick="mostrarCalificacionesPorCategoria('${pelicula.name}')">Calificaciones por Categoría</button>
            </div>
            <div class="user-ratings">
                <h3>Calificación  Usuarios</h3>
                <p class="rating-value">Próximamente</p>
                <p class="rating-note">(Datos de la base de datos)</p>
            </div>
        </div>
        <!-- Trailer -->
        <div class="trailer-box">
            ${htmlForTrailerVideo } 	
        </div>
      </div>

	</div>

    <section class="critica detail-critica">
        <h2>Critica</h2>

        <section style="background-color: #dbeafe; padding: 12px; margin: 10px 0;">
            <h3 style="color: blue;">Puntos Positivos</h3>
            <ul style="color: blue;">
                ${
                    puntosPositivos.length
                    ? puntosPositivos.map(punto => `<li>${punto}</li>`).join("")
                    : "<li>No disponible</li>"
                }
            </ul>
        </section>

        <section style="background-color: #fee2e2; padding: 12px; margin: 10px 0;">
            <h3 style="color: red;">Puntos Negativos</h3>
            <ul style="color: red;">
                ${
                    puntosNegativos.length
                    ? puntosNegativos.map(punto => `<li>${punto}</li>`).join("")
                    : "<li>No disponible</li>"
                }
            </ul>
        </section>

        <section style="background-color: #dcfce7; padding: 12px; margin: 10px 0;">
            <h3 style="color: green;">Puntos Neutrales</h3>
            <ul style="color: green;">
                ${
                    puntosNeutrales.length
                    ? puntosNeutrales.map(punto => `<li>${punto}</li>`).join("")
                    : "<li>No disponible</li>"
                }
            </ul>
        </section>

        <section style="background-color: #f3f4f6; padding: 12px; margin: 10px 0;">
            <h3 style="color: black;">Conclusion</h3>
            <p style="color: black;">
            ${critica.conclusion || "No disponible"}
            </p>
        </section>
    </section>

  <div class="volver">
    <button onclick="history.back()">Volver</button>
  </div>
	<!-- texto  eRNpNxy84Ik mqqft2x_Aa4 
	-->
	<!-- 
		<div>
		  <a href="https://www.youtube.com/watch?v="${pelicula.trailerVideo} target="_blank">
			 <img src="https://img.youtube.com/vi/eRNpNxy84Ik/hqdefault.jpg" alt="Trailer Spiderman Un Nuevo Universo">
		  </a>
		</div>
		<div>
		  <a href="https://www.youtube.com/watch?v=eRNpNxy84Ik" target="_blank">
			 <img src="https://img.youtube.com/vi/eRNpNxy84Ik/hqdefault.jpg" alt="Trailer Spiderman Un Nuevo Universo">
		  </a>
		</div>
		<div>
			<a href="https://www.youtube.com/watch?v=mqqft2x_Aa4" target="_blank">
				<img src="https://img.youtube.com/vi/mqqft2x_Aa4/hqdefault.jpg" alt="Trailer The Batman">
			</a>
		</div>
	-->
</a>
  `;
}

// Volver a lista
function mostrarLista() {
  document.title = "Cineseriescritics";
  document.getElementById("detallePelicula").style.display = "none";
  document.getElementById("contenedorPeliculas").style.display = "grid";

  // AGREGAR ESTAS 2 LÍNEAS:
  document.getElementById("sidebarIzquierda").style.display = "block";
  document.getElementById("sidebarDerecha").style.display = "block"; 

}

// Manejo de historial
window.onpopstate = function(event) {
  if (event.state && event.state.page === "detalle") {
    const pelicula = peliculas.find(p => p.id === event.state.id);
    if (pelicula) mostrarDetalle(pelicula);
  } else {
    mostrarLista();
  }
};

function calcularPromedio(calificaciones) {
	if (!Array.isArray(calificaciones) || calificaciones.length === 0) return 0;
	let suma = 0.0;
	console.log("ini: " + suma);
	calificaciones.forEach(c => {
	  suma += c.calificacion; 
	});
	console.log("despues: " + suma);
	var promedio = calificaciones.length ? Math.round(suma / calificaciones.length) : 0;
	console.log("promedio: " + promedio);
	
	return promedio;
};

// Mostrar calificaciones por categoría
function mostrarCalificacionesPorCategoria(nombrePelicula) {
    const pelicula = peliculas.find(p => p.name === nombrePelicula);
    if (!pelicula) {
        console.log("Película no encontrada");
        return;
    }
    if (!pelicula.calificaciones || pelicula.calificaciones.length === 0) {
        console.log("No hay calificaciones disponibles para esta película: " + pelicula.name);
        return;
    } 

    const modalHTML = `
        <div class="modal-overlay" onclick="cerrarModalCalificaciones()" id="modalOverlay">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Calificaciones por Categoría - ${pelicula.name}</h2>
                    <button class="modal-close" onclick="cerrarModalCalificaciones()">✕</button>
                </div>
                <div class="modal-body">
                    <table class="ratings-table">
                        <thead>
                            <tr>
                                <th>Categoría</th>
                                <th>Calificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${pelicula.calificaciones.map(c => `
                                <tr>
                                    <td>${c.categoria}</td>
                                    <td>
                                       <span class="rating-badge ${c.calificacion >= 60 ? 'passed' : 'failed'}">
                                          ${c.calificacion}
                                       </span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="btn-close-modal" onclick="cerrarModalCalificaciones()">Cerrar</button>
                </div>
            </div>
        </div>
    `;

    const existingModal = document.getElementById('modalOverlay');
    if (existingModal) {
        existingModal.remove();
    }

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Cerrar modal de calificaciones
function cerrarModalCalificaciones() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.remove();
    }
}

// Inicializar
cargarPeliculas().catch(error => {
  console.error(error);
  document.getElementById("contenedorPeliculas").textContent =
    "No se pudieron cargar las películas.";
});