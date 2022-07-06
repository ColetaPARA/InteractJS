class Score {
  #score;
  #className;

  #scoreToWin = {
    easy: 5000, //valor teste
    medium: 7000,
    hard: 10000,
  };
  constructor(className, dificulty) {
    this.#score = 0;
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
    //criar função para perder corações
  }

}

export { Score };