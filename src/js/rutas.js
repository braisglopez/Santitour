var mapa = document.getElementById("map");
var cadroEsquerda = document.getElementById("contenedorRutas");

altura = window.innerHeight - mapa.getBoundingClientRect().top;
mapa.style.height = altura + "px";
cadroEsquerda.style.height = altura + "px";

var icono = L.Icon.extend({
  options: {
    shadowUrl: "../imagenes/rutas_tours/sombra-logo.svg",
    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor: [-15, -40], // point from which the popup should open relative to the iconAnchor
  },
});

var iconoAndar1 = new icono({
    iconUrl: "../imagenes/rutas_tours/logo-senderismo.svg",
    shadowSize: [34, 34],
    shadowAnchor: [17, 17],
  }),
  iconoAndar2 = new icono({
    iconUrl: "../imagenes/rutas_tours/logo-senderismo.svg",
    shadowSize: [38, 38],
    shadowAnchor: [19, 19],
  });

var iconoCiclismo1 = new icono({
    iconUrl: "../imagenes/rutas_tours/logo-ciclismo.svg",
    shadowSize: [34, 34],
    shadowAnchor: [17, 17],
  }),
  iconoCiclismo2 = new icono({
    iconUrl: "../imagenes/rutas_tours/logo-ciclismo.svg",
    shadowSize: [38, 38],
    shadowAnchor: [19, 19],
  });

var iconoActivo = L.Icon.extend({
  options: {
    shadowUrl: "../imagenes/rutas_tours/sombra-logo-activo.svg",
    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 28], // point of the icon which will correspond to marker's location
    popupAnchor: [-15, -40], // point from which the popup should open relative to the iconAnchor
  },
});

var iconoAndarActivo1 = new iconoActivo({
  iconUrl: "../imagenes/rutas_tours/logo-senderismo-activo.svg",
  shadowSize: [42, 42],
  shadowAnchor: [21, 30],
});

var iconoCiclismoActivo1 = new iconoActivo({
  iconUrl: "../imagenes/rutas_tours/logo-ciclismo-activo.svg",
  shadowSize: [42, 42],
  shadowAnchor: [21, 30],
});

openStreetMaps = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

googleHybrid = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

googleSat = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});

var baseMaps = {
  Rúas: openStreetMaps,
  Híbrido: googleHybrid,
  Satélite: googleSat,
};

senderismo = L.layerGroup([]);
ciclismo = L.layerGroup([]);

cargarRutas();

function cargarRutas() {
  fetch("../../baseDatos/rutas.json").then((Response) => {
    Response.json().then(mostrarRutas);
  });
}

function mostrarRutas(jsonObj) {
  let rutas = "";
  for (x in jsonObj.Rutas) {
    rutas +=
      '<div class="ruta" onMouseOver=\'mouseOver("' +
      jsonObj.Rutas[x].tipo +
      '",' +
      jsonObj.Rutas[x].coordenadas[0] +
      "," +
      jsonObj.Rutas[x].coordenadas[1] +
      ")' " +
      "onMouseOut='mouseOut(\"" +
      jsonObj.Rutas[x].tipo +
      '",' +
      jsonObj.Rutas[x].coordenadas[0] +
      "," +
      jsonObj.Rutas[x].coordenadas[1] +
      ")'>" +
      '<article class="cuadroslaterais">' +
      "<h3>" +
      jsonObj.Rutas[x].titulo +
      "</h3>" +
      "<p>" +
      jsonObj.Rutas[x].descripcion +
      "</p>" +
      '<section class="cuadrosinteriores">' +
      '<div class="cuadrointerior">' +
      '<h4 style="font-weight: bold">Distancia</h4>' +
      "<h4>" +
      jsonObj.Rutas[x].distancia +
      "</h4>" +
      "</div>" +
      '<div class="cuadrointerior">' +
      '<h4 style="font-weight: bold">Desnivel +</h4>' +
      "<h4>" +
      jsonObj.Rutas[x].desnivel +
      "</h4>" +
      "</div>" +
      '<div class="cuadrointerior">' +
      '<h4 style="font-weight: bold">Valoración</h4>' +
      "<h4>" +
      jsonObj.Rutas[x].valoracion +
      ' | <img class="i" src="../imagenes/rutas_tours/star.svg"> </h4>' +
      "</section>" +
      "</article>" +
      '<figure class="imaxe">' +
      "<img src=" +
      jsonObj.Rutas[x].imaxe +
      " />" +
      "</figure>" +
      "</div>";

    var marker;

    // Establecemos un marcador coas coordenadas da ruta
    if (jsonObj.Rutas[x].tipo === "senderismo") {
      marker = L.marker(
        [jsonObj.Rutas[x].coordenadas[0], jsonObj.Rutas[x].coordenadas[1]],
        { icon: iconoAndar1 }
      )
        .addEventListener("mouseover", (e) => {
          e.target.setIcon(iconoAndar2);
        })
        .addEventListener("mouseout", (e) => {
          e.target.setIcon(iconoAndar1);
        });

      senderismo.addLayer(marker);
    } else {
      marker = L.marker(
        [jsonObj.Rutas[x].coordenadas[0], jsonObj.Rutas[x].coordenadas[1]],
        { icon: iconoCiclismo1 }
      )
        .addEventListener("mouseover", (e) => {
          e.target.setIcon(iconoCiclismo2);
        })
        .addEventListener("mouseout", (e) => {
          e.target.setIcon(iconoCiclismo1);
        });
      ciclismo.addLayer(marker);
    }
  }

  var contenedor = document.getElementById("contenedorRutas");
  contenedor.innerHTML = rutas;
}

var overlayLayers = {
  Senderismo: senderismo,
  Ciclismo: ciclismo,
};

var map = L.map("map", {
  center: [43.0, -8.57],
  zoom: 9,
  layers: [openStreetMaps, senderismo, ciclismo],
});

L.control.layers(baseMaps, overlayLayers).addTo(map);

map.attributionControl.setPrefix("");

function mouseOver(tipo, lat, lng) {
  var allMarkers;
  if (tipo === "senderismo") {
    allMarkers = senderismo.getLayers();
    var icono = iconoAndarActivo1;
  } else {
    allMarkers = ciclismo.getLayers();
    console.log("ciclismo");
    var icono = iconoCiclismoActivo1;
  }

  allMarkers.forEach(function (layer) {
    if (layer.getLatLng().lat === lat && layer.getLatLng().lng === lng) {
      layer.setIcon(icono);
    }
  });
}

function mouseOut(tipo, lat, lng) {
  var allMarkers;
  if (tipo === "senderismo") {
    allMarkers = senderismo.getLayers();
    var icono = iconoAndar1;
  } else {
    allMarkers = ciclismo.getLayers();
    console.log("ciclismo");
    var icono = iconoCiclismo1;
  }

  allMarkers.forEach(function (layer) {
    if (layer.getLatLng().lat === lat && layer.getLatLng().lng === lng) {
      layer.setIcon(icono);
    }
  });
}
