const spanNode = document.getElementsByTagName("span");
function mostrar() {
  const cantidad = +document.getElementsByTagName("input")[0].value;
  spanNode[0].innerHTML = "$" + 60000 * cantidad;
  spanNode[1].innerHTML = cantidad; 
 
  const color = document.querySelector("#color");
  let paletaColor = document.querySelector("#paleta-color");

  paletaColor.style.backgroundColor = color.value;
}
