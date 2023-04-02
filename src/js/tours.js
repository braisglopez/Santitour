function cargarTours() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var xmlDoc = this.responseXML;
      var t = "";
      var tours = xmlDoc.getElementsByTagName("TOUR");

      for (var i = 0; i < tours.length; i++) {
        t +=
          '<div class="caja">' +
          "<h2>" +
          tours[i].getElementsByTagName("TITULO")[0].textContent +
          "</h2>" +
          "<p>" +
          tours[i].getElementsByTagName("DESCRICION")[0].textContent +
          "</p>" +
          '<div class="contenedor">' +
          '<div class="info">' +
          "<ul>" +
          '<li> <span style="font-weight: bold">Horario:</span>' +
          tours[i].getElementsByTagName("HORARIO")[0].textContent +
          "</li>" +
          '<li> <span style="font-weight: bold">Lugar:</span>' +
          tours[i].getElementsByTagName("LUGAR")[0].textContent +
          "</li>" +
          '<li> <span style="font-weight: bold">Idiomas:</span>' +
          tours[i].getElementsByTagName("IDIOMAS")[0].textContent +
          "</li>" +
          '<li> <span style="font-weight: bold">Prezo:</span>' +
          tours[i].getElementsByTagName("PREZO")[0].textContent +
          "</li>" +
          "</ul>" +
          "</div>" +
          '<div class="imaxe">' +
          '<img src="' +
          tours[i].getElementsByTagName("IMAXE1")[0].textContent +
          '" class="imaxe-galeria" />' +
          "</div>" +
          "</div>" +
          "</div>";
      }
      document.getElementsByClassName("caja-grande")[0].innerHTML = t;
    }
  };
  xhttp.open("GET", "../../baseDatos/tours.xml", true);
  xhttp.send();
}

cargarTours();
