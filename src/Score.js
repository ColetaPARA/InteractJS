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
