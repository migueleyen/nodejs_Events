const http = require("http");

const server = http.createServer(function (req, res) {
  // When Server.Emit pressing url:
  // lacalhost:3000, entonces :

  res.end("Server Works ! ");
});

server.on("connection", function (socket) {
  console.log("Server Connected....");
});

server.listen(3000, "localhost", function () {
  console.log("Server started listening on localhost:3000");
});
