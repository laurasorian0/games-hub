// ganador.js
import { tiradaMaquina } from "./JugMaquina";
import { puntosJugador, puntosMaquina } from "./PPOT";

let mensaje = document.createElement("p");
export const quienGana = (elecJugador, elecMaquina) => {
  const app = document.getElementById("app");
  console.log(app);

  mensaje.innerHTML = "";
  mensaje.className = "mensaje";
  app.appendChild(mensaje);

  if (elecJugador === elecMaquina) {
    mensaje.innerHTML = `¡EMPATE! La máquina también eligió ${elecMaquina}`;
  } else if (
    (elecJugador === "Piedra" && elecMaquina === "Papel") ||
    (elecJugador === "Papel" && elecMaquina === "Tijera") ||
    (elecJugador === "Tijera" && elecMaquina === "Piedra")
  ) {
    mensaje.innerHTML = `La máquina eligió ${elecMaquina}, punto para tu contrincante!!`;
    return "maquina";
  } else if (
    (elecJugador === "Papel" && elecMaquina === "Piedra") ||
    (elecJugador === "Tijera" && elecMaquina === "Papel") ||
    (elecJugador === "Piedra" && elecMaquina === "Tijera")
  ) {
    mensaje.innerHTML = `¡¡GANASTE!! la máquina eligió ${elecMaquina}, punto para ti`;
    return "jugador";
  }
};
