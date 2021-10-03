const Looper = require("./Loop");
const OddObserver = require("./OddObserver");

const l = new Looper(1, 100);
l.addObserver(new OddObserver());
l.run();
