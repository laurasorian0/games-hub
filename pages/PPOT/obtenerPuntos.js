export const obtenerPuntos = (nombre) => {
  let puntos = localStorage.getItem(nombre);
  return puntos ? parseInt(puntos) : 0;
};