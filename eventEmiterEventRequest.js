const http = require("http");
const events = require("events");

const eventEmitter = new events.EventEmitter();

const server = http.createServer(function (req, res) {
  // Event Listener
  eventEmitter.on("user request", function () {
    console.log("A request has been done on the server !");
  });
  res.end("Server Works !");
});
// Event Trigger
eventEmitter.emit("user request");

server.listen(3000, "localhost", function () {
  console.log("Server Start listening on localhost:3000");
});
