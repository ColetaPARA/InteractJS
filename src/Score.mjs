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

  earn_score(points, weight) {
    this.#score += Math.abs(points * weight);
    console.log(`Pontuação atual ${this.#score}`);
    let scoreElement = document.getElementById(this.#className);
    console.log(scoreElement);
    scoreElement.innerHTML = this.#score;
  }

  lose_score(points) {
    if (this.#score - points <= 0) {
      this.#score = 0;
    } else {
      this.#score -= Math.abs(points);
    }
  }
}

export { Score };
