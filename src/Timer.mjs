class Timer {
    #timer_seconds;
    #html_id;
  
    #dificulty = {
      easy: 90,
      medium: 60,
      hard: 30,
    };
  
    constructor(dificulty) {
      this.#html_id = document.querySelector("#time");
      this.#timer_seconds = this.#dificulty[dificulty];
    }

    get time() {
      return this.#timer_seconds;
    }
  
    startTimer() {
      let timer = setInterval(() => {
        this.#html_id.innerHTML = this.#timer_seconds;
        this.#timer_seconds--;
        if (this.#timer_seconds == -1) {
          this.#html_id.innerHTML = "0";
          clearInterval(timer);
        }
      }, 1000);
    }

    changeTimer(dificuldade) {
      this.#timer_seconds = this.#dificulty[dificuldade];
    }
}

export {Timer};