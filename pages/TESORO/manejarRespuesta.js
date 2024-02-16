import { Preguntar } from "./Preguntar";
import { actualizarpJugadorTesoro, pJugadorTesoro } from "./TESORO";

export function manejarRespuesta(esBuena, preguntas, indice) {

  const divTodoPregunta = document.querySelector(".divTodoPregunta")

  if (esBuena) {
    actualizarpJugadorTesoro(10);
  } else {
    actualizarpJugadorTesoro(-5);
  }

  divTodoPregunta.innerHTML = "";
  indice++;
  if (indice < preguntas.length) {
    Preguntar(indice);
  } else {
    const pFinal = document.createElement("p");
    const divImg = document.createElement("div");
    divImg.className = "divImgFinal"
    const imgFinal = document.createElement("img")
    divImg.appendChild(imgFinal);
    divTodoPregunta.appendChild(pFinal);
    divTodoPregunta.appendChild(divImg);

    if (pJugadorTesoro >= 30) {
      pFinal.innerHTML = "¡Has conseguido sobrevivir a la isla! " + pJugadorTesoro + " puntos a tu favor.";
      imgFinal.src = "./barco_saliendo.JPG"
    } else {
      pFinal.innerHTML = "Perdiste con " + pJugadorTesoro + " puntos. Prueba otra vez!!";
      imgFinal.src = "./ganan-piratas.JPG"
    }
  }
}
