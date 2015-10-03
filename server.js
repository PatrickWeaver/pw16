var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");


http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Patrick Weaver");
  response.end();
}).listen(3000);