const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data available");
  } else {
    res.end("Hello, world!");
  }
});

server.listen(5777);
