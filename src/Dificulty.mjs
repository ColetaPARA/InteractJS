export default class Dificulty {
  #dificulty;

  constructor() {
    this.#dificulty = this.#parseDificultyCookie("dificulty") || "easy";
    document.cookie = `dificulty=${this.#dificulty}`;
  }

  #parseDificultyCookie(cookie_name) {
    let name = cookie_name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setDificulty(new_dificulty) {
    this.#dificulty = new_dificulty;
    document.cookie = `dificulty=${this.#dificulty}`;
  }

  getDificulty() {
    return this.#dificulty;
  }
}
