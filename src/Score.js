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

  constructor(score = 0) {
    this.#score = score;
  }

  get current() {
    return this.#score;
  }

  earn_score(points) {
    this.#score += Math.abs(points);
  }

  lose_score(points) {
    if (this.#score - points <= 0) {
      this.#score = 0;
    } else {
      this.#score -= Math.abs(points);
    }
  }
}

module.exports = Score;
