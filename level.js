import { dificulty } from "./Game.js";

document.querySelector("#easy").addEventListener("click", () => {
  dificulty.setDificulty("easy");
});

document.querySelector("#medium").addEventListener("click", () => {
  dificulty.setDificulty("medium");
});

document.querySelector("#hard").addEventListener("click", () => {
  dificulty.setDificulty("hard");
});
