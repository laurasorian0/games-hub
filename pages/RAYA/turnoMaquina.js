import { obtenerPuntos } from "../PPOT/obtenerPuntos";
import { actualizarPMaquina, actualizarPResultado, casillasVacias, pJugador, pMaquina, tablero, verificarGanador } from "./RAYA";
import { reiniciarJuego } from "./reiniciarJuego";



export function turnoMaquina() {
  // Verificar si quedan casillas vacías
  if (casillasVacias.length > 0) {
    // Seleccionar una casilla vacía aleatoria
    const randomIndex = Math.floor(Math.random() * casillasVacias.length);
    const randomCasillaId = casillasVacias[randomIndex];
    casillasVacias.splice(randomIndex, 1);

    // Agregar imagen "O" a la casilla aleatoria
    const imgO = document.createElement("img");
    imgO.src = "./O.png";
    document.getElementById(randomCasillaId).appendChild(imgO);

    // Actualizar tablero
    const fila = Math.floor((randomCasillaId - 1) / 3);
    const columna = (randomCasillaId - 1) % 3;
    tablero[fila][columna] = "O";

    //Si la máquina ha ganado
    setTimeout(() => {

      if (verificarGanador()) {
        const pGanador = document.createElement("p");
        pGanador.innerHTML = "Punto para tu contrincante";
        pGanador.className = "pMensajeFinal";
        app.appendChild(pGanador);

        actualizarPMaquina(pMaquina + 1);
        actualizarPResultado(`Jugador ${pJugador} - Máquina ${pMaquina}`);

        localStorage.setItem("pJugador", pJugador);
        localStorage.setItem("pMaquina", pMaquina);

        setTimeout(() => {
          reiniciarJuego();
          pGanador.innerHTML = ""
          return true;
        }, 1000);
      }
    }, 200);
  } else {
    const pEmpate = document.createElement("p");
    pEmpate.innerHTML = "¡EMPATE!";
    pEmpate.className = "pMensajeFinal";
    app.appendChild(pEmpate);

    setTimeout(() => {
      reiniciarJuego();
      pEmpate.innerHTML = ""
    }, 1000);
  }
}
