import { datosPPOT } from "./PPOT";

export const tiradaMaquina = () => {

  var numAleatorio = Math.floor(Math.random() * datosPPOT.length);
  var eleccionMaquina = datosPPOT[numAleatorio].text;
  return eleccionMaquina;
}