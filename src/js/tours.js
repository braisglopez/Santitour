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
          /*'<img src="' +
          tours[i].getElementsByTagName("IMAXE2")[0].textContent +
          '" class="imaxe-galeria" />' +
          '<img src="' +
          tours[i].getElementsByTagName("IMAXE3")[0].textContent +
          '" class="imaxe-galeria" />' +*/
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
/*
const imagenes = document.querySelectorAll(".imaxe-galeria");
const imagenes2 = document.querySelectorAll(".imaxe-galeria2");
//const imagenes3 = document.querySelectorAll(".imaxe-galeria3");
const intervalo = 4000; // 4 segundos

let indice = 0;

function mostrarImagen() {
  console.log(imagenes[indice]);
  imagenes[indice].classList.add("mostrando");
  setTimeout(() => {
    imagenes[indice].classList.remove("mostrando");
    indice++;
    if (indice >= imagenes.length) {
      indice = 0;
    }
    mostrarImagen();
  }, intervalo);
}

let indice2 = 0;

function mostrarImagen2() {
  imagenes2[indice2].classList.add("mostrando");
  setTimeout(() => {
    imagenes2[indice2].classList.remove("mostrando");
    indice2++;
    if (indice2 >= imagenes2.length) {
      indice2 = 0;
    }
    mostrarImagen2();
  }, intervalo);
}

mostrarImagen();
mostrarImagen2();

let indice3 = 0;

function mostrarImagen3() {
  imagenes3[indice3].classList.add("mostrando");
  setTimeout(() => {
    imagenes3[indice3].classList.remove("mostrando");
    indice3++;
    if (indice3 >= imagenes3.length) {
      indice3 = 0;
    }
    mostrarImagen3();
  }, intervalo);
}


mostrarImagen3();

const imagenes = $('.imaxe-galeria');
const imagenes2 = $('.imaxe-galeria2');
const imagenes3 = $('.imaxe-galeria3');
const intervalo = 4000;

function mostrarImagenes(imagenes, indice) {
  imagenes.eq(indice).addClass('mostrando');
  setTimeout(() => {
    imagenes.eq(indice).removeClass('mostrando');
    mostrarImagenes(imagenes, (indice + 1) % imagenes.length);
  }, intervalo);
}

mostrarImagenes(imagenes, 0);
mostrarImagenes(imagenes2, 0);
mostrarImagenes(imagenes3, 0);

Explicación: En este código, en lugar de utilizar document.querySelectorAll, usamos la función $ de jQuery para seleccionar las imágenes con la clase correspondiente.

Luego, creamos una función mostrarImagenes que toma dos argumentos: las imágenes a mostrar y el índice de la imagen actual. Utilizamos el método eq de jQuery para obtener el elemento correspondiente al índice actual y añadimos la clase "mostrando".

En lugar de tener tres funciones mostrarImagen, utilizamos un único llamado a la función mostrarImagenes para cada grupo de imágenes, pasando las imágenes y el índice inicial correspondiente. Además, en lugar de utilizar variables globales para el índice, utilizamos el operador módulo % para obtener el siguiente índice de forma circular.

Finalmente, eliminamos la variable intervalo y utilizamos directamente el valor numérico correspondiente en el código.

De esta manera, hemos optimizado y simplificado el código utilizando las funciones y métodos de jQuery.*/
