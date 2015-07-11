var fs = require('fs');
var http = require('http');

var port = process.argv.slice(2)[0];
var filePath = process.argv.slice(2)[1];

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(filePath).pipe(res);
});
server.listen(port);