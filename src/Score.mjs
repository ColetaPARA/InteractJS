class Score {
  #score;
  #className;
  #life;

  #scoreToWin = {
    easy: 5000, //valor teste
    medium: 7000,
    hard: 10000,
  };
  constructor(className, dificulty) {
    this.#score = 0;
    this.#life = document.querySelector("#heart");
    this.#className = className;
    this.#scoreToWin = this.#scoreToWin[dificulty];
  }

  get current() {
    return this.#score;
  }

  earnScore(points) {
    this.#score += Math.abs(points);
    var scoreElement = document.getElementById(this.#className);
    scoreElement.innerHTML = this.#score;
  }

  checkWin() {
    if (this.#score >= this.#scoreToWin){
      console.log('VENCEU');
      return true;
    }
    else{
      console.log('PERDEU');
      return false;
    }
  }
  changeScoreToWin(dificuldade) {
    this.#scoreToWin = this.#scoreToWin[dificuldade];
  }
  loseHeart() {
    this.#life.remove();
    console.log("perde coração");
    this.#life = document.querySelector("#heart");
    return this.#life = document.querySelector("#heart");
    //criar função para perder corações
  }

}

export { Score };