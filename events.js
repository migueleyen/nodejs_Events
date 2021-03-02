const eventEmitter = require("events");
// const emitter =  eventEmitter();
const emitter = new eventEmitter();

//Event Listener was Called - Before emit Event - Console Response

emitter.on("TrigerEvent", function (data) {
  console.log("Listener Called ", data);
});

// Event Trigger - Raise and Event -Send Signals

emitter.emit("TrigerEvent", { id: 1, url: "htttp://.." });

/* //Event Listener was Called - After emit Event - Console Do Nothing 
emitter.on("TrigerEvent", function () {
  console.log("Listener Called ");
}); */
