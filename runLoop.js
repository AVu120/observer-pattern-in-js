const Loop = require("./Loop");
const OddNumberObserver = require("./OddNumberObserver");

const observedLoop = new Loop(1, 100);
observedLoop.addObserver(new OddNumberObserver());
observedLoop.run();
