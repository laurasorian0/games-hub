import { PPOT } from "../../pages/PPOT/PPOT";
import { RAYA } from "../../pages/RAYA/RAYA";
import { TESORO } from "../../pages/TESORO/TESORO";
// import { createButton } from "../button/button";
import "./header.css/"

const buttons = [
  {
    text: "Piedra, papel o tijera",
    page: PPOT
  },
  {
    text: "Tres en raya",
    page: RAYA
  },
  {
    text: "Encuentra el tesoro",
    page: TESORO
  }
]

export const createHeader = () => {
  const app = document.getElementById("app");
  const header = document.createElement("header");
  const divButtons = document.createElement("div");
  divButtons.className = "divButtons"

  const pBienvenido = document.createElement("p");
  pBienvenido.textContent = "¡Bienvenido a mi hub de juegos!";

  const pElige = document.createElement("p")
  pElige.textContent = "Elige uno de los tres juegos para comenzar"

  for (const page of buttons) {

    const button = document.createElement("button");
    button.innerHTML = page.text;
    button.className = "buttonPpal"

    divButtons.appendChild(button);

    button.addEventListener("click", () => {
      // Ocultar los elementos pBienvenido y pElige al hacer clic en un botón
      pBienvenido.style.display = "none";
      pElige.style.display = "none";
      header.style.paddingTop = "0";
      page.page(); // Aquí podrías agregar lógica adicional si es necesario
    });

    document.body.insertBefore(header, app);
    header.appendChild(pBienvenido);
    header.appendChild(pElige);
    header.appendChild(divButtons)



  }
}