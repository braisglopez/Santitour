document.getElementById("expandir1").addEventListener("click", function () {
  var contenido = document.getElementById("contenido1");
  // window.getComputedStyle devolve un obxeto que representa o estilo calculado dun elemento
  var estilo = window.getComputedStyle(contenido);
  if (estilo.display === "none") {
    contenido.style.display = "block";
    this.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    this.innerHTML = "Ler máis";
  }
});

document.getElementById("expandir2").addEventListener("click", function () {
  var contenido = document.getElementById("contenido2");
  var estilo = window.getComputedStyle(contenido);
  if (estilo.display === "none") {
    contenido.style.display = "block";
    this.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    this.innerHTML = "Ler máis";
  }
});

document.getElementById("expandir3").addEventListener("click", function () {
  var contenido = document.getElementById("contenido3");
  var estilo = window.getComputedStyle(contenido);
  if (estilo.display === "none") {
    contenido.style.display = "block";
    this.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    this.innerHTML = "Ler máis";
  }
});
