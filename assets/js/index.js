const spanNode = document.getElementsByTagName("span");

/* funcion para mostrar total */
function mostrar() {
  const cantidad = +document.getElementsByTagName("input")[0].value;
  spanNode[0].innerHTML = "$" + 60000 * cantidad;

  const color = document.querySelector("#color");
  let paletaColor = document.querySelector("#paleta-color");

  paletaColor.style.backgroundColor = color.value;
}
