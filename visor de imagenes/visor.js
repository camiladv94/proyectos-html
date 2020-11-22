window.onload = function() {
  visor1 = this.document.getElementById("visor");
  miTitulo = this.document.getElementById("titulo");
};

function mifoto(num) {
  let urlLink = "paisajes/foto" + num + ".jpg";
  document.images["fotovisor"].src = urlLink;
  alternativeText = document.images[num].alt;
  miTitulo.innerHTML = urlLink;
}