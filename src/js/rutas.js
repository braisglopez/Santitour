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

var map = L.map("map").setView([42.880468, -8.545556], 9);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "",
}).addTo(map);

map.attributionControl.setPrefix("");

var marker = L.marker([43.478916, -8.244463], { icon: iconoAndar1 })
  .addTo(map)
  .addEventListener("mouseover", () => {
    marker.setIcon(iconoAndar2);
  })
  .addEventListener("mouseout", () => {
    marker.setIcon(iconoAndar1);
  });

var marker2 = L.marker([42.884852, -8.549493], { icon: iconoAndar1 })
  .addTo(map)
  .addEventListener("mouseover", () => {
    marker2.setIcon(iconoAndar2);
  })
  .addEventListener("mouseout", () => {
    marker2.setIcon(iconoAndar1);
  });

var marker3 = L.marker([42.898786, -8.444581], { icon: iconoAndar1 })
  .addTo(map)
  .addEventListener("mouseover", () => {
    marker3.setIcon(iconoAndar2);
  })
  .addEventListener("mouseout", () => {
    marker3.setIcon(iconoAndar1);
  });

var marker4 = L.marker([42.807091, -8.446954], { icon: iconoCiclismo1 })
  .addTo(map)
  .addEventListener("mouseover", () => {
    marker4.setIcon(iconoCiclismo2);
  })
  .addEventListener("mouseout", () => {
    marker4.setIcon(iconoCiclismo1);
  });
