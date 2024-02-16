export const guardarPuntos = (nombre, puntos) => {
  localStorage.setItem(nombre, puntos.toString());
};