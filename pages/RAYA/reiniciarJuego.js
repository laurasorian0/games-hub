import { casillasVacias, tablero } from "./RAYA";

export function reiniciarJuego() {
  // Reiniciar el tablero y las casillas vacías
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tablero[i][j] = "";
    }
  }

  // Limpiar las imágenes
  const casillas = document.querySelectorAll(".casilla");
  casillas.forEach((casilla) => {
    casilla.innerHTML = "";
  });

  // Reiniciar las casillas vacías con los números del 1 al 9
  casillasVacias.length = 0; // Limpiar el array
  for (let index = 1; index <= 9; index++) {
    casillasVacias.push(index.toString());
  }
}

