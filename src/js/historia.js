document.getElementById("expandir1").addEventListener("click", function () {
  var contenido = document.getElementById("contenido1");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
    this.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    this.innerHTML = "Ler máis";
  }
});

document.getElementById("expandir2").addEventListener("click", function () {
  var contenido = document.getElementById("contenido2");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
    this.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    this.innerHTML = "Ler máis";
  }
});

document.getElementById("expandir3").addEventListener("click", function () {
  var contenido = document.getElementById("contenido3");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
    this.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    this.innerHTML = "Ler máis";
  }
});
