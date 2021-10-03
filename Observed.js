class Observed {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  // event is the notification that is sent to all observers.
  notifyObservers(event) {
    this.observers.forEach((observer) => observer.notify(event));
  }
}

module.exports = Observed;
