/* variables */
let inCantidad = +document.querySelector("#cantidad");
let inPrecio = +document.querySelector("#precio");
let inColor = document.querySelector("#color");
const pFinal = +document.querySelector("#precio-final");

const pTotal = 600000 * +document.querySelector("#cantidad");

/* funcion para mostrar total */
function mostrar(pTotal) {
  pFinal.innerHTML = +pTotal;
}
