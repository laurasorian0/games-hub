import { obtenerPuntos } from "../PPOT/obtenerPuntos";
import { Preguntar } from "./Preguntar";
import "./TESORO.css/"


export let pJugadorTesoro = 0;
export let pMaquinaTesoro = 0;

export const preguntas = [
  {
    texto: "Por mala o buena suerte, has naufragado y acabado en una isla desierta. Tienes algunas latas de comida que han llegado contigo y una vieja maleta con un candado.",
    img: "./maleta.JPG"
  },
  {
    texto: "¡¡Dentro de la maleta hay un mapa antiguo!! una de las partes parece la zona de costa donde estás... ¿Quieres investigar la isla?",
    img: "./mapa.JPG"
  },
  {
    texto: "Al adentrarte un poco en la isla descubres un lago. Llevas andando bastante y tienes sed...",
    img: "./lago.JPG"
  },
  {
    texto: "Encuentras huellas en el suelo, parecen de un animal no muy grande, lo sigues hasta dar con un pequeño Jaguar:",
    img: "./jaguar.JPG"
  },
  {
    texto: "Estás a punto de llegar al lugar que marca el mapa, pero a lo lejos ves un barco anclado en la orilla",
    img: "./barco.JPG"
  },
  {
    texto: "Estás a solo unos metros, pero... ¿Quiénes son esos? Unos piratas han llegado antes que tú...",
    img: "./piratas.JPG"
  }
]
export const respuestasBuenas = [
  "Decido gastar un poco de energía en buscar algo para abrir la maleta.",
  "¡¡Por supuesto!!",
  "Un poco de agua no le hace mal a nadie.",
  "Paso despacio por su lado e intento acariciarle.",
  "Ahora estoy demasiado cerca, primero el tesoro, después el barco.",
  "Habrá que dejar el tesoro para otra aventura... ¡¡¡Nos vamos en su barco!!!"
]
export const respuestasMalas = [
  "Ya tengo comida suficiente hasta que vengan a salvarme.",
  "Estoy perdido en una isla desconocida... NO voy a investigar nada.",
  "Seguro que está contaminada, volveré y me tomaré una de las Coca-Cola que tengo reservadas",
  "Corro a toda velocidad para intentar alejarme lo antes posible. Si hay un pequeño tiene que haber una madre!!",
  "¡¡¡Adiós isla del demonio!!! que el siguiente náufrago busque las dos monedas que debes tener escondidas",
  "Me acerco amablemente y les digo de compartir el tesoro."
]

export function actualizarpJugadorTesoro(puntuacion) {
  pJugadorTesoro += puntuacion;
  localStorage.setItem("pJugadorTesoro", pJugadorTesoro);
}

export const TESORO = () => {

  const app = document.querySelector("#app");
  app.innerHTML = `<h1>Encuentra el tesoro</h1>`

  pJugadorTesoro = obtenerPuntos("pJugadorTesoro");

  const buttonReinicio = document.createElement("button")
  buttonReinicio.innerHTML = "Reiniciar juego"
  buttonReinicio.className = "buttonReinicio"
  app.appendChild(buttonReinicio)

  const divTodoPregunta = document.createElement("div")
  divTodoPregunta.className = "divTodoPregunta"
  const pInicio = document.createElement("p");
  const divImg = document.createElement("div");
  const imgInicio = document.createElement("img");
  divImg.className = "divImgInicio"
  imgInicio.src = "./tesoro.JPG"
  pInicio.innerHTML = "Bienvenido al juego ENCUENTRA EL TESORO. Deberás obtener al menos 30 puntos para ganar. Haz click en este mensaje para comenzar.";

  divTodoPregunta.appendChild(pInicio);
  divImg.appendChild(imgInicio);
  divTodoPregunta.appendChild(divImg)
  app.appendChild(divTodoPregunta)



  buttonReinicio.addEventListener("click", () => {
    divTodoPregunta.innerHTML = "";
    pJugadorTesoro = 0;
    localStorage.setItem("pJugadorTesoro", pJugadorTesoro);
    Preguntar(indicePregunta);
  });


  let indicePregunta = 0;

  pInicio.addEventListener("click", () => {
    divTodoPregunta.innerHTML = "";
    pJugadorTesoro = 0;
    localStorage.setItem("pJugadorTesoro", pJugadorTesoro);

    Preguntar(indicePregunta);
  });
  divImg.addEventListener("click", () => {
    divTodoPregunta.innerHTML = "";
    pJugadorTesoro = 0;
    localStorage.setItem("pJugadorTesoro", pJugadorTesoro);

    Preguntar(indicePregunta);
  });
}