const imagenes = document.querySelectorAll(".imaxe-galeria");
const intervalo = 4000; // 4 segundos

let indice = 0;

function mostrarImagen() {
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

mostrarImagen();
