import { obtenerPuntos } from "../PPOT/obtenerPuntos";
import "./RAYA.css/";
import { reiniciarJuego } from "./reiniciarJuego";
import { turnoMaquina } from "./turnoMaquina";

export const casillasVacias = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const app = document.getElementById("app");

export const tablero = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

export let pJugador = 0;
export let pMaquina = 0;
export let pResultado;

//FUNCIONES
export function actualizarPMaquina(nuevoValor) {
  pMaquina = nuevoValor;
}

export function actualizarPResultado(nuevoTexto) {
  pResultado.innerHTML = nuevoTexto;
}

export function verificarGanador() {

  for (let i = 0; i < 3; i++) {

    if (
      (tablero[i][0] !== "" && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) ||
      (tablero[0][i] !== "" && tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i])
    ) {
      return true;
    }
  }
  if (
    (tablero[0][0] !== "" && tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) ||
    (tablero[0][2] !== "" && tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0])
  ) {
    return true;
  }

  return false;
}


//APP PPAL
export const RAYA = () => {
  app.innerHTML = `<h1>Tres en raya</h1>`;

  pJugador = obtenerPuntos("pJugador");
  pMaquina = obtenerPuntos("pMaquina");

  pResultado = document.createElement("p");
  pResultado.className = "pResultado"
  pResultado.innerHTML = `Jugador ${pJugador} - Máquina ${pMaquina}`;
  app.appendChild(pResultado);

  const buttonReiniciar = document.createElement("button");
  buttonReiniciar.className = "buttonReiniciar"
  buttonReiniciar.innerHTML = "Reiniciar Partida"
  app.appendChild(buttonReiniciar)


  buttonReiniciar.addEventListener("click", () => {

    const casillas = document.querySelectorAll(".casilla");
    casillas.forEach((casilla) => {
      casilla.innerHTML = "";
    });
    casillasVacias.length = 0; // Limpiar el array
    for (let index = 1; index <= 9; index++) {
      casillasVacias.push(index.toString());
    }
    pJugador = 0;
    pMaquina = 0;

    pResultado.innerHTML = `Jugador ${pJugador} - Máquina ${pMaquina}`;

    localStorage.setItem("pJugador", pJugador);
    localStorage.setItem("pMaquina", pMaquina);
  });


  pJugador = obtenerPuntos("pJugador");
  pMaquina = obtenerPuntos("pMaquina");

  //Crear grilla con los 9 div
  const divCasillas = document.createElement("div");
  divCasillas.className = "divCasillas";

  for (let index = 0; index < 9; index++) {
    const casilla = document.createElement("div");
    casilla.className = "casilla";
    casilla.id = index + 1;
    divCasillas.appendChild(casilla);

    casilla.addEventListener("click", () => {

      const indexToRemove = casillasVacias.indexOf(casilla.id.toString()); //Busco el id de la casilla a quitar.
      //Quito las casillas utilizadas de la lista de disponibles.
      if (indexToRemove !== -1) {
        casillasVacias.splice(indexToRemove, 1);

        // Agrego imagen "X" a la casilla
        const imgX = document.createElement("img");
        imgX.src = "./X.png";
        casilla.appendChild(imgX);

        // Actualizar estado del tablero
        const fila = Math.floor((casilla.id - 1) / 3);
        const columna = (casilla.id - 1) % 3;
        tablero[fila][columna] = "X";

        // Verificar si hay un ganador
        setTimeout(() => {
          if (verificarGanador()) {
            const pGanador = document.createElement("p");
            pGanador.innerHTML = "Felicidades, ¡Has ganado!";
            pGanador.className = "pMensajeFinal"
            pJugador += 1;
            pResultado.innerHTML = `Jugador ${pJugador} - Máquina ${pMaquina}`;
            app.appendChild(pGanador);

            setTimeout(() => {
              reiniciarJuego();
              pGanador.innerHTML = ""

              localStorage.setItem("pJugador", pJugador);
              localStorage.setItem("pMaquina", pMaquina);
            }, 1000);
          } else {
            turnoMaquina();
          }
        }, 200);
      } else {
        alert("Esta casilla ya está ocupada, elige otra vacía");
      }
    });

  }

  app.appendChild(divCasillas);
};
