import { pJugadorTesoro, preguntas, respuestasBuenas, respuestasMalas } from "./TESORO";
import { mostrarOpciones } from "./mostrarOpciones";

export function Preguntar(indice) {
  const divTodoPregunta = document.querySelector(".divTodoPregunta");

  const puntuacion = document.createElement("p");
  puntuacion.innerHTML = "Puntuación: " + pJugadorTesoro;

  const pregunta = preguntas[indice];

  const divPregunta = document.createElement("div");
  const pPregunta = document.createElement("p");
  const divImgPregunta = document.createElement("div")
  const imgPregunta = document.createElement("img");

  divImgPregunta.className = "divImgPregunta"
  pPregunta.innerHTML = pregunta.texto;
  imgPregunta.src = pregunta.img;
  divPregunta.appendChild(puntuacion);
  divPregunta.appendChild(pPregunta);
  divImgPregunta.appendChild(imgPregunta)
  divPregunta.appendChild(divImgPregunta);
  divTodoPregunta.appendChild(divPregunta);

  mostrarOpciones(respuestasBuenas, respuestasMalas, indice);
}
