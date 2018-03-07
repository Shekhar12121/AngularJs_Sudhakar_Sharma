var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200,{'content-type':'text/html'});
    response.end("Welcome to Node Server");
}).listen("3000");
console.log('Server Started at http://127.0.0.1:3000');
