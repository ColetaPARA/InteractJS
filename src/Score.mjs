// import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";

// var infoPontos = document.getElementById("score");
// var pontos = 0;

// function iniciarJogo() {
//   var goFS = document.getElementById("goFS");
//   goFS.addEventListener(
//     "click",
//     function () {
//       var videoElement = document.getElementById("main").requestFullscreen();
//       videoElement.requestFullscreen();
//     },
//     false
//   );
// }

class Score {
  #score;
  #className;

  constructor(className) {
    this.#score = 0;
    this.#className = className;
  }

  get current() {
    return this.#score;
  }

  earnScore(points, weight) {
    this.#score += Math.abs(points * weight);
    console.log(`Pontuação atual ${this.#score}`);
    var scoreElement = document.getElementById(this.#className);
    scoreElement.innerHTML = this.#score;
  }

  loseHeart(points) {
    if (this.#score - points <= 0) {
      this.#score = 0;
    } else {
      this.#score -= Math.abs(points);
    }
  }
}

export { Score };