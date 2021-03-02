const http = require("http");
const events = require("events");

const eventEmitter = new events.EventEmitter();

const server = http.createServer(function (req, res) {
  // Event Trigger after Event Listener Logged

  eventEmitter.emit("user request");

  res.end("Server Works !");
});

// Event Listener Logged:event.Emitter.on

eventEmitter.on("user request", function () {
  console.log("A request has been done on the server !");
});

//Run Start Listen Server
server.listen(3000, "localhost", function () {
  console.log("Server Start listening on localhost:3000");
});
