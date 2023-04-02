function buscar() {
  $.post("../../baseDatos/actividades.json", function (datos) {
    var actividadesFiltradas = $(datos.Actividades).filter(function (idx) {
      if ($("#desplegable").val() === "todo") {
        return datos.Actividades[idx].titulo.includes($("#buscador").val());
      } else {
        return (
          datos.Actividades[idx].tipo === $("#desplegable").val() &&
          datos.Actividades[idx].titulo.includes($("#buscador").val())
        );
      }
    });

    var acts = "";
    if (actividadesFiltradas.length > 0) {
      $("#numActividades").html(actividadesFiltradas.length + " Actividades");
    } else {
      $("#numActividades").html("Non hai actividades");
    }

    $(actividadesFiltradas).each(function () {
      acts +=
        '<div class="bg-grey col-xl-5 rounded ' +
        this.tipo +
        ' mx-2">\n' +
        '<div class="row">\n' +
        '<figure class="col-4 p-0 m-0">\n' +
        '<img src="' +
        this.imaxe +
        '" />' +
        "</figure>\n" +
        '<div class="col-8 ps-3 pt-2 d-flex flex-column justify-content-between">\n <div>' +
        '<h3 class="mb-1">' +
        this.titulo +
        "</h3>\n" +
        '<p class="m-0 fw-lighter">' +
        this.data +
        "</p>" +
        '<p class="mt-2">' +
        this.descripcion +
        "</p>" +
        "</div>";
      if (this.informacion !== "") {
        acts +=
          '<p> <u> <a href="' +
          this.informacion +
          '" target="_blank">Máis información</a>' +
          "</u></p>\n";
      }
      acts += "</div>\n</div>\n</div>";
    });

    var encabezado = $("section div").has("h4");
    $("section div").not(encabezado).remove();
    $("#contenedor-nActividades").before(acts);
  });
}

$(document).ready(function () {
  $("#botonBuscar").on("click", buscar);
  $("#desplegable").on("change", buscar);
  buscar();
});
