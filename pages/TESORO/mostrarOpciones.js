import { preguntas } from "./TESORO";
import { manejarRespuesta } from "./manejarRespuesta";

export function mostrarOpciones(buenas, malas, indice) {
  const divTodoPregunta = document.querySelector(".divTodoPregunta");
  const divOpciones = document.createElement("div");
  const btnBuena = document.createElement("button");
  const btnMala = document.createElement("button");

  btnBuena.innerHTML = buenas[indice];
  btnMala.innerHTML = malas[indice];

  divOpciones.appendChild(btnBuena);
  divOpciones.appendChild(btnMala);
  divTodoPregunta.appendChild(divOpciones);

  btnBuena.addEventListener("click", () => {
    manejarRespuesta(true, preguntas, indice);
  });

  btnMala.addEventListener("click", () => {
    manejarRespuesta(false, preguntas, indice);
  });
}


