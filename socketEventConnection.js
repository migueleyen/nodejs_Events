const http = require("http");

const server = http.createServer();

//Event Listener Called
// function()empty dont handler server event connection
// Event: 'connection' #
/* function (socket) { }
When a new TCP stream is established. socket is an object of type net.Socket. Usually users will not want to access this event. The socket can also be accessed at request.connection. */

server.on("connection", function (socket) {
  console.log("New Conection ...");
});

// Event Emit connection :with trigger pressing in Url :
//localhost:3000 + Enter

// Running Listening Port

server.listen(3000);

console.log("Server started on localhost:port : 3000");

/* server.listen(3000, "localhost", function () {
  console.log("Server started Listening on port : 3000");
}); */
