class Observer {
  // called in observed class to notify/send-event to each observer instance.
  notify(event) {
    /* logic of when observer should react to an event is encapsulated in the child class of this class, 
       i.e. this.shouldReactToEvent() should be overwritten with shouldReactToEvent(event) in the child class. */
    if (this.shouldReactToEvent(event)) {
      /* logic of how the observer should react to an event is encapsulated in the child class of this class, 
         i.e. this.reactToEvent() should be overwritten with reactToEvent(event) in the child class. */
      this.reactToEvent(event);
    }
  }

  shouldReactToEvent() {
    throw new Error("This needs to be implemented.");
  }

  reactToEvent() {
    throw new Error("This needs to be implemented.");
  }
}

module.exports = Observer;
