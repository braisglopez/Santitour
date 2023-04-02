function vermais(contenido, boton) {
  // window.getComputedStyle devolve un obxeto que representa o estilo calculado dun elemento
  var estilo = window.getComputedStyle(contenido);
  if (estilo.display === "none") {
    contenido.style.display = "block";
    boton.innerHTML = "Ler menos";
  } else {
    contenido.style.display = "none";
    boton.innerHTML = "Ler máis";
  }
}

document.getElementById("expandir1").addEventListener("click", (e) => {
  vermais(document.getElementById("contenido1"), e.target);
});

document.getElementById("expandir2").addEventListener("click", (e) => {
  vermais(document.getElementById("contenido2"), e.target);
});

document.getElementById("expandir3").addEventListener("click", (e) => {
  vermais(document.getElementById("contenido3"), e.target);
});

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#historia",
});
