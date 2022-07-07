class Lixeira {
  constructor(color, type) {
    this.color = color;
    this.type = type;
    this.content = [];
  }

  get color() {
    return this.color;
  }

  get type() {
    return this.type;
  }

  addContent(object) {
    try {
      if (object["type"] == this.type) {
        this.content.push(object);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}

module.exports = Lixeira;
