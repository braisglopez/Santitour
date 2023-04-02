function validarCorreo() {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.getElementById("campoCorreo").value;
  document.getElementById("botonEnviar").disabled =
    !expresionRegular.test(email);
}
