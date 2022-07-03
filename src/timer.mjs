class Timer {
    #timer_seconds;
    #html_id;
  
    #dificulty = {
      easy: 90,
      medium: 60,
      hard: 3, //3 para teste
    };
  
    constructor(dificulty) {
      this.#html_id = document.querySelector("#time");
      console.log(this.#html_id);
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
}

export {Timer};