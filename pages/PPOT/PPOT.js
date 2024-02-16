import { tiradaMaquina } from "./JugMaquina";
import "./PPOT.css/"
import { quienGana } from "./ganador";
import { obtenerPuntos } from "./obtenerPuntos";

export const datosPPOT = [
  {
    text: "Piedra",
    img: "./piedra.png",
  },
  {
    text: "Papel",
    img: "./papel.png",
  },
  {
    text: "Tijera",
    img: "./tijera.png",
  }
]

let selectUser = "";
export let puntosJugador = 0;
export let puntosMaquina = 0;

export const PPOT = () => {

  const app = document.querySelector("#app");
  app.innerHTML = `<h1>Piedra, papel o tijera</h1>`

  const divPPOT = document.createElement("div");
  divPPOT.className = "divPPOT";

  const divResulyReset = document.createElement("div")
  const pInicio = document.createElement("p")
  const pResultado = document.createElement("p");
  const buttonReset = document.createElement("button");

  buttonReset.className = "buttonReset";
  pInicio.innerHTML = "Elige tu mano para comenzar"
  buttonReset.innerHTML = "Reseter juego"
  divResulyReset.className = "divResulyReset"

  buttonReset.addEventListener("click", () => {
    puntosJugador = 0;
    puntosMaquina = 0;

    pResultado.innerHTML = `Jugador ${puntosJugador} - Máquina ${puntosMaquina}`;

    localStorage.setItem("puntosJugador", puntosJugador);
    localStorage.setItem("puntosMaquina", puntosMaquina);
  });

  puntosJugador = obtenerPuntos("jugador");
  puntosMaquina = obtenerPuntos("maquina");

  console.log(puntosJugador, puntosMaquina);

  for (const dato of datosPPOT) {
    const img = document.createElement("img");
    img.src = dato.img;
    img.alt = dato.text;
    img.className = "imgPPOT"
    divPPOT.appendChild(img);

    img.addEventListener("click", () => {

      pInicio.style.display = "none";

      selectUser = dato.text;
      console.log("Usuario eligió: ", selectUser);

      const eleccionMaquina = tiradaMaquina();
      console.log("Máquina eligió: ", eleccionMaquina);

      let resultado = quienGana(selectUser, eleccionMaquina);
      if (resultado === "jugador") {
        puntosJugador += 1;
      } else if (resultado === "maquina") {
        puntosMaquina += 1;
      }

      pResultado.innerHTML = `Jugador ${puntosJugador} - Máquina ${puntosMaquina}`;

      localStorage.setItem("puntosJugador", puntosJugador);
      localStorage.setItem("puntosMaquina", puntosMaquina);

    })
    divResulyReset.appendChild(pInicio)
    divResulyReset.appendChild(pResultado)
    divResulyReset.appendChild(buttonReset)
    app.appendChild(divResulyReset)
    app.appendChild(divPPOT)

    puntosJugador = parseInt(localStorage.getItem("puntosJugador")) || 0;
    puntosMaquina = parseInt(localStorage.getItem("puntosMaquina")) || 0;
  }

}