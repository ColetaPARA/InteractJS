class Timer {
    #timer_seconds;
    #html_id;
  
    #dificulty = {
      easy: 90, //valor teste
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
        this.update_html_element(this.#timer_seconds);
        console.log(this.#timer_seconds);
        this.#timer_seconds--;
        if (this.#timer_seconds == -1) {
          this.#html_id.innerHTML = "0";
          clearInterval(timer);
        }
      }, 1000);
    }
  
    update_html_element(time_left) {
      this.#html_id.innerHTML = time_left;
    }
    changeTimer(dificuldade) {
      this.#timer_seconds = this.#dificulty[dificuldade];
    }
}

export {Timer};