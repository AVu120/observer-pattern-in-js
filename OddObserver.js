const Observer = require("./Observer");

class OddObserver extends Observer {
  constructor() {
    super();
  }

  // react only to events with odd values.
  shouldReactToEvent(event) {
    return event.name === "increment of loop" && event.value % 2 != 0;
  }

  reactToEvent(event) {
    console.log("----------------------");
    console.log("Odd number found!");
    console.log(event.value);
    console.log("----------------------");
  }
}

module.exports = OddObserver;
