const Observed = require("./Observed");

class Loop extends Observed {
  constructor(first, last) {
    super();
    this.start = first;
    this.state = first;
    this.end = last;
  }

  run() {
    for (this.state = this.start; this.state < this.end; this.state++) {
      this.notifyObservers({
        name: "increment of loop",
        value: this.state,
      });
    }
  }
}

module.exports = Loop;
