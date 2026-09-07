const peliculas = [
  { id: 1, 
    name: "TOY STORY 4", 
	anioEstreno: 2019, 
	image: "images/ToyStory4.jpg",
	paisestreno: "Estados Unidos",
    duracion: "1h 40min",
    genero: "Animacion",
    direccion: "Josh Cooley",
    guion: "Andrew Stanton, Sthephany Folsom",
    produccion: "Mark Nielsen, Jonas Rivera, Galyn Susman",	
	trailerVideo: "JfHU2qYfHkk",
    calificaciones: [
        {categoria: "Animacion", calificacion: 100},
        {categoria: "Graficos", calificacion: 100},
        {categoria: "Diseño", calificacion: 100},
        {categoria: "Escenarios", calificacion: 100},
        {categoria: "Fotografia", calificacion: 100},
        {categoria: "Sonido", calificacion: 100},
        {categoria: "Musica", calificacion: 98},
        {categoria: "Comedia", calificacion: 90},
        {categoria: "Drama", calificacion: 85},
        {categoria: "Tematica", calificacion: 100},
        {categoria: "Creatividad", calificacion: 95},
        {categoria: "Imaginacion", calificacion: 95},
        {categoria: "Personajes", calificacion: 75},
        {categoria: "Argumento", calificacion: 90},
        {categoria: "Guion", calificacion: 86},
        {categoria: "Direccion", calificacion: 95},
        {categoria: "Produccion", calificacion: 100}
    ]
   },
  { id: 2, 
    name: "JUEGO DE GEMELAS", 
	anioEstreno: 1998,
	image: "images/JuegoDeGemelas.jpg",
	paisestreno: "Estados Unidos", 
	duracion: "2h 7min",
	genero: "Comedia",
	direccion: "Nancy Meyers",
	guion: "David Swift, Nancy Meyers, Charles Shyer",
	adaptacionbasadoen: "Erich Kastner",
	produccion: "Charles Shyer",
	trailerVideo: "vt_lEZM2ZmQ",
    calificaciones: [
        {categoria: "Fotografia", calificacion: 100}
    ],
    critica: {
        puntosPositivos: [
            "La actuación de las protagonistas es destacable",
            "La película tiene buenos momentos de comedia",
            "La historia resulta entretenida"
        ],

        puntosNegativos: [
            "Algunas situaciones son predecibles",
            "La duración puede resultar excesiva"
        ],

        puntosNeutrales: [
            "La película combina comedia y drama",
            "La música acompaña correctamente las escenas"
        ],

        conclusion: "En general, es una película ligera y agradable."
    }
   },
  { id: 3, 
    name: "SPIDERMAN UN NUEVO UNIVERSO", 
	anioEstreno: 2018,
	image: "images/SpidermanUnNuevoUniverso.jpg",
	paisestreno: "Estados Unidos",
    duracion: "1h 57min",
    genero: "Animacion",
    direccion: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    guion: "Phil Lord, Rodney Rothman, Dan Slott, Meghan Mallory",
    adaptacionbasadoen: "Stan Lee, Brian Michael Bendis, Sara Pitchelli, Steve Ditko",
    produccion: "Avi Arad, Amy Pascal, Phil Lord, Christhoper Miller, Christina Stenberg",
    trailerVideo: "eRNpNxy84Ik",	
    calificaciones: [
        {categoria: "Animacion", calificacion: 100},
        {categoria: "Graficos", calificacion: 100},
        {categoria: "Escenarios", calificacion: 100},
        {categoria: "Diseño", calificacion: 100},
        {categoria: "Creatividad", calificacion: 100},
        {categoria: "Imaginacion", calificacion: 100},
        {categoria: "Fotografia", calificacion: 100},
        {categoria: "Sonido", calificacion: 100},
        {categoria: "Musica", calificacion: 100},
        {categoria: "Accion", calificacion: 100},
        {categoria: "Adaptacion", calificacion: 100},
        {categoria: "Personajes", calificacion: 98},
        {categoria: "Argumento", calificacion: 97},
        {categoria: "Guion", calificacion: 99},
        {categoria: "Direccion", calificacion: 100},
        {categoria: "Produccion", calificacion: 100}
    ]
  },
  { id: 4,
    name: "HA NACIDO UNA ESTRELLA 2018", 
	anioEstreno: 2018,
	image: "images/HaNacidoUnaEstrella2018.jpg",
	paisestreno: "Estados Unidos",
    duracion: "2h 16min",
    genero: "Drama",
    direccion: "Bradley Cooper",
    guion: "Will Fetters, Bradley Cooper, Eric Roth",
    produccion: "Bill Gerber, Jon Peters, Todd Phillips, Lynette Howell Taylor",
	trailerVideo: "RCSf90JrROk",
	calificaciones: [
        {categoria: "Fotografia", calificacion: 100},
        {categoria: "Montaje", calificacion: 100},
        {categoria: "Sonido", calificacion: 60},
        {categoria: "Musica", calificacion: 60},
		{categoria: "Creatividad", calificacion: 10},
        {categoria: "Imaginacion", calificacion: 10},
        {categoria: "Drama", calificacion: 50},
        {categoria: "Actuaciones", calificacion: 65},
        {categoria: "Personajes", calificacion: 20},
        {categoria: "Argumento", calificacion: 50},
        {categoria: "Guion", calificacion: 50},
        {categoria: "Direccion", calificacion: 60},
        {categoria: "Produccion", calificacion: 70}
    ]
  },
  { id: 5,
	name: "THE DRAMA", anioEstreno: 2026,
	image: "images/TheDrama.jpg",
	paisestreno: "Estados Unidos",
    duracion: "1h 46min",
	genero: "Drama",
	direccion: "Kristoffer Borgli",
	guion: "Kristoffer Borgli",
	produccion: "Lars Knudsen, Ari Aster, Tyler Campsllone",
	trailerVideo: "S5gvRudXJA4",
	calificaciones: [
        {categoria: "Fotografia", calificacion: 80},
        {categoria: "Vestuario", calificacion: 70},
        {categoria: "Montaje", calificacion: 80},
        {categoria: "Sonido", calificacion: 80},
        {categoria: "Musica", calificacion: 70},
        {categoria: "Drama", calificacion: 90},
        {categoria: "Comedia", calificacion: 60},
        {categoria: "Creatividad", calificacion: 80},
        {categoria: "Imaginacion", calificacion: 80},
        {categoria: "Actuaciones", calificacion: 90},
        {categoria: "Personajes", calificacion: 80},
        {categoria: "Argumento", calificacion: 70},
        {categoria: "Guion", calificacion: 70},
        {categoria: "Direccion", calificacion: 90},
        {categoria: "Produccion", calificacion: 80}
    ]
  },
  { id: 6,
    name: "LA FUENTE DE LA JUVENTUD", anioEstreno: 2025,
	image: "images/LaFuenteDeLaJuventud.jpg",
	paisestreno: "Reino Unido",
    duracion: "2h 5min",
    genero: "Aventuras",
    direccion: "Guy Ritchie",
    guion: "James Vanderbilt",
	produccion: "Ivan Atkinson, David Ellinson, Dana Goldberg, Don Granger, Jake Myers, Paul Neinstein, Guy Ritchie, William Sherak, James Vanderbilt, Tripp Vinson",
	trailerVideo: "O_HfajVNPlU"
  },
  { id: 7,
	name: "EL SECRETO DEL ABISMO", anioEstreno: 2025,
	image: "images/ElSecretoDelAbismo.jpg",
	paisestreno: "Estados Unidos",
	duracion: "2h 7min",
    genero: "Thriller",
	direccion: "Scott Derrickson",
	guion: "Zach Dean",
	produccion: "Scott Derrickson, Zach Dean, David Ellison, Dana Goldberg, Don Granger, C.Robert Cargill, Sherryl Clark, Adam Kolbrenner,Gregory Goodman",
	trailerVideo: "ekhpLMtVi8g"
  },
  { id: 8,
	name: "EL DIABLO VISTE A LA MODA", anioEstreno: 2006,
	image: "images/ElDiabloVisteALaModa.jpg",
	paisestreno: "Estados Unidos",
    duracion: "1h 46min",
    genero: "Drama",
    direccion: "David Frankel",
    guion: "Aline Broosh MacKenna",
	adaptacionbasadoen: "Lauren Weisberger",
	produccion: "Wendy Finerman",
	trailerVideo: "GJVRO3gc1f0"
  },
  { id: 9,
	name: "JURASSIC PARK 3", anioEstreno: 2001,
	image: "images/JurassicPark3.jpg",
	paisestreno: "Estados Unidos",
    duracion: "1h 31min",
    genero: "Aventuras",
    direccion: "Joe Johnston",
    guion: "Peter Buchman, Alexander Payne, Jim Taylor",
    produccion:"Kathleen Kennedy, Larry J. Franco",
    trailerVideo: "FBRWNdXpG1g"	
  },
  { id: 10, 
    name: "TOY STORY OLVIDADOS EN EL TIEMPO", 
	anioEstreno: 2014, 
	image: "images/ToyStoryOlvidadosEnElTiempo.jpg",
	paisestreno: "Estados Unidos",
    duracion: "22min",
    genero: "Animacion",
    direccion: "Steve Purcell",
    guion: "Steve Purcell",
    produccion: "Galyn Susman",
    trailerVideo: "WCGicFh_DVA",		
    calificaciones: [
        {categoria: "Animacion", calificacion: 95},
        {categoria: "Graficos", calificacion: 90},
        {categoria: "Diseño", calificacion: 90},
        {categoria: "Escenarios", calificacion: 90},
        {categoria: "Fotografia", calificacion: 90},
        {categoria: "Accion", calificacion: 70},
        {categoria: "Sonido", calificacion: 60},
        {categoria: "Musica", calificacion: 60},
        {categoria: "Creatividad", calificacion: 40},
        {categoria: "Imaginacion", calificacion: 40},
        {categoria: "Personajes", calificacion: 20},
        {categoria: "Argumento", calificacion: 40},
        {categoria: "Guion", calificacion: 20},
        {categoria: "Direccion", calificacion: 20},
        {categoria: "Produccion", calificacion: 20}
    ]
   },
  { id: 11, 
    name: "TOY STORY VACACIONES EN HAWAII", 
	anioEstreno: 2011, 
	image: "images/ToyStoryVacacionesEnHawaii.jpg",
	paisestreno: "Estados Unidos",
    duracion: "6min",
    genero: "Animacion",
    direccion: "Gary Rydstrom",
    guion: "Erik Benson, Jason Katz, Gaty Rydstrom",
    produccion: "Galyn Susman",
    trailerVideo: "kGMwfkpMRTM",		
    calificaciones: [
        {categoria: "Animacion", calificacion: 100},
        {categoria: "Graficos", calificacion: 100},
        {categoria: "Diseño", calificacion: 70},
        {categoria: "Escenarios", calificacion: 70},
        {categoria: "Fotografia", calificacion: 80},
        {categoria: "Sonido", calificacion: 50},
        {categoria: "Musica", calificacion: 50},
        {categoria: "Comedia", calificacion: 90},
        {categoria: "Creatividad", calificacion: 50},
        {categoria: "Imaginacion", calificacion: 50},
        {categoria: "Personajes", calificacion: 50},
        {categoria: "Argumento", calificacion: 60},
        {categoria: "Guion", calificacion: 60},
        {categoria: "Direccion", calificacion: 60},
        {categoria: "Produccion", calificacion: 60}
    ]
   },
   { id: 12, 
    name: "TOY STORY TOONS", 
	anioEstreno: 2011, 
	image: "images/ToyStoryToons.jpg",
	paisestreno: "Estados Unidos",
    duracion: "7min",
    genero: "Animacion",
    direccion: "Agust MacLane",
    guion: "Agus MacLane, Josh Cooley",
    produccion: "Kimberly Addams",
    trailerVideo: "6fM-4dLXtZo",		
    calificaciones: [
        {categoria: "Animacion", calificacion: 80},
        {categoria: "Graficos", calificacion: 80},
        {categoria: "Diseño", calificacion: 60},
        {categoria: "Escenarios", calificacion: 60},
        {categoria: "Fotografia", calificacion: 60},
        {categoria: "Musica", calificacion: 40},
        {categoria: "Sonido", calificacion: 40},
        {categoria: "Voces", calificacion: 35},
        {categoria: "Creatividad", calificacion: 05},
        {categoria: "Imaginacion", calificacion: 05},
        {categoria: "Personajes", calificacion: 30},
        {categoria: "Argumento", calificacion: 10},
        {categoria: "Guion", calificacion: 10},
        {categoria: "Direccion", calificacion: 10},
        {categoria: "Produccion", calificacion: 10}
    ]
   },
   { id: 13, 
    name: "TOY STORY FIESTA SAURIUS REX", 
	anioEstreno: 2012, 
	image: "images/ToyStoryFiestaSauriusRex.jpg",
	paisestreno: "Estados Unidos",
    duracion: "7min",
    genero: "Animacion",
    direccion: "Mark Waish, Dylan Brown",
    guion: "Mark Waish",
    produccion: "Kimberly Addams",
    trailerVideo: "DatOXkTIAK4",		
    calificaciones: [
        {categoria: "Animacion", calificacion: 80},
        {categoria: "Graficos", calificacion: 60},
        {categoria: "Diseño", calificacion: 60},
        {categoria: "Escenarios", calificacion: 60},
        {categoria: "Creatividad", calificacion: 60},
        {categoria: "Imaginacion", calificacion: 60},
        {categoria: "Fotografia", calificacion: 70},
        {categoria: "Sonido", calificacion: 50},
        {categoria: "Musica", calificacion: 50},
        {categoria: "Comedia", calificacion: 70},
        {categoria: "Personajes", calificacion: 40},
        {categoria: "Argumento", calificacion: 40},
        {categoria: "Guion", calificacion: 30},
        {categoria: "Direccion", calificacion: 30},
        {categoria: "Produccion", calificacion: 30}
	]
   },
   { id: 14, 
    name: "TOY STORY FIESTA DE TERROR", 
	anioEstreno: 2012, 
	image: "images/ToyStoryDeTerror.jpg",
	paisestreno: "Estados Unidos",
    duracion: "22min",
    genero: "Animacion",
    direccion: "Agust MacLane",
    guion: "Agust MacLane",
    produccion: "Galym Susman",
    trailerVideo: "0PmoiC8ensA",		
    calificaciones: [
        {categoria: "Animacion", calificacion: 100},
        {categoria: "Graficos", calificacion: 100},
        {categoria: "Diseño", calificacion: 100},
        {categoria: "Escenarios", calificacion: 100},
        {categoria: "Creatividad", calificacion: 60},
        {categoria: "Imaginacion", calificacion: 60},
        {categoria: "Fotografia", calificacion: 90},
        {categoria: "Sonido", calificacion: 50},
        {categoria: "Musica", calificacion: 50},
        {categoria: "Suspenso", calificacion: 10},
        {categoria: "Intriga", calificacion: 15},
        {categoria: "Tension", calificacion: 20},
        {categoria: "Comedia", calificacion: 60},
        {categoria: "Drama", calificacion: 50},
        {categoria: "Argumento", calificacion: 50},
		{categoria: "Personajes", calificacion: 30},
		{categoria: "Guion", calificacion: 20},
		{categoria: "Direccion", calificacion: 50},
		{categoria: "Produccion", calificacion: 50}
	]
   },
   { id: 15, 
    name: "TOY STORY LAMP LIFE", 
	anioEstreno: 2012, 
	image: "images/ToyStoryLampLife.jpg",
	paisestreno: "Estados Unidos",
    duracion: "7min",
    genero: "Animacion",
    direccion: "Valerie LaPointe",
    guion: "Valerie LaPointe",
    produccion: "Natalie Lyon",
    trailerVideo: "kGzp0p7T64M",	
    calificaciones: [
        {categoria: "Animacion", calificacion: 100},
        {categoria: "Graficos", calificacion: 100},
        {categoria: "Diseño", calificacion: 100},
        {categoria: "Escenarios", calificacion: 100},
        {categoria: "Comedia", calificacion: 95},
        {categoria: "Fotografia", calificacion: 90},
        {categoria: "Sonido", calificacion: 70},
        {categoria: "Musica", calificacion: 70},
        {categoria: "Drama", calificacion: 70},
        {categoria: "Creatividad", calificacion: 100},
        {categoria: "Imaginacion", calificacion: 100},
        {categoria: "Personajes", calificacion: 80},
		{categoria: "Argumento", calificacion: 80},
		{categoria: "Guion", calificacion: 80},
		{categoria: "Direccion", calificacion: 80},
		{categoria: "Produccion", calificacion: 80}
	]
   },
];

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

    tarjeta.onclick = () => {
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
function mostrarDetalle(pelicula) {
  document.title = pelicula.name;
  document.getElementById("contenedorPeliculas").style.display = "none";
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
    <h1>${pelicula.name}</h1>
	<div class="detalle-container">
	  <div class="poster-box">
		 <img src="${pelicula.image}" alt="${pelicula.name}" class="poster-detalle">
	  </div>

	  <div class="info-box">
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

    <div class="trailer-section">
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
      <div class="trailer-box">
        ${htmlForTrailerVideo } 	
      </div>
    </div>

	</div>

<section class="critica" style="border: 2px solid #000; padding: 20px; margin-top: 25px;">
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
                                    <td><span class="rating-badge">${c.calificacion}</span></td>
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
renderLista();
history.replaceState({page:"lista"},"Cineseriescritics","?lista");
