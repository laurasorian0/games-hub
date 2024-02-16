import { guardarPuntos } from "./guardarPuntos";

export const actualizarPuntos = () => {
  guardarPuntos("jugador", puntosJugador);
  guardarPuntos("maquina", puntosMaquina);
};